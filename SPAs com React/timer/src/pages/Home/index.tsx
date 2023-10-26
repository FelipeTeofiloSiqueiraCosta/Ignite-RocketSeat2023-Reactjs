import { Pause, Play } from "phosphor-react";
import { FormContainer, FormSubmiteButtonActive, FormSubmiteButtonPause, HomeContainer } from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {  z } from "zod";
import {  useEffect, useState } from "react";
import {  differenceInSeconds } from "date-fns";
import { Timer } from "./Timer";
import { NewCycleForm } from "./NewCycleForm";

const zodSchema = z
  .object({
    name: z
      .string()
      .min(1, "Informe o nome do projeto")
      .max(50, "Limite máximo de 50 caracteres"),
    duration: z.number().min(5, "O mínimo é 5").max(60, "O máximo é 60"),
  })
  .required();

type FormInputs = z.infer<typeof zodSchema>;

interface Cycle{
  id: string;
  task: string;
  duration: number;
  startDate: Date;
  interruptedDate?: Date,
  finishedDate?: Date,
}

export function Home() {
  const [cycle, setCycle] = useState<Cycle[]>([])
  const [cycleIdActive, setCycleIdActive] = useState<string | undefined>()
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)
  const {
    register, // função que registra os inputs,
    handleSubmit, // função que lida com o submit
    watch,
    // formState,
    reset,
  } = useForm<FormInputs>({
    resolver: zodResolver(zodSchema),
    defaultValues: {
      duration: 5,
      name: "",
    },
  });

  const onSubmit = (fields: FormInputs) => {

    const id = String(new Date().getTime())
    const createdCycle: Cycle = {
      id,
      duration: fields.duration,
      task: fields.name,
      startDate: new Date()
    }

    setCycle(cycles => [...cycles, createdCycle])
    setAmountSecondsPassed(0)
    setCycleIdActive(id)
    reset();
  };

  function handleInterruptCycle(){
    setCycleIdActive(undefined)
    setCycle(cycles => cycles.map(cycle => {
      if(cycle.id === cycleIdActive){
        cycle.interruptedDate = new Date()
      }
      return cycle
    }))
    setAmountSecondsPassed(0)
  }
  const activeCycle = cycle.find(cycle => cycle.id === cycleIdActive)
  let totalSeconds = activeCycle ? activeCycle.duration*60: 0;

 
  useEffect(()=>{
    let interval: number;
    if(activeCycle ){

      interval = setInterval(()=>{
        const difference = differenceInSeconds(new Date(), activeCycle.startDate)

        if(difference >= totalSeconds){
          setCycleIdActive(undefined)
          setAmountSecondsPassed(0)
          setCycle(cycles => cycles.map(cycle => {
            if(cycle.id === cycleIdActive){
              cycle.finishedDate = new Date()
            }
            return cycle
          }))

          clearInterval(interval)
        }else{

          setAmountSecondsPassed(difference)
        }
      },1000)

    }
    return ()=>{

      clearInterval(interval)
    }
  },[activeCycle, totalSeconds, cycleIdActive])

  totalSeconds -= amountSecondsPassed;

 
  const minutes = Math.floor(totalSeconds/60);
  const seconds = totalSeconds % 60;

  const minutesString = String(minutes).padStart(2, "0");
  const secondsString = String(seconds).padStart(2, "0");

  useEffect(()=>{
    document.title = `${minutesString}:${secondsString}`
  })

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <NewCycleForm/>

        <Timer minute={minutesString} second={secondsString} />

        {
          !activeCycle ?
          (
            <FormSubmiteButtonActive
          type="submit"
          disabled={(!watch("name") || !watch("duration"))}
          title="Enviar"
        >
               <Play size={24} /> Começar
        </FormSubmiteButtonActive>
          ):
          (
            <FormSubmiteButtonPause
            type="button"
            title="Pausar"
            onClick={handleInterruptCycle}
          >
               <Pause size={24} /> Interromper
        </FormSubmiteButtonPause>
          )
        }
      </form>
    </HomeContainer>
  );
}

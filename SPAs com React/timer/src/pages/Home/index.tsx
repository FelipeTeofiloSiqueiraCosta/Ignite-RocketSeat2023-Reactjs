import { Play } from "phosphor-react";
import { FormContainer, HomeContainer, TimerContainer } from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {  z } from "zod";
import {  useEffect, useState } from "react";
import {  differenceInSeconds } from "date-fns";

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
  // console.log(cycle)
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
 
  const activeCycle = cycle.find(cycle => cycle.id === cycleIdActive)

  useEffect(()=>{
    let interval: number;
    if(activeCycle && activeCycle.duration*60>0){

      interval = setInterval(()=>{
        const difference = differenceInSeconds(new Date(), activeCycle.startDate)
        setAmountSecondsPassed(difference)
        
      },1000)

    }
    return ()=>{

      clearInterval(interval)
    }
  },[activeCycle])
  
 

  let totalSeconds = activeCycle ? activeCycle.duration*60: 0;

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
        <FormContainer>
          <label htmlFor="project-name">Vou trabalhar em </label>
          <input
            type="text"
            id="project-name"
            placeholder="Dê um nome para seu projeto"
            list="tasks-sugestions"
            {...register("name")}
          />

          <datalist id="tasks-sugestions">
            <option value="Porjeto 1">Porjeto 1</option>
            <option value="Porjeto 2">Porjeto 2</option>
            <option value="Porjeto 3">Porjeto 3</option>
            <option value="Porjeto 4">Porjeto 4</option>
          </datalist>
          <label htmlFor="duration">durante </label>
          <input
            type="number"
            id="duration"
            placeholder="- 00 +"
            step={5}
            min={5}
            max={60}
            {...register("duration", { valueAsNumber: true })}
          />
          <span>minutos</span>
        </FormContainer>

        <TimerContainer>
          <span>{minutesString[0]}</span>
          <span>{minutesString[1]}</span>
          <span>:</span>
          <span>{secondsString[0]}</span>
          <span>{secondsString[1]}</span>
        </TimerContainer>

        <button
          type="submit"
          disabled={!watch("name") || !watch("duration")}
          title="Enviar"
        >
          <Play size={24} />
          Começar
        </button>
      </form>
    </HomeContainer>
  );
}

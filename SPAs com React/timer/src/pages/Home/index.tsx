import { Play } from "phosphor-react";
import { FormContainer, HomeContainer, TimerContainer } from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

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
}

export function Home() {
  const [cycle, setCycle] = useState<Cycle[]>([])
  const [cycleIdActive, setCycleIdActive] = useState<string | undefined>()
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
      task: fields.name
    }

    setCycle(cycles => [...cycles, createdCycle])
    setCycleIdActive(id)
    reset();
  };
  // console.log("renderized");
  // console.log(formState.errors);

  const activeCycle = cycle.find(cycle => cycle.id === cycleIdActive)
  console.log(activeCycle);
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
          <span>0</span>
          <span>0</span>
          <span>:</span>
          <span>0</span>
          <span>0</span>
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

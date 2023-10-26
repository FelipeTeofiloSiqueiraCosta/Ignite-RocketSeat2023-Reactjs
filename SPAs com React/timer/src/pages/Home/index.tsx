import { Pause, Play } from "phosphor-react";
import {
  FormSubmiteButtonActive,
  FormSubmiteButtonPause,
  HomeContainer,
} from "./styles";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { createContext, useState } from "react";

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

export type FormInputs = z.infer<typeof zodSchema>;
interface Cycle {
  id: string;
  task: string;
  duration: number;
  startDate: Date;
  interruptedDate?: Date;
  finishedDate?: Date;
}

interface CycleContextData {
  activeCycle: Cycle | undefined;
  amountSecondsPassed: number;
  cycleIdActive: string | undefined;
  markAsFinished: () => void;
  setSecondsPassad: (seconds: number) => void;
}

export const CycleContext = createContext({} as CycleContextData);

export function Home() {
  const [cycle, setCycle] = useState<Cycle[]>([]);
  const [cycleIdActive, setCycleIdActive] = useState<string | undefined>();
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

  const newCycleForm = useForm<FormInputs>({
    resolver: zodResolver(zodSchema),
    defaultValues: {
      duration: 5,
      name: "",
    },
  });
  const {
    handleSubmit, // função que lida com o submit
    watch,
    // formState,
    reset,
  } = newCycleForm;

  function markAsFinished() {
    setCycle((cycles) =>
      cycles.map((cycle) => {
        if (cycle.id === cycleIdActive) {
          cycle.finishedDate = new Date();
        }
        return cycle;
      })
    );
  }

  function setSecondsPassad(value: number) {
    setAmountSecondsPassed(value);
  }

  const onSubmit = (fields: FormInputs) => {
    const id = String(new Date().getTime());
    const createdCycle: Cycle = {
      id,
      duration: fields.duration,
      task: fields.name,
      startDate: new Date(),
    };

    setCycle((cycles) => [...cycles, createdCycle]);
    setAmountSecondsPassed(0);
    setCycleIdActive(id);
    reset();
  };

  function handleInterruptCycle() {
    setCycleIdActive(undefined);
    setCycle((cycles) =>
      cycles.map((cycle) => {
        if (cycle.id === cycleIdActive) {
          cycle.interruptedDate = new Date();
        }
        return cycle;
      })
    );
    setAmountSecondsPassed(0);
  }
  const activeCycle = cycle.find((cycle) => cycle.id === cycleIdActive);

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CycleContext.Provider
          value={{
            activeCycle,
            amountSecondsPassed,
            cycleIdActive,
            markAsFinished,
            setSecondsPassad,
          }}
        >
          <FormProvider {...newCycleForm}>
            <NewCycleForm />
          </FormProvider>
          <Timer />
        </CycleContext.Provider>

        {!activeCycle ? (
          <FormSubmiteButtonActive
            type="submit"
            disabled={!watch("name") || !watch("duration")}
            title="Enviar"
          >
            <Play size={24} /> Começar
          </FormSubmiteButtonActive>
        ) : (
          <FormSubmiteButtonPause
            type="button"
            title="Pausar"
            onClick={handleInterruptCycle}
          >
            <Pause size={24} /> Interromper
          </FormSubmiteButtonPause>
        )}
      </form>
    </HomeContainer>
  );
}

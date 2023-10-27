import { Pause, Play } from "phosphor-react";
import {
  FormSubmiteButtonActive,
  FormSubmiteButtonPause,
  HomeContainer,
} from "./styles";
import { FormProvider, useForm } from "react-hook-form";

import { Timer } from "./Timer";
import { NewCycleForm } from "./NewCycleForm";
import { useCycle } from "../../contexts/CyclesContext";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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

export function Home() {
  const newCycleForm = useForm<FormInputs>({
    resolver: zodResolver(zodSchema),
    defaultValues: {
      duration: 5,
      name: "",
    },
  });

  const { onSubmit, activeCycle, handleInterruptCycle } = useCycle();
  const {
    handleSubmit, // função que lida com o submit
    watch,
    reset,
  } = newCycleForm;

  function handleCreateNewCycle(fields: FormInputs) {
    onSubmit(fields);
    reset();
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Timer />

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

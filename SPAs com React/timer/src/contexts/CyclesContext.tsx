import React, { createContext, useContext, useState } from "react";

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
  handleInterruptCycle: () => void;
  onSubmit: (fields: CycleFormInputs) => void;
  cycles: Cycle[];
}

interface CycleProviderProps {
  children: React.ReactNode;
}

interface CycleFormInputs {
  name: string;
  duration: number;
}

const CycleContext = createContext({} as CycleContextData);

export function CycleProvider({ children }: CycleProviderProps) {
  const [cycle, setCycle] = useState<Cycle[]>([]);
  const [cycleIdActive, setCycleIdActive] = useState<string | undefined>();
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

  const onSubmit = (fields: CycleFormInputs) => {
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
    // reset();
  };

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
    <CycleContext.Provider
      value={{
        activeCycle,
        amountSecondsPassed,
        cycleIdActive,
        markAsFinished,
        setSecondsPassad,
        handleInterruptCycle,
        onSubmit,
        cycles: cycle,
      }}
    >
      {children}
    </CycleContext.Provider>
  );
}

export function useCycle() {
  const context = useContext(CycleContext);

  return context;
}

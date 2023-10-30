import React, { createContext, useContext, useReducer, useState } from "react";
import {
  CycleActionTypes,
  CyclesState,
  cycleReducer,
} from "../reducers/cycles";

export interface Cycle {
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
  cycleIdActive: string | null;
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
  const [cycle, dispatch] = useReducer(cycleReducer, {
    cycleIdActive: null,
    cycles: [],
  } as CyclesState);

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

  const onSubmit = (fields: CycleFormInputs) => {
    const id = String(new Date().getTime());
    const createdCycle: Cycle = {
      id,
      duration: fields.duration,
      task: fields.name,
      startDate: new Date(),
    };

    dispatch({ type: CycleActionTypes.ADD_CYCLE, payload: createdCycle });

    setAmountSecondsPassed(0);
  };

  function markAsFinished() {
    dispatch({
      type: CycleActionTypes.MARK_AS_FINISHED,
      payload: { cycleIdActive: cycle.cycleIdActive },
    });
  }

  function setSecondsPassad(value: number) {
    setAmountSecondsPassed(value);
  }

  function handleInterruptCycle() {
    dispatch({
      type: CycleActionTypes.INTERRUPT_CYCLE,
      payload: { cycleIdActive: cycle.cycleIdActive },
    });

    setAmountSecondsPassed(0);
  }

  const activeCycle = cycle.cycles.find(
    (item) => item.id === cycle.cycleIdActive
  );

  return (
    <CycleContext.Provider
      value={{
        activeCycle,
        amountSecondsPassed,
        cycleIdActive: cycle.cycleIdActive,
        markAsFinished,
        setSecondsPassad,
        handleInterruptCycle,
        onSubmit,
        cycles: cycle.cycles,
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

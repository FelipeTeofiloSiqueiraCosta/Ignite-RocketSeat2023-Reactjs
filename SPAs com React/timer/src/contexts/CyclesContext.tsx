import React, { createContext, useContext, useReducer, useState } from "react";

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

interface ActionType {
  type: string;
  payload: any;
}

const CycleContext = createContext({} as CycleContextData);

export function CycleProvider({ children }: CycleProviderProps) {
  const [cycle, dispatch] = useReducer((state: Cycle[], action: ActionType) => {
    switch (action.type) {
      case "ADD_CYCLE":
        state = [...state, action.payload];
        break;
      case "MARK_AS_FINISHED":
        state = state.map((cycle) => {
          if (cycle.id === action.payload.cycleIdActive) {
            cycle.finishedDate = new Date();
          }
          return cycle;
        });
        break;
      case "INTERRUPT_CYCLE":
        state = state.map((cycle) => {
          if (cycle.id === action.payload.cycleIdActive) {
            cycle.interruptedDate = new Date();
          }
          return cycle;
        });
        break;
    }

    return state;
  }, []);

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
    dispatch({ type: "ADD_CYCLE", payload: createdCycle });
    // setCycle((cycles) => [...cycles, createdCycle]);
    setAmountSecondsPassed(0);
    setCycleIdActive(id);
    // reset();
  };

  function markAsFinished() {
    dispatch({
      type: "MARK_AS_FINISHED",
      payload: { cycleIdActive },
    });
    // setCycle((cycles) =>
    //   cycles.map((cycle) => {
    //     if (cycle.id === cycleIdActive) {
    //       cycle.finishedDate = new Date();
    //     }
    //     return cycle;
    //   })
    // );
  }

  function setSecondsPassad(value: number) {
    setAmountSecondsPassed(value);
  }

  function handleInterruptCycle() {
    setCycleIdActive(undefined);
    dispatch({
      type: "INTERRUPT_CYCLE",
      payload: { cycleIdActive },
    });
    // setCycle((cycles) =>
    //   cycles.map((cycle) => {
    //     if (cycle.id === cycleIdActive) {
    //       cycle.interruptedDate = new Date();
    //     }
    //     return cycle;
    //   })
    // );
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

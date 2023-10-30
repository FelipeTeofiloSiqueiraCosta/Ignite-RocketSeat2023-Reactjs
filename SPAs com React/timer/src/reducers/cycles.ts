import { Cycle } from "../contexts/CyclesContext";

export enum CycleActionTypes {
  ADD_CYCLE = "ADD_CYCLE",
  MARK_AS_FINISHED = "MARK_AS_FINISHED",
  INTERRUPT_CYCLE = "INTERRUPT_CYCLE",
}

interface ActionType {
  type: CycleActionTypes;
  payload: any;
}

export interface CyclesState {
  cycles: Cycle[];
  cycleIdActive: string | null;
}

export const cycleReducer = (state: CyclesState, action: ActionType) => {
  switch (action.type) {
    case CycleActionTypes.ADD_CYCLE:
      return {
        cycleIdActive: action.payload.id,
        cycles: [...state.cycles, action.payload],
      } as CyclesState;

    case CycleActionTypes.MARK_AS_FINISHED:
      return {
        ...state,
        cycles: state.cycles.map((cycle) => {
          if (cycle.id === action.payload.cycleIdActive) {
            cycle.finishedDate = new Date();
          }
          return cycle;
        }),
      } as CyclesState;

    case CycleActionTypes.INTERRUPT_CYCLE:
      return {
        cycleIdActive: null,
        cycles: state.cycles.map((cycle) => {
          if (cycle.id === action.payload.cycleIdActive) {
            cycle.interruptedDate = new Date();
          }
          return cycle;
        }),
      } as CyclesState;
    default:
      return state;
  }
};

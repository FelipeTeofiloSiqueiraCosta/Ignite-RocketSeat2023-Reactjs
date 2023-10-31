import { produce } from "immer";

import { Cycle } from "../../contexts/CyclesContext";
import { CycleActionTypes } from "./actions";

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
      // return {
      //   cycleIdActive: action.payload.id,
      //   cycles: [...state.cycles, action.payload],
      // } as CyclesState;
      return produce(state, (draft) => {
        draft.cycles.push(action.payload);
        draft.cycleIdActive = action.payload.id;
      });
    case CycleActionTypes.MARK_AS_FINISHED:
      // return {
      //   ...state,
      //   cycles: state.cycles.map((cycle) => {
      //     if (cycle.id === action.payload.cycleIdActive) {
      //       cycle.finishedDate = new Date();
      //     }
      //     return cycle;
      //   }),
      // } as CyclesState;
      return produce(state, (draft) => {
        const index = draft.cycles.findIndex(
          (item) => item.id === action.payload.cycleIdActive
        );
        if (index > -1) {
          draft.cycles[index].finishedDate = new Date();
        } else {
          return state;
        }
      });

    case CycleActionTypes.INTERRUPT_CYCLE:
      // return {
      //   cycleIdActive: null,
      //   cycles: state.cycles.map((cycle) => {
      //     if (cycle.id === action.payload.cycleIdActive) {
      //       cycle.interruptedDate = new Date();
      //     }
      //     return cycle;
      //   }),
      // } as CyclesState;
      return produce(state, (draft) => {
        const index = draft.cycles.findIndex(
          (item) => item.id === action.payload.cycleIdActive
        );
        if (index > -1) {
          draft.cycles[index].interruptedDate = new Date();
          draft.cycleIdActive = null;
        }
      });
    default:
      return state;
  }
};

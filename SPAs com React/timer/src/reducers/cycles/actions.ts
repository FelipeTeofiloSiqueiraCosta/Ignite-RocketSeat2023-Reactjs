import { Cycle } from "../../contexts/CyclesContext";

export enum CycleActionTypes {
  ADD_CYCLE = "ADD_CYCLE",
  MARK_AS_FINISHED = "MARK_AS_FINISHED",
  INTERRUPT_CYCLE = "INTERRUPT_CYCLE",
}

export function addNewCycleAction(payload: Cycle) {
  return {
    type: CycleActionTypes.ADD_CYCLE,
    payload,
  };
}

export function markAsFinishedAction(payload: {
  cycleIdActive: string | null;
}) {
  return {
    type: CycleActionTypes.MARK_AS_FINISHED,
    payload,
  };
}

export function interruptCycleAction(payload: {
  cycleIdActive: string | null;
}) {
  return {
    type: CycleActionTypes.INTERRUPT_CYCLE,
    payload,
  };
}

import { TimerContainer } from "./styles";
import { differenceInSeconds } from "date-fns";
import { useCycle } from "../../../contexts/CyclesContext";
import { useEffect } from "react";

export function Timer() {
  const {
    activeCycle,
    amountSecondsPassed,
    cycleIdActive,
    markAsFinished,
    setSecondsPassad,
  } = useCycle();
  let totalSeconds = activeCycle ? activeCycle.duration * 60 : 0;

  useEffect(() => {
    let interval: number;
    if (activeCycle) {
      interval = setInterval(() => {
        const difference = differenceInSeconds(
          new Date(),
          activeCycle.startDate
        );

        if (difference >= totalSeconds) {
          //   setCycleIdActive(undefined);
          setSecondsPassad(0);
          markAsFinished();

          clearInterval(interval);
        } else {
          setSecondsPassad(difference);
        }
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [activeCycle, totalSeconds, cycleIdActive, markAsFinished]);

  totalSeconds -= amountSecondsPassed;

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const minutesString = String(minutes).padStart(2, "0");
  const secondsString = String(seconds).padStart(2, "0");

  useEffect(() => {
    document.title = `${minutesString}:${secondsString}`;
  });

  return (
    <TimerContainer>
      <span>{minutesString[0]}</span>
      <span>{minutesString[1]}</span>
      <span>:</span>
      <span>{secondsString[0]}</span>
      <span>{secondsString[1]}</span>
    </TimerContainer>
  );
}


import { TimerContainer } from "./styles";

interface TimerProps {
    minute: string;
    second: string;
}

export function Timer({minute,second}: TimerProps) {
    

    return (
        <TimerContainer>
          <span>{minute[0]}</span>
          <span>{minute[1]}</span>
          <span>:</span>
          <span>{second[0]}</span>
          <span>{second[1]}</span>
        </TimerContainer>
    )
}

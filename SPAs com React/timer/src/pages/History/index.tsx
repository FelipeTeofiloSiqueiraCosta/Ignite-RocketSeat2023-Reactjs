import { useCycle } from "../../contexts/CyclesContext";
import { HistoryContainer, HistoryList, Status } from "./styles";

export function History() {
  const { cycles } = useCycle();

  return (
    <HistoryContainer>
      <p>{JSON.stringify(cycles, null, 2)}</p>
      <h1>Meu histórico</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => {
              return (
                <tr>
                  <td>Programação</td>
                  <td>12h</td>
                  <td>dia 12 as 13h</td>
                  <td>
                    <Status status="INTERROMPIDO">INTERROMPIDO</Status>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}

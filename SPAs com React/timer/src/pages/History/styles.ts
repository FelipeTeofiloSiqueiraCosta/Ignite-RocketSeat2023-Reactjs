import styled from "styled-components";

export const HistoryContainer = styled.div`
  /* width */
  ::-webkit-scrollbar {
    width: 5px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme["gray-700"]};
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  display: flex;
  height: calc(100% - 60px);
  flex-direction: column;

  justify-content: center;
  gap: 2rem;
  margin-top: 30px;
  padding: 1.5rem;
  color: ${({ theme }) => theme["gray-100"]};

  h1 {
    font-weight: bold;
    font-size: 1.5rem;
    -webkit-font-smoothing: antialiased;
  }
`;

export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;
    thead {
      background-color: ${({ theme }) => theme["gray-600"]};

      th {
        padding: 1rem;
        text-align: left;
        color: ${({ theme }) => theme["gray-100"]};
        font-size: 0.875rem;
        line-height: 1.6;

        &:first-child {
          border-top-left-radius: 0.25rem;
          padding-left: 1.5rem;
        }
        &:last-child {
          border-top-right-radius: 0.25rem;
          padding-right: 1.5rem;
        }
      }
    }
    td {
      background-color: ${({ theme }) => theme["gray-700"]};
      border-top: 4px solid ${({ theme }) => theme["gray-800"]};
      padding: 1rem;
      line-height: 1.6;
      font-size: 0.875rem;
      &:first-child {
        padding-left: 1.5rem;
      }
      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`;

export interface Status {
  status: "CONCLUIDO" | "EM_ANDAMENTO" | "INTERROMPIDO";
}

export const Status = styled.span<Status>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: ${({ status, theme }) =>
      status === "CONCLUIDO"
        ? theme["green-500"]
        : status === "EM_ANDAMENTO"
        ? theme["yellow-500"]
        : theme["red-500"]};
  }
`;

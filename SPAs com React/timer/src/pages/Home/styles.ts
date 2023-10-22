import styled from "styled-components";

export const HomeContainer = styled.div`
  margin-top: 4.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    button {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      border: none;
      border-radius: 8px;
      padding: 17px;
      background-color: ${({ theme }) => theme["green-500"]};
      color: ${({ theme }) => theme["gray-100"]};
      cursor: pointer;
      transition: background-color 0.2s;

      &:not(:disabled):hover {
        background-color: ${(props) => props.theme["green-700"]};
      }
      &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
      }
    }
  }
`;
export const FormContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  font-size: 1.125rem;
  color: ${({ theme }) => theme["gray-100"]};
  font-weight: bold;
  flex-wrap: wrap;
  -webkit-font-smoothing: antialiased;
  width: 100%;

  input {
    background-color: transparent;
    border: none;
    border-bottom: 3px solid ${({ theme }) => theme["gray-500"]};
    color: ${({ theme }) => theme["gray-100"]};
    outline: none;

    &:nth-child(2) {
      flex: 1;
    }

    &:focus {
      box-shadow: none;
      border-bottom: 3px solid ${({ theme }) => theme["green-500"]};
    }

    &::placeholder {
      color: ${({ theme }) => theme["gray-500"]};
    }

    &:nth-child(5) {
      width: 60px;
      text-align: center;
    }
  }
`;

export const TimerContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  font-family: "Roboto Mono", monospace;
  margin-top: 3.75rem;
  margin-bottom: 3.5rem;
  span {
    font-size: 10rem;
    font-weight: bold;
    padding: 1rem 1rem;
    border-radius: 8px;
    display: grid;
    place-items: center;
    background-color: ${({ theme }) => theme["gray-700"]};
    &:nth-child(3) {
      color: ${({ theme }) => theme["green-500"]};
      padding: 2rem 0.5rem !important;
      background-color: transparent !important;
    }
  }
`;

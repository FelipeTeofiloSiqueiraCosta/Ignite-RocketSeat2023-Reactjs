import styled from 'styled-components';


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
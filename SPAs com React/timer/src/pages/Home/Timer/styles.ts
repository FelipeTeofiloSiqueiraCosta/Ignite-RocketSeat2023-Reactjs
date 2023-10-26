import styled from 'styled-components'


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
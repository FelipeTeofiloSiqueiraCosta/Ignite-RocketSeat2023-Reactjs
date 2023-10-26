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

    
  }
`;



export const BaseFormSubmiteButton = styled.button`

      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      border: none;
      border-radius: 8px;
      padding: 17px;
      
      color: ${({ theme }) => theme["gray-100"]};
      cursor: pointer;
      transition: background-color 0.2s;

      
      &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
      }

`;
export const FormSubmiteButtonActive = styled(BaseFormSubmiteButton)`
  background-color: ${({ theme }) => theme["green-500"]}; 
  &:not(:disabled):hover {
        background-color: ${(props) => props.theme["green-700"]};
  }
`;

export const FormSubmiteButtonPause = styled(BaseFormSubmiteButton)`
  background-color: ${({ theme }) => theme["red-500"]};
  &:not(:disabled):hover {
        background-color: ${(props) => props.theme["red-700"]};
  }
`;
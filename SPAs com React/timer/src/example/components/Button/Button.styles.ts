import styled, { css } from "styled-components";

export type ButtonVariants = "primary" | "secondary" | "danger" | "success";

interface ButtonContainerProps {
  variant: ButtonVariants;
}

const buttonVariantsStyles = {
  primary: "background-color: blue",
  secondary: "background-color: orange",
  danger: "background-color: red",
  success: "background-color: green",
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 50px;

  //usando themes no styled-components
  color: ${(props) => props.theme.white};

  ${(props) => {
    return css`
      background-color: ${props.theme.button[props.variant]};
    `;
  }}; //usando propriedades no styled-components
  /* ${(props) => {
    return buttonVariantsStyles[props.variant];
  }} */
`;

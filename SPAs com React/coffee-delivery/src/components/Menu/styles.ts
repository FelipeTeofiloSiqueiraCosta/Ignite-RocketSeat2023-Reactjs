import styled, { css } from "styled-components";

export const List = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 32px 16px;
  list-style: none;

  li {
    display: flex;
    gap: 12px;
  }
`;

type BadgeVariants = "primary" | "secondary";

interface BadgeProps {
  variant: BadgeVariants;
}

const BadgeVariants = {
  primary: css`
    background-color: ${({ theme }) => theme["purple-light"]};
    color: ${({ theme }) => theme["purple-dark"]};

    svg {
      color: ${({ theme }) => theme["purple"]};
    }
  `,
  secondary: css`
    background-color: ${({ theme }) => theme["yellow-light"]};
    color: ${({ theme }) => theme["yellow-dark"]};
  `,
};

export const Badge = styled.div<BadgeProps>`
  border-radius: 6px;
  padding: 10px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  ${(props) => {
    return BadgeVariants[props.variant];
  }}
`;

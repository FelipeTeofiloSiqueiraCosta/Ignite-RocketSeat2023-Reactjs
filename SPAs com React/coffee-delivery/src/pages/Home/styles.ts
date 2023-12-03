import styled from "styled-components";

interface IconProps {
  bgColor: "yellow-dark" | "yellow" | "base-text" | "purple";
}

export const AboutContainer = styled.section`
  display: flex;
  gap: 3.5rem;
  flex-wrap: wrap;
  justify-content: center;
  padding: 98px 0;
  position: relative;

  & > img:first-child {
    position: absolute;

    top: 0;

    @media (min-width: 768px) {
      width: 100%;
      height: 100%;
    }
  }
  & > img:last-child {
    width: 100%;
    max-width: 476px;
  }
  main {
    max-width: 588px;

    h1 {
      font-weight: 800;
      font-family: "Baloo 2", sans-serif;
      font-size: 3rem;
      line-height: 130%;
      color: ${(props) => props.theme["base-title"]};
    }
    p {
      margin-top: 16px;
      color: ${(props) => props.theme["base-subtitle"]};
      font-weight: 400;
      font-size: 1.25rem;
      line-height: 130%;
    }
    ul {
      margin-top: 4.125rem;
      display: flex;
      gap: 2.5rem;
      li {
        display: flex;
        flex-direction: column;
        gap: 20px;

        div {
          display: flex;
          gap: 12px;
          align-items: center;
        }
      }
    }
  }
`;

export const Icon = styled.div<IconProps>`
  padding: 8px;
  border-radius: 50%;
  background-color: ${(props) => props.theme[props.bgColor]};
  color: ${(props) => props.theme["background"]};
  display: grid;
  place-items: center;
`;

export const CooffeeListContainer = styled.section`
  display: grid;
  place-items: center;
  main {
    display: flex;
    flex-direction: column;
    max-width: 1120px;

    h2 {
      font-family: "Baloo 2", sans-serif;
      color: ${(props) => props.theme["base-subtitle"]};
      font-size: 2rem;
      line-height: 130%;
      margin-bottom: 56px;
    }
    ul {
      display: flex;
      gap: 32px;
      flex-wrap: wrap;
    }
  }
`;

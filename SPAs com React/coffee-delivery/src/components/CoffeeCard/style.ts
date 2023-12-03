import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  background-color: ${({ theme }) => theme["base-card"]};
  border-radius: 10px 30px 10px 30px;
  padding: 0px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  width: 256px;

  header {
    display: flex;
    position: relative;
    top: -25px;
    flex-direction: column;
    align-items: center;

    img {
      width: 120px;
    }

    section {
      margin-top: 12px;

      span {
        border-radius: 100px;
        padding: 4px 8px;
        background-color: ${({ theme }) => theme["yellow-light"]};
        color: ${({ theme }) => theme["yellow-dark"]};
        font-weight: 700;
        font-size: 0.875rem;
      }
    }
  }
  main {
    h1 {
      font-family: "Baloo 2", sans-serif;
      font-weight: 700;
      line-height: 130%;
      font-size: 1.25rem;
      text-align: center;
      color: ${({ theme }) => theme["base-subtitle"]};
    }
    p {
      margin-top: 8px;
      color: ${({ theme }) => theme["base-label"]};
      font-size: 0.875rem;
      font-weight: 400;
      text-align: center;
    }
  }
  footer {
    margin-top: 33px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;

    div.price {
      display: flex;
      gap: 4px;
      align-items: baseline;
      font-family: "Baloo 2", sans-serif;
      font-weight: 700;
      font-size: 1.5rem;
      line-height: 130%;
      color: ${({ theme }) => theme["base-text"]};

      span {
        font-size: 0.875rem;
        font-weight: 400;
        font-family: "Roboto", sans-serif;
      }
    }
    div.amount {
      display: flex;
      gap: 8px;
      .amount-button {
        padding: 0px 8px;
        display: flex;
        gap: 8px;
        justify-content: center;
        align-items: center;
        background-color: ${({ theme }) => theme["base-button"]};
        border-radius: 6px;
        font-weight: 700;

        svg {
          color: ${({ theme }) => theme["purple"]};
          cursor: pointer;
        }
      }
      button {
        padding: 8px;
        border: 0;
        margin: 0;
        background-color: ${({ theme }) => theme["purple-dark"]};
        color: ${({ theme }) => theme["background"]};
        border-radius: 6px;
      }
    }
  }
`;

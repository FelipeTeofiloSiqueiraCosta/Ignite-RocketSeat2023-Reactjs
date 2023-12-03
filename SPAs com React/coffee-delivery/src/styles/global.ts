import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    /* :focus{
        outline: none;
        box-shadow: 0 0 0 2px ${(props) => props.theme["yellow-light"]};
    } */
    html{
        width: 100%;
    }
    body{
        font-family: 'Roboto', sans-serif;
        background-color: ${(props) => props.theme["background"]};
        font-size: 1rem;
        color: ${({ theme }) => theme["base-text"]};
        -webkit-font-smoothing: antialiased;
    }

    input, button, textarea, select, button{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
    button{
        cursor: pointer;
    }
    ul{
        list-style: none;
    }


    @media (max-width: 1080px){
        body{
            font-size: 93.75%;
        }
    }
    @media (max-width: 768px){
        body{
            font-size: 87.5%;
        }
    }

    
`;

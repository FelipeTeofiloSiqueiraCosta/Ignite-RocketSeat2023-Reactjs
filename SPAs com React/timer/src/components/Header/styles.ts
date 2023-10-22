import styled from 'styled-components'

export const HeaderContainer = styled.header`

    display: flex;
    align-items: center;
    justify-content: space-between;
    align-items: center;

`

export const NavContainer = styled.nav`
    display: flex;
    gap: 8px;

    a{
        color: ${({theme})=>theme["gray-100"]};
        width: 3rem;
        height: 3rem;
        display: grid;
        place-items: center;

        border-top: 3px solid transparent;
        border-bottom: 3px solid transparent;

        &:hover{
            border-bottom: 3px solid ${({theme})=>theme["green-500"]};
        }
        &.active{
            color: ${props=> props.theme['green-500']}
        }
    }
`
import { HeaderContainer, NavContainer } from "./styles";
import Logo from '../../assets/Logo.svg'
import {Clock, Scroll} from 'phosphor-react'
import { NavLink } from "react-router-dom";
export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="Logo" /> 
      <NavContainer>
        <NavLink to="/" title="Timer"><Clock size={24}/></NavLink>
        <NavLink to="/history" title="Histórico"><Scroll size={24}/></NavLink>
      </NavContainer>
    </HeaderContainer>
  );
}

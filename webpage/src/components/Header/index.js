import React from "react";
import { Link, useLocation } from "react-router-dom";

import Logo from "../../assets/imgs/logo.png";
import Foto from "../../assets/imgs/items/foto.png";

import { useAuth } from "../../contexts/auth";
import { Container, Interactable, LogoLink, NavBar, Logged } from "./styles";

export default function Header() {
  const location = useLocation();
  const { signed, user } = useAuth();

  return (
    <Container>
      <Interactable>
        <LogoLink to="/">
          <img src={Logo} alt="logo" />
        </LogoLink>

        {signed ? (
          <Logged to={`/perfil/${user._id}`}>
            Perfil
            <img src={Foto} alt="" />
          </Logged>
        ) : location.pathname === "/login" ||
          location.pathname === "/cadastro" ? (
          ""
        ) : (
          <NavBar>
            <Link to="/cadastro">Seja uma Maid</Link>
            <Link to="/login">Entrar</Link>
          </NavBar>
        )}
      </Interactable>
    </Container>
  );
}

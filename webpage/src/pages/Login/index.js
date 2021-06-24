import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { ThemeContext } from "styled-components";

import EntrarCadastro from "../../assets/imgs/ilust/entrarCadastro.svg";

import { useAuth } from "../../contexts/auth";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Container, Interactable } from "./styles";

export default function Login() {
  const theme = useContext(ThemeContext);
  const [state, setState] = useState({ email: "", senha: "" });
  const { Login } = useAuth();
  const history = useHistory();

  const setInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    try {
      await Login(state.email, state.senha);
      history.push("/");
    } catch (error) {
      alert("Email ou senha inválidos!");
    }
  };

  return (
    <Container>
      <Interactable>
        <img src={EntrarCadastro} alt="" />
        <div>
          <h3>Entre com sua conta</h3>
          <span>
            <Button
              to="/cadastro"
              width={192}
              height={52}
              color={theme.color.primary.zero}
              colorHover={theme.color.primary.plus}
              background={theme.color.primary.zero}
              backgroundHover={theme.color.primary.plus}
              fontSize={theme.font.size.paragraph}
            >
              FAZER CADASTRO
            </Button>

            <div>
              <Input
                type="email"
                value={state.email}
                onChange={setInput}
                placeholder="Ex: seuemail@email.com"
                name="email"
              >
                Email
              </Input>

              <Input
                type="password"
                value={state.senha}
                onChange={setInput}
                placeholder="Digite sua senha"
                name="senha"
              >
                Senha
              </Input>

              <span>
                <Button
                  to="/login"
                  isFilled
                  width={186}
                  height={66}
                  color={theme.color.theme.light.minus}
                  colorHover={theme.color.theme.light.zero}
                  background={theme.color.primary.zero}
                  backgroundHover={theme.color.primary.plus}
                  fontSize={theme.font.size.h5}
                  onClick={handleLogin}
                >
                  entrar
                </Button>
              </span>
            </div>
          </span>
        </div>
      </Interactable>
    </Container>
  );
}

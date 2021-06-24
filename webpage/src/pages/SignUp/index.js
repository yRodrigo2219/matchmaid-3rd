import React, { useContext, useState } from "react";
import { ThemeContext } from "styled-components";
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  useHistory,
} from "react-router-dom";

import Cadastro from "../../assets/imgs/ilust/cadastro.svg";
import NextSVG from "../../assets/imgs/items/next.svg";
import PreviousSVG from "../../assets/imgs/items/previous.svg";

import { useAuth } from "../../contexts/auth";
import { isValid } from "../../services/regex";
import Checkbox from "../../components/Checkbox";
import Button from "../../components/Button";
import Input from "../../components/Input";
import ModalMap from "./ModalMap";
import {
  Container,
  Interactable,
  Progression,
  ProgressItem,
  Next,
  CheckList,
} from "./styles";

export default function SignUp() {
  const theme = useContext(ThemeContext);
  const [state, setState] = useState({
    longitude: 0,
    latitude: 0,
    baba: false,
    bairro: "",
    cep: "",
    cidade: "",
    cozinhar: false,
    cpf: "",
    cuidarCasa: false,
    domingo: false,
    email: "",
    encanador: false,
    estado: "",
    lavarLouca: false,
    lavarRoupa: false,
    nome: "",
    numeroCasa: "",
    passearPet: false,
    precoHora: "",
    quarta: false,
    quinta: false,
    rua: "",
    sabado: false,
    segunda: false,
    senha: "",
    sexta: false,
    telefone: "",
    terca: false,
  });
  const [show, setShow] = useState(true);
  const { Signup } = useAuth();
  const history = useHistory();

  const openModal = () => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };

  const setLocal = (lat, long) => {
    setState({
      ...state,
      longitude: long,
      latitude: lat,
    });
  };

  const setInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const setCheck = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.checked,
    });
  };

  const areThereBadInputs = () => {
    const keys = [
      "cpf",
      "email",
      "telefone",
      "senha",
      "nome",
      "cep",
      "estado",
      "rua",
      "cidade",
      "numeroCasa",
      "bairro",
    ];

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];

      if (!isValid[key].regex.test(state[key]))
        return [true, isValid[key].message];
    }

    return [false, ""];
  };

  const handleSignup = async () => {
    try {
      const [areBad, message] = areThereBadInputs();

      if (areBad) {
        alert(message);
        return;
      }

      await Signup({
        nome: state.nome,
        cpf: state.cpf,
        email: state.email,
        senha: state.senha,
        telefone: state.telefone,
        localizacao: {
          longitude: state.longitude,
          latitude: state.latitude,
          rua: state.rua,
          numeroCasa: state.numeroCasa,
          bairro: state.bairro,
          cidade: state.cidade,
          cep: state.cep,
          estado: state.estado,
        },
        precoHora: state.precoHora,
        servicos: {
          baba: state.baba,
          lavarRoupa: state.lavarRoupa,
          passearPet: state.passearPet,
          cuidarCasa: state.cuidarCasa,
          lavarLouca: state.lavarLouca,
          encanador: state.encanador,
          cozinhar: state.cozinhar,
        },
        dias: {
          segunda: state.segunda,
          terca: state.terca,
          quarta: state.quarta,
          quinta: state.quinta,
          sexta: state.sexta,
          sabado: state.sabado,
          domingo: state.domingo,
        },
      });
      history.push("/");
    } catch (error) {
      alert("Erro no cadastro! Email ou CPF já em uso.");
    }
  };

  return (
    <Container>
      <Interactable>
        <img src={Cadastro} alt="" />
        <Button
          to="/login"
          width={304}
          height={50}
          color={theme.color.secondary.zero}
          colorHover={theme.color.secondary.plus}
          background={theme.color.secondary.zero}
          backgroundHover={theme.color.secondary.plus}
          fontSize={theme.font.size.paragraph}
        >
          Voltar ao Login
        </Button>
        <div>
          <h3>Cadastro Maid</h3>
          <span>
            <BrowserRouter basename="/cadastro">
              <Switch>
                <Route path="/3">
                  <h5>Sobre o seu serviços</h5>

                  <Progression>
                    <div></div>
                    <ProgressItem to="/1">1</ProgressItem>
                    <ProgressItem to="/2">2</ProgressItem>
                    <ProgressItem to="/3" active={1}>
                      3
                    </ProgressItem>
                    <div></div>
                  </Progression>

                  <div>
                    <Input
                      type="number"
                      value={state.precoHora}
                      placeholder="Ex: 29.00"
                      symbol="R$"
                      name="precoHora"
                      onChange={setInput}
                      regex={isValid.precoHora.regex}
                      tooltip={isValid.precoHora.tip}
                    >
                      Preço médio da sua hora de trabalho
                    </Input>

                    <section>
                      <CheckList>
                        <h5>Dias Disponiveis</h5>
                        <Checkbox
                          onChange={setCheck}
                          name="segunda"
                          checked={state.segunda}
                        >
                          Segunda
                        </Checkbox>
                        <Checkbox
                          onChange={setCheck}
                          name="terca"
                          checked={state.terca}
                        >
                          Terca
                        </Checkbox>
                        <Checkbox
                          onChange={setCheck}
                          name="quarta"
                          checked={state.quarta}
                        >
                          Quarta
                        </Checkbox>
                        <Checkbox
                          onChange={setCheck}
                          name="quinta"
                          checked={state.quinta}
                        >
                          Quinta
                        </Checkbox>
                        <Checkbox
                          onChange={setCheck}
                          name="sexta"
                          checked={state.sexta}
                        >
                          Sexta
                        </Checkbox>
                        <Checkbox
                          onChange={setCheck}
                          name="sabado"
                          checked={state.sabado}
                        >
                          Sabado
                        </Checkbox>
                        <Checkbox
                          onChange={setCheck}
                          name="domingo"
                          checked={state.domingo}
                        >
                          Domingo
                        </Checkbox>
                      </CheckList>
                      <CheckList>
                        <h5>Servicos</h5>
                        <Checkbox
                          onChange={setCheck}
                          name="baba"
                          checked={state.baba}
                        >
                          Babá
                        </Checkbox>
                        <Checkbox
                          onChange={setCheck}
                          name="lavarRoupa"
                          checked={state.lavarRoupa}
                        >
                          Lavar Roupa
                        </Checkbox>
                        <Checkbox
                          onChange={setCheck}
                          name="passearPet"
                          checked={state.passearPet}
                        >
                          Passear com Pet
                        </Checkbox>
                        <Checkbox
                          onChange={setCheck}
                          name="cuidarCasa"
                          checked={state.cuidarCasa}
                        >
                          Cuidar da Casa
                        </Checkbox>
                        <Checkbox
                          onChange={setCheck}
                          name="lavarLouca"
                          checked={state.lavarLouca}
                        >
                          Lavar Louca
                        </Checkbox>
                        <Checkbox
                          onChange={setCheck}
                          name="encanador"
                          checked={state.encanador}
                        >
                          Encanador
                        </Checkbox>
                        <Checkbox
                          onChange={setCheck}
                          name="cozinhar"
                          checked={state.cozinhar}
                        >
                          Cozinhar
                        </Checkbox>
                      </CheckList>
                    </section>
                  </div>

                  <Next>
                    <Link to="/2">
                      <img src={PreviousSVG} alt="<" />
                    </Link>
                    <span>
                      <Button
                        to="/3"
                        isFilled
                        width={304}
                        height={62}
                        color={theme.color.theme.light.minus}
                        colorHover={theme.color.theme.light.zero}
                        background={theme.color.primary.zero}
                        backgroundHover={theme.color.primary.plus}
                        fontSize={theme.font.size.paragraph}
                        onClick={handleSignup}
                      >
                        FINALIZAR MEU CADASTRO
                      </Button>
                    </span>
                  </Next>
                </Route>

                <Route path="/2">
                  <ModalMap
                    show={show}
                    onRequestClose={closeModal}
                    lat={state.latitude}
                    long={state.longitude}
                    setLocal={setLocal}
                  />
                  <h5>Sobre o seu endereço</h5>

                  <Progression>
                    <div></div>
                    <ProgressItem to="/1">1</ProgressItem>
                    <ProgressItem to="/2" active={1}>
                      2
                    </ProgressItem>
                    <ProgressItem to="/3">3</ProgressItem>
                    <div></div>
                  </Progression>

                  <div>
                    <Input
                      type="text"
                      value={state.rua}
                      placeholder="Digite o nome da sua rua"
                      name="rua"
                      onChange={setInput}
                      regex={isValid.rua.regex}
                      tooltip={isValid.rua.tip}
                    >
                      Rua
                    </Input>
                    <div>
                      <Input
                        type="text"
                        value={state.cidade}
                        placeholder="Digite o nome da sua cidade"
                        name="cidade"
                        onChange={setInput}
                        regex={isValid.cidade.regex}
                        tooltip={isValid.cidade.tip}
                      >
                        Cidade
                      </Input>
                      <Input
                        type="text"
                        value={state.cep}
                        placeholder="Digite o seu CEP"
                        name="cep"
                        onChange={setInput}
                        regex={isValid.cep.regex}
                        tooltip={isValid.cep.tip}
                      >
                        CEP
                      </Input>
                    </div>
                    <div>
                      <Input
                        type="text"
                        value={state.numeroCasa}
                        placeholder="Digite o numero da sua casa"
                        name="numeroCasa"
                        onChange={setInput}
                        regex={isValid.numeroCasa.regex}
                        tooltip={isValid.numeroCasa.tip}
                      >
                        Numero
                      </Input>
                      <Input
                        type="text"
                        value={state.bairro}
                        placeholder="Digite o nome do seu bairro"
                        name="bairro"
                        onChange={setInput}
                        regex={isValid.bairro.regex}
                        tooltip={isValid.bairro.tip}
                      >
                        Bairro
                      </Input>
                    </div>
                    <div>
                      <Input
                        type="text"
                        value={state.estado}
                        placeholder="Digite o nome do seu estado"
                        name="estado"
                        onChange={setInput}
                        regex={isValid.estado.regex}
                        tooltip={isValid.estado.tip}
                      >
                        Estado
                      </Input>
                      <span>
                        <Button
                          to="/2"
                          isFilled
                          width={304}
                          height={50}
                          color={theme.color.theme.light.minus}
                          colorHover={theme.color.theme.light.zero}
                          background={theme.color.primary.zero}
                          backgroundHover={theme.color.primary.plus}
                          fontSize={theme.font.size.paragraph}
                          onClick={openModal}
                        >
                          escolher Localização
                        </Button>
                      </span>
                    </div>
                  </div>

                  <Next>
                    <Link to="/1">
                      <img src={PreviousSVG} alt="<" />
                    </Link>
                    <Link to="/3">
                      <img src={NextSVG} alt=">" />
                    </Link>
                  </Next>
                </Route>

                <Route path="/">
                  <h5>Sobre você</h5>

                  <Progression>
                    <div></div>
                    <ProgressItem to="/1" active={1}>
                      1
                    </ProgressItem>
                    <ProgressItem to="/2">2</ProgressItem>
                    <ProgressItem to="/3">3</ProgressItem>
                    <div></div>
                  </Progression>

                  <div>
                    <Input
                      type="email"
                      value={state.email}
                      placeholder="Ex: seuemail@email.com"
                      name="email"
                      onChange={setInput}
                      regex={isValid.email.regex}
                      tooltip={isValid.email.tip}
                    >
                      Email
                    </Input>
                    <div>
                      <Input
                        type="password"
                        value={state.senha}
                        placeholder="Digite sua senha"
                        name="senha"
                        onChange={setInput}
                        regex={isValid.senha.regex}
                        tooltip={isValid.senha.tip}
                      >
                        Senha
                      </Input>
                      <Input
                        type="text"
                        value={state.telefone}
                        placeholder="Digite seu telefone"
                        name="telefone"
                        onChange={setInput}
                        regex={isValid.telefone.regex}
                        tooltip={isValid.telefone.tip}
                      >
                        Telefone
                      </Input>
                    </div>
                    <Input
                      type="text"
                      value={state.nome}
                      placeholder="Digite seu nome"
                      name="nome"
                      onChange={setInput}
                      regex={isValid.nome.regex}
                      tooltip={isValid.nome.tip}
                    >
                      Nome
                    </Input>
                    <Input
                      type="text"
                      value={state.cpf}
                      placeholder="Digite seu cpf"
                      name="cpf"
                      onChange={setInput}
                      regex={isValid.cpf.regex}
                      tooltip={isValid.cpf.tip}
                    >
                      CPF
                    </Input>
                  </div>

                  <Next>
                    <div></div>
                    <Link to="/2">
                      <img src={NextSVG} alt=">" />
                    </Link>
                  </Next>
                </Route>
              </Switch>
            </BrowserRouter>
          </span>
        </div>
      </Interactable>
    </Container>
  );
}

import React, { useEffect, useState, useContext } from "react";
import { ThemeContext } from "styled-components";
import {
  useParams,
  HashRouter,
  Switch,
  Route,
  useHistory,
  Redirect,
} from "react-router-dom";

import EmailSVG from "../../assets/imgs/items/mail.svg";
import WppSVG from "../../assets/imgs/items/wpp.svg";
import InstaSVG from "../../assets/imgs/items/insta.svg";
import LocationSVG from "../../assets/imgs/items/location.svg";
import Foto from "../../assets/imgs/items/foto.png";

import ModalMap from "../SignUp/ModalMap";
import Button from "../../components/Button";
import Checkbox from "../../components/Checkbox";
import { isValid } from "../../services/regex";
import Input from "../../components/Input";
import api from "../../services/api";
import { useAuth } from "../../contexts/auth";
import {
  Container,
  MaidPerfil,
  MaidInfo,
  Tags,
  Selector,
  Editor,
  CheckList,
} from "./styles";

export default function Perfil() {
  const theme = useContext(ThemeContext);
  const { Logout, user, UpdatePerfil } = useAuth();
  const [state, setState] = useState(null);
  const [edit, setEdit] = useState(null);
  const [show, setShow] = useState(false);
  const history = useHistory();
  const { id } = useParams();

  const openModal = () => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };

  const setLocal = (lat, long) => {
    setEdit({
      ...edit,
      longitude: long,
      latitude: lat,
    });
  };

  const setInput = (e) => {
    setEdit({
      ...edit,
      [e.target.name]: e.target.value,
    });
  };

  const setCheck = (e) => {
    setEdit({
      ...edit,
      [e.target.name]: e.target.checked,
    });
  };

  const handleLogout = () => {
    Logout();
    history.push("/");
  };

  const areThereBadInputs = () => {
    const keys = [
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

      if (!isValid[key].regex.test(edit[key]))
        return [true, isValid[key].message];
    }

    return [false, ""];
  };

  const handlePerfilUpdate = async () => {
    try {
      let [areBad, message] = areThereBadInputs();

      if (edit.senha !== "")
        if (isValid.senha.regex.test(edit.senha)) {
          areBad = true;
          message = isValid.senha.message;
        }

      if (areBad) {
        alert(message);
        return;
      }

      const maid = {
        nome: edit.nome,
        senha: edit.senha,
        telefone: edit.telefone,
        bio: edit.bio,
        localizacao: {
          longitude: edit.longitude,
          latitude: edit.latitude,
          rua: edit.rua,
          numeroCasa: edit.numeroCasa,
          bairro: edit.bairro,
          cidade: edit.cidade,
          cep: edit.cep,
          estado: edit.estado,
        },
        precoHora: edit.precoHora,
        servicos: {
          baba: edit.baba,
          lavarRoupa: edit.lavarRoupa,
          passearPet: edit.passearPet,
          cuidarCasa: edit.cuidarCasa,
          lavarLouca: edit.lavarLouca,
          encanador: edit.encanador,
          cozinhar: edit.cozinhar,
        },
        dias: {
          segunda: edit.segunda,
          terca: edit.terca,
          quarta: edit.quarta,
          quinta: edit.quinta,
          sexta: edit.sexta,
          sabado: edit.sabado,
          domingo: edit.domingo,
        },
      };

      if (edit.senha === "") delete maid.senha;

      await UpdatePerfil(user._id, maid);
      history.go(0);
    } catch (e) {
      alert("Erro Desconhecido! Tente novamente em instantes.");
    }
  };

  const fetchMaid = async () => {
    try {
      const response = await api.get(`${id}`);

      if (response.data.error) throw Error("Erro na requisição!");
      const data = response.data.data;
      setState(data);
      setEdit({
        longitude: data.localizacao.longitude,
        latitude: data.localizacao.latitude,
        baba: data.servicos.baba,
        bairro: data.localizacao.bairro,
        cep: data.localizacao.cep,
        cidade: data.localizacao.cidade,
        cozinhar: data.servicos.cozinhar,
        cuidarCasa: data.servicos.cuidarCasa,
        domingo: data.dias.domingo,
        encanador: data.servicos.encanador,
        estado: data.localizacao.estado,
        lavarLouca: data.servicos.lavarLouca,
        lavarRoupa: data.servicos.lavarRoupa,
        nome: data.nome,
        numeroCasa: data.localizacao.numeroCasa,
        passearPet: data.servicos.passearPet,
        precoHora: data.precoHora,
        quarta: data.dias.quarta,
        quinta: data.dias.quinta,
        rua: data.localizacao.rua,
        sabado: data.dias.sabado,
        segunda: data.dias.segunda,
        sexta: data.dias.sexta,
        telefone: data.telefone,
        terca: data.dias.terca,
        senha: "",
        bio: data.bio,
      });
    } catch (error) {
      setTimeout(fetchMaid, 1000);
    }
  };

  const Servicos = () => {
    return (
      <Tags>
        <h5>Serviços</h5>
        {state.servicos.baba ? <span className="cyan">Babá</span> : ""}
        {state.servicos.lavarRoupa ? (
          <span className="red">Lava Roupa</span>
        ) : (
          ""
        )}
        {state.servicos.passearPet ? (
          <span className="blue">Passea com Pet</span>
        ) : (
          ""
        )}
        {state.servicos.cuidarCasa ? (
          <span className="lightblue">Cuida da Casa</span>
        ) : (
          ""
        )}
        {state.servicos.lavarLouca ? (
          <span className="yellow">Lava Louça</span>
        ) : (
          ""
        )}
        {state.servicos.encanador ? (
          <span className="orange">Encanador</span>
        ) : (
          ""
        )}
        {state.servicos.cozinhar ? <span className="purple">Cozinha</span> : ""}
      </Tags>
    );
  };

  const DiasDisponiveis = () => {
    return (
      <Tags>
        <h5>Dias Disponiveis</h5>
        {state.dias.segunda ? <span className="cyan">Segunda</span> : ""}
        {state.dias.terca ? <span className="red">Terça</span> : ""}
        {state.dias.quarta ? <span className="blue">Quarta</span> : ""}
        {state.dias.quinta ? <span className="lightblue">Quinta</span> : ""}
        {state.dias.sexta ? <span className="yellow">Sexta</span> : ""}
        {state.dias.sabado ? <span className="orange">Sabado</span> : ""}
        {state.dias.domingo ? <span className="purple">Domingo</span> : ""}
      </Tags>
    );
  };

  const linktoChatWpp = () => {
    const link = `https://wa.me/55${state.telefone.replace(
      /\D/g,
      ""
    )}?text=${encodeURI("Venho aqui indicado pelo MatchMaid!")}`;

    return link;
  };

  useEffect(() => {
    fetchMaid();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (state === null) {
    return (
      <Container>
        <div>
          <h3>Carregando...</h3>
        </div>
      </Container>
    );
  }
  return (
    <Container>
      <div>
        <h3>Perfil da(o) Maid</h3>
        <div>
          <HashRouter>
            <MaidPerfil>
              <span>
                <img src={Foto} alt="foto" />
              </span>
              <div className="basicInfo">
                <h5>{state.nome}</h5>
                <span>
                  {state.localizacao.cidade} - {state.localizacao.estado}
                  <img src={LocationSVG} alt="" />
                </span>
              </div>
              {state._id === user?._id ? (
                <div className="options">
                  <Selector to="/">Perfil</Selector>
                  <Selector to="/edit">Editar Perfil</Selector>
                  <br />
                  <Selector to="/" onClick={handleLogout}>
                    Sair
                  </Selector>
                </div>
              ) : (
                ""
              )}
            </MaidPerfil>

            <Switch>
              <Route path="/edit">
                {user?._id === state?._id ? "" : <Redirect to="/" />}
                {edit ? (
                  <Editor>
                    <ModalMap
                      show={show}
                      onRequestClose={closeModal}
                      lat={edit.latitude}
                      long={edit.longitude}
                      setLocal={setLocal}
                    />
                    <h5>Sobre você</h5>
                    <Input
                      type="text"
                      value={edit.nome}
                      placeholder="Digite seu nome"
                      name="nome"
                      onChange={setInput}
                      regex={isValid.nome.regex}
                      tooltip={isValid.nome.tip}
                    >
                      Nome
                    </Input>
                    <div>
                      <Input
                        type="text"
                        value={edit.telefone}
                        placeholder="Digite seu telefone"
                        name="telefone"
                        onChange={setInput}
                        regex={isValid.telefone.regex}
                        tooltip={isValid.telefone.tip}
                      >
                        Telefone
                      </Input>
                      <Input
                        type="password"
                        value={edit.senha}
                        placeholder="Digite sua senha"
                        name="senha"
                        onChange={setInput}
                        regex={isValid.senha.regex}
                        tooltip={isValid.senha.tip}
                      >
                        Senha
                      </Input>
                    </div>
                    <Input
                      type="text"
                      value={edit.bio}
                      placeholder="Digite um pouco sobre você"
                      name="bio"
                      onChange={setInput}
                      multiline
                      rows={5}
                    >
                      Bio
                    </Input>
                    <h5>Sobre o seu endereço</h5>
                    <Input
                      type="text"
                      value={edit.rua}
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
                        value={edit.cidade}
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
                        value={edit.cep}
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
                        value={edit.numeroCasa}
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
                        value={edit.bairro}
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
                        value={edit.estado}
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
                          to="/edit"
                          isFilled
                          width={390}
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
                    <h5>Sobre o seu serviços</h5>
                    <Input
                      type="number"
                      value={edit.precoHora}
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
                        <h6>Dias Disponiveis</h6>
                        <Checkbox
                          onChange={setCheck}
                          name="segunda"
                          checked={edit.segunda}
                        >
                          Segunda
                        </Checkbox>
                        <Checkbox
                          onChange={setCheck}
                          name="terca"
                          checked={edit.terca}
                        >
                          Terca
                        </Checkbox>
                        <Checkbox
                          onChange={setCheck}
                          name="quarta"
                          checked={edit.quarta}
                        >
                          Quarta
                        </Checkbox>
                        <Checkbox
                          onChange={setCheck}
                          name="quinta"
                          checked={edit.quinta}
                        >
                          Quinta
                        </Checkbox>
                        <Checkbox
                          onChange={setCheck}
                          name="sexta"
                          checked={edit.sexta}
                        >
                          Sexta
                        </Checkbox>
                        <Checkbox
                          onChange={setCheck}
                          name="sabado"
                          checked={edit.sabado}
                        >
                          Sabado
                        </Checkbox>
                        <Checkbox
                          onChange={setCheck}
                          name="domingo"
                          checked={edit.domingo}
                        >
                          Domingo
                        </Checkbox>
                      </CheckList>
                      <CheckList>
                        <h6>Servicos</h6>
                        <Checkbox
                          onChange={setCheck}
                          name="baba"
                          checked={edit.baba}
                        >
                          Babá
                        </Checkbox>
                        <Checkbox
                          onChange={setCheck}
                          name="lavarRoupa"
                          checked={edit.lavarRoupa}
                        >
                          Lavar Roupa
                        </Checkbox>
                        <Checkbox
                          onChange={setCheck}
                          name="passearPet"
                          checked={edit.passearPet}
                        >
                          Passear com Pet
                        </Checkbox>
                        <Checkbox
                          onChange={setCheck}
                          name="cuidarCasa"
                          checked={edit.cuidarCasa}
                        >
                          Cuidar da Casa
                        </Checkbox>
                        <Checkbox
                          onChange={setCheck}
                          name="lavarLouca"
                          checked={edit.lavarLouca}
                        >
                          Lavar Louca
                        </Checkbox>
                        <Checkbox
                          onChange={setCheck}
                          name="encanador"
                          checked={edit.encanador}
                        >
                          Encanador
                        </Checkbox>
                        <Checkbox
                          onChange={setCheck}
                          name="cozinhar"
                          checked={edit.cozinhar}
                        >
                          Cozinhar
                        </Checkbox>
                      </CheckList>
                    </section>
                    <span>
                      <Button
                        to="/edit"
                        isFilled
                        width={280}
                        height={50}
                        color={theme.color.theme.light.minus}
                        colorHover={theme.color.theme.light.zero}
                        background={theme.color.primary.zero}
                        backgroundHover={theme.color.primary.plus}
                        fontSize={theme.font.size.paragraph}
                        onClick={handlePerfilUpdate}
                      >
                        Salvar Alterações
                      </Button>
                    </span>
                  </Editor>
                ) : (
                  ""
                )}
              </Route>
              <Route path="/">
                <MaidInfo>
                  <div>
                    <h5>Contato</h5>
                    <div>
                      <a
                        href={`mailto:${state.email}?subject=Indicação MatchMaid!`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={EmailSVG} alt="email: " />
                        {state.email}
                      </a>
                      <a
                        href={linktoChatWpp()}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={WppSVG} alt="whatsapp: " />
                        {state.telefone}
                      </a>
                      {state.insta ? (
                        <span>
                          <img src={InstaSVG} alt="instagram: " />
                          {state.insta}
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div>
                    <h5>Sobre Mim</h5>
                    <p>
                      {state.bio
                        ? state.bio
                        : "Essa pessoa ainda não escreveu nada em sua biografia."}
                    </p>
                  </div>
                </MaidInfo>
                <div>
                  <Servicos />
                  <DiasDisponiveis />
                </div>
              </Route>
            </Switch>
          </HashRouter>
        </div>
      </div>
    </Container>
  );
}

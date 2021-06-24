import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { useAuth } from "./contexts/auth";
import Header from "./components/Header";
import Main from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Busca from "./pages/Busca";
import Perfil from "./pages/Perfil";

export default function Routes() {
  const { signed } = useAuth();

  return (
    <BrowserRouter>
      <Header />

      {signed ? <LoggedRoutes /> : <NotLoggedRoutes />}
    </BrowserRouter>
  );
}

function LoggedRoutes() {
  return (
    <Switch>
      <Route path="/perfil/:id">
        <Perfil />
      </Route>
      <Route path="/">
        <Busca />
      </Route>
    </Switch>
  );
}

function NotLoggedRoutes() {
  return (
    <Switch>
      <Route path="/perfil/:id">
        <Perfil />
      </Route>
      <Route path="/buscar">
        <Busca />
      </Route>
      <Route path="/cadastro">
        <SignUp />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/">
        <Main />
      </Route>
    </Switch>
  );
}

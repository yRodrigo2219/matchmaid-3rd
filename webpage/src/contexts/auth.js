import React, { createContext, useContext, useEffect, useState } from "react";

import api from "../services/api";

const AuthContext = createContext({});
const LOCAL_USER = "@MatchMaid:user";

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  async function Login(email, senha) {
    const response = await api.post("/login", {
      email,
      senha,
    });

    if (!response.data.error) {
      setUser(response.data.data);

      localStorage.setItem(LOCAL_USER, JSON.stringify(response.data.data));
    } else {
      throw Error("Erro no login!");
    }
  }

  function Logout() {
    setUser(null);

    localStorage.removeItem(LOCAL_USER);
  }

  async function Signup(maid) {
    const response = await api.post("/signup", maid);

    if (!response.data.error) {
      setUser(response.data.data);

      localStorage.setItem(LOCAL_USER, JSON.stringify(response.data.data));
    } else {
      throw Error("Erro ao se registrar!");
    }
  }

  async function UpdatePerfil(id, maid) {
    const response = await api.put(`/${id}`, maid);

    if (response.data.error)
      throw Error("Erro ao fazer atualização de perfil!");
    else {
      setUser(response.data.data);

      localStorage.setItem(LOCAL_USER, JSON.stringify(response.data.data));
    }
  }

  useEffect(() => {
    const storagedUser = localStorage.getItem(LOCAL_USER);

    if (storagedUser) {
      setUser(JSON.parse(storagedUser));
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signed: Boolean(user),
        user,
        Login,
        Logout,
        Signup,
        UpdatePerfil,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

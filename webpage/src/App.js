import React from "react";
import { ThemeProvider } from "styled-components";

import AuthProvider from "./contexts/auth";
import { theme } from "./assets/css/Theme";
import GlobalStyle from "./assets/css/GlobalStyle";
import Routes from "./Routes";

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;

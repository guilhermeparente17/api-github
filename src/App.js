import React from "react";
import Header from "./components/Header/Header";
import GlobalStyle from "./GlobalStyles";

import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Repos from "./pages/Repos/Repos";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />

      <Routes>
        <Route index element={<Login />} />
        <Route path="/repositorios" element={<Repos />} />
      </Routes>
    </div>
  );
}

export default App;

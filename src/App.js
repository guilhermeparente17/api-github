import React from "react";
import Header from "./components/Header/Header";
import GlobalStyle from "./GlobalStyles";

import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Repos from "./pages/Repos/Repos";
import Branchs from "./pages/Branchs/Branchs";
import Commits from "./pages/Commits/Commits";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />

      <Routes>
        <Route index element={<Login />} />
        <Route path="/repositorios" element={<Repos />} />
        <Route path="/repositorios/branchs/:nome" element={<Branchs />} />
        <Route
          path="/repositorios/branchs/:nome/commits"
          element={<Commits />}
        />
      </Routes>
    </div>
  );
}

export default App;

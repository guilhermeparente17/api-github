import React from "react";
import Header from "./components/Header/Header";
import GlobalStyle from "./GlobalStyles";

import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />

      <Routes>
        <Route index element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

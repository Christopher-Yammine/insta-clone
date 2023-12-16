import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from "./domain/pages/auth";

import "./styles/App.css";
import "./styles/index.css";
import "./styles/colors.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

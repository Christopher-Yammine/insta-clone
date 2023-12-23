import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from "./domain/pages/auth";
import FeedPage from "./domain/pages/feed";

import "./styles/App.css";
import "./styles/index.css";
import "./styles/colors.css";
import { Provider } from "react-redux";
import { store } from "./core/dataSource/localDataSource/store";
import { useLogin } from "./core/hooks/login.hook";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/feed" element={<FeedPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;

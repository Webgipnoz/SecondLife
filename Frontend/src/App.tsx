import React from "react";
import { Provider } from "react-redux/es/exports";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/homePage";
import store from "./redux/store";

import "./scss/index.scss";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/">
          <Home />
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;

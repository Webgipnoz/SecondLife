import React, { useState, useEffect } from "react";
import { Provider } from "react-redux/es/exports";

import Home from "./pages/Home";
import store from "./redux/store";

import "./scss/index.scss";

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;

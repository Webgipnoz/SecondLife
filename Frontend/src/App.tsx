import React from "react";
import { Provider } from "react-redux/es/exports";

import Home from "./pages/homePage";
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

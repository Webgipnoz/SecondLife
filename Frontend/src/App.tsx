import { Provider } from "react-redux/es/exports";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/homePage";
import PostDetiles from "./pages/postPage";
import Login from "./pages/loginPage";
import store from "./redux/store";

import "./scss/index.scss";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostDetiles />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Provider>
  );
}

export default App;

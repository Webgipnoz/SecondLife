import { Provider } from "react-redux/es/exports";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/homePage";
import PostPage from "./pages/postPage";
import LoginPage from "./pages/loginPage";
import AddPost from "./pages/addPostPage";

import store from "./redux/store";

import "./scss/index.scss";
import Register from "./pages/registerPage";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/add-post" element={<AddPost />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<Register />} />
      </Routes>
    </Provider>
  );
}

export default App;

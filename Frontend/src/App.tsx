import { Provider } from "react-redux/es/exports";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/homePage";
import PostPage from "./pages/postPage";
import LoginPage from "./pages/loginPage";
import AddPost from "./pages/addPostPage";
import RegisterPage from "./pages/registerPage";
import AccountPage from "./pages/accountPage";
import Header from "./components/Header/Header";

import Container from "@mui/material/Container";

import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts/:_id" element={<PostPage />} />
          <Route path="/addPost" element={<AddPost />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/register" element={<RegisterPage />} />
          <Route path="/auth/account" element={<AccountPage />} />
        </Routes>
      </Container>
    </Provider>
  );
}

export default App;

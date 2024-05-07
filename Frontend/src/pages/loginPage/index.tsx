import React from "react";
import axios from "axios";
import Header from "../../components/Header/Header";

import "../../scss/login/login.scss";
import { Link } from "react-router-dom";

const LoginPage: React.FC = () => {
  const handleSignIn = () => {
    const username = (document.getElementById("username") as HTMLInputElement)
      .value;
    const password = (document.getElementById("password") as HTMLInputElement)
      .value;

    // Создаем объект данных для отправки
    const data = {
      username: username,
      password: password,
    };

    // Отправляем данные на бэкенд
    axios
      .post("/login", data)
      .then((response) => {
        // Обработка успешного ответа от сервера
        console.log("Успешно вошли в систему");
      })
      .catch((error) => {
        // Обработка ошибки
        console.error("Ошибка входа в систему", error);
      });
  };

  return (
    <>
      <Header />
      <div className="centered-content">
        <div className="login-form">
          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <button className="submit-button" onClick={handleSignIn}>
            Sign In
          </button>
          <button className="submit-button">
            <Link to="/register">Sign Up</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

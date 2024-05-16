import React from "react";
import axios from "axios";
import Header from "../../components/Header/Header";

import "../../scss/login/login.scss";
import { Link } from "react-router-dom";

const LoginPage: React.FC = () => {
  const handleSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const email = (document.getElementById("email") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement)
      .value;

    // Создаем объект данных для отправки
    const data = {
      email: email,
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
          <form onSubmit={handleSignIn}>
            <div className="input-group">
              <label>Email</label>
              <input type="text" id="email" placeholder="Enter your email" />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
              />
            </div>
            <button type="submit" className="submit-button">
              Sign In
            </button>
            <button className="submit-button">
              <Link to="/register">Sign Up</Link>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

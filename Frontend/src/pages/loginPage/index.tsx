import React from "react";
import Header from "../../components/Header/Header";
import { Link, useNavigate } from "react-router-dom";

import "../../scss/login/login.scss";
import axios from "../../api/axios";

const loginUrl = "/auth/login";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
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
    try {
      // Отправляем данные на бэкенд
      const response = await axios.post(loginUrl, data);

      // Обработка успешного ответа от сервера
      console.log("Успешно вошли в систему");
      navigate("/auth/account");
    } catch (error) {
      // Обработка ошибки
      console.error("Ошибка входа в систему", error);
    }
  };

  return (
    <>
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
              <Link to="/auth/register">Sign Up</Link>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

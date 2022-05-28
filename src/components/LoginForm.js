import React from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useUserData } from "../contexts/UserDataContext";

export default function LoginForm() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(false);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [, setUserData] = useUserData();

  function sendLogin(e) {
    e.preventDefault();
    setIsLoading(true);
    const url =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
    const body = { email, password };
    axios
      .post(url, body)
      .then((response) => {
        setUserData(response.data);
        setIsLoading(false);
        navigate("/hoje");
      })
      .catch((err) => {
        alert(err.response.statusText);
        setIsLoading(false);
      });
  }

  return (
    <Container onSubmit={sendLogin}>
      <input
        type="email"
        placeholder="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={isLoading}
      />
      <input
        type="password"
        placeholder="senha"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        disabled={isLoading}
      />
      <button type="submit">
        {isLoading ? (
          <ThreeDots color="#ffffff" height={50} width={50} />
        ) : (
          "Entrar"
        )}
      </button>
    </Container>
  );
}

const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    width: 303px;
    height: 45px;
    background-color: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    padding: 12px;
    font-size: 20px;
    ::placeholder {
      color: #dbdbdb;
    }
    margin-bottom: 7px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 303px;
    height: 45px;
    background-color: #52b6ff;
    border-radius: 5px;
    border: 1px solid #52b6ff;
    font-size: 20px;
    color: #ffffff;
  }
`;

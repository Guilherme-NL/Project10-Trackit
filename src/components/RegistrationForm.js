import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";

export default function RegistrationForm() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(false);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [image, setImage] = React.useState("");

  function sendRegistration(e) {
    e.preventDefault();
    setIsLoading(true);
    const url =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
    const body = { email, name, image, password };
    axios
      .post(url, body)
      .then(() => {
        navigate("/");
        setIsLoading(false);
      })
      .catch((err) => {
        alert(err.response.statusText);
        navigate("/cadastro");
        setIsLoading(false);
      });
  }

  return (
    <Container onSubmit={sendRegistration}>
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
      <input
        type="name"
        placeholder="nome"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={isLoading}
      />
      <input
        type="url"
        placeholder="foto"
        required
        value={image}
        onChange={(e) => setImage(e.target.value)}
        disabled={isLoading}
      />
      <button type="submit">
        {isLoading ? (
          <ThreeDots color="#ffffff" height={50} width={50} />
        ) : (
          "Cadastrar"
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

import logo from "../assets/logo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function RegistrationScreen() {
  return (
    <Container>
      <img src={logo} alt="logo" />
      <Form>
        <input type="email" placeholder="email" required />
        <input type="password" placeholder="senha" required />
        <input type="name" placeholder="nome" required />
        <input type="url" placeholder="foto" required />
        <button type="submit">Cadastrar</button>
      </Form>
      <Link to="/">
        <p>Já tem uma conta? Faça login!</p>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 36px;

  img {
    margin-top: 30px;
    margin-bottom: 35px;
  }

  p {
    margin-top: 25px;
    font-size: 14px;
    color: #52b6ff;
    text-decoration-line: underline;
  }
`;

const Form = styled.form`
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
    width: 303px;
    height: 45px;
    background-color: #52b6ff;
    border-radius: 5px;
    border: 1px solid #52b6ff;
    font-size: 20px;
    color: #ffffff;
  }
`;

import logo from "../assets/logo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

import RegistrationForm from "./RegistrationForm";

export default function RegistrationScreen() {
  return (
    <Container>
      <img src={logo} alt="logo" />
      <RegistrationForm />
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

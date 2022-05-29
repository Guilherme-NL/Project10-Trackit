import Topbar from "./Topbar";
import Bottombar from "./Bottombar";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export default function HistoryScreen() {
  return (
    <Container>
      <GlobalStyle />
      <Topbar />
      <h1>Histórico</h1>
      <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
      <Bottombar />
    </Container>
  );
}

const Container = styled.div`
  padding: 18px;
  margin-top: 70px;
  margin-bottom: 80px;

  > h1 {
    font-size: 23px;
    color: #126ba5;
    margin-bottom: 20px;
  }

  > p {
    font-size: 18px;
    color: #666666;
  }
`;

const GlobalStyle = createGlobalStyle`
 body {
   background: #e5e5e5;
 }
`;

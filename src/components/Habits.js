import Topbar from "./Topbar";
import Bottombar from "./Bottombar";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export default function HabitsScreen() {
  return (
    <Container>
      <GlobalStyle />
      <Topbar />
      <Bottombar />
    </Container>
  );
}

const Container = styled.div``;

const GlobalStyle = createGlobalStyle`
 body {
   background: #e5e5e5;
 }
`;

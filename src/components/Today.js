import Topbar from "./Topbar";
import Bottombar from "./Bottombar";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import React from "react";

import "dayjs/locale/pt-br";

import RenderTodayHabits from "./RenderTodayHabits";

export default function TodayScreen() {
  const [todayHabits, setTodayHabits] = React.useState([]);

  function today() {
    const dayjs = require("dayjs");
    dayjs.locale("pt-br");
    let now = dayjs();
    return <Today>{now.format("dddd, D/MM")}</Today>;
  }

  return (
    <Container>
      <GlobalStyle />
      <Topbar />
      {today()}
      <p>Nenhum hábito concluído aionda</p>
      <RenderTodayHabits
        todayHabits={todayHabits}
        setTodayHabits={setTodayHabits}
      />
      <Bottombar todayHabits={todayHabits} />
    </Container>
  );
}

const Container = styled.div`
  padding: 18px;
  margin-top: 70px;

  p {
    color: #bababa;
    font-size: 18px;
    margin-bottom: 30px;
  }
`;

const GlobalStyle = createGlobalStyle`
 body {
   background: #e5e5e5;
 }
`;

const Today = styled.div`
  color: #126ba5;
  font-size: 23px;
  margin-bottom: 5px;
`;

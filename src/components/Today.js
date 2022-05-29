import Topbar from "./Topbar";
import Bottombar from "./Bottombar";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import React from "react";
import { useTodayHabits, calcPercentage } from "../contexts/TodayHabitsContext";

import "dayjs/locale/pt-br";

import RenderTodayHabits from "./RenderTodayHabits";

export default function TodayScreen() {
  const [todayHabits] = useTodayHabits();
  const percentage = calcPercentage(todayHabits).toFixed(0);

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
      {todayHabits.filter((habit) => habit.done === true).length === 0 ? (
        <h1>Nenhum hábito concluído aionda</h1>
      ) : (
        <h2>{percentage}% dos hábitos concluídos</h2>
      )}
      <RenderTodayHabits />
      <Bottombar />
    </Container>
  );
}

const Container = styled.div`
  padding: 18px;
  margin-top: 70px;
  margin-bottom: 80px;

  > h1 {
    color: #bababa;
    font-size: 18px;
    margin-bottom: 30px;
  }

  > h2 {
    color: #8fc549;
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

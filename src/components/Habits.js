import Topbar from "./Topbar";
import Bottombar from "./Bottombar";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import React from "react";

import NewHabit from "./NewHabit";
import RenderListedHabits from "./RenderHabits";

export default function HabitsScreen() {
  const [createHabitWindow, setCreateHabitWindow] = React.useState(false);
  const [listedHabits, setListedHabits] = React.useState([]);

  return (
    <Container>
      <GlobalStyle />
      <Topbar />
      <CreateHabitsButton>
        <h1>Meus hábitos</h1>
        <div onClick={() => setCreateHabitWindow(true)}>+</div>
      </CreateHabitsButton>
      {createHabitWindow ? (
        <NewHabit
          setCreateHabitWindow={setCreateHabitWindow}
          listedHabits={listedHabits}
          setListedHabits={setListedHabits}
        />
      ) : (
        <></>
      )}
      <RenderListedHabits
        listedHabits={listedHabits}
        setListedHabits={setListedHabits}
      />
      <Bottombar />
    </Container>
  );
}

const Container = styled.div`
  padding: 18px;
  margin-top: 70px;
  margin-bottom: 80px;
`;

const GlobalStyle = createGlobalStyle`
 body {
   background: #e5e5e5;
 }
`;

const CreateHabitsButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  h1 {
    font-size: 23px;
    color: #126ba5;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 35px;
    background-color: #52b6ff;
    border-radius: 5px;
    color: #ffffff;
    font-size: 27px;
  }
`;

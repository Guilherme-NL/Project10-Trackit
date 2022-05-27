import Topbar from "./Topbar";
import Bottombar from "./Bottombar";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import axios from "axios";
import React from "react";
import { useContext } from "react";
import UserDataContext from "../contexts/UserDataContext";

import NewHabit from "./NewHabit";

export default function HabitsScreen() {
  const { token } = useContext(UserDataContext);

  const [listedHabits, setListedHabits] = React.useState([]);
  console.log(listedHabits);

  React.useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const url =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    axios.get(url, config).then((response) => {
      setListedHabits(response.data);
    });
  }, []);

  const [createHabitWindow, setCreateHabitWindow] = React.useState(false);

  return (
    <Container>
      <GlobalStyle />
      <Topbar />
      <CreateHabits>
        <h1>Meus hábitos</h1>
        <div onClick={() => setCreateHabitWindow(true)}>+</div>
      </CreateHabits>
      {createHabitWindow ? (
        <NewHabit setCreateHabitWindow={setCreateHabitWindow} />
      ) : (
        <></>
      )}
      {listedHabits.length === 0
        ? "Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!"
        : "tem coisa aqui"}
      <Bottombar />
    </Container>
  );
}

const Container = styled.div`
  padding: 18px;
  margin-top: 70px;
`;

const GlobalStyle = createGlobalStyle`
 body {
   background: #e5e5e5;
 }
`;

const CreateHabits = styled.div`
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

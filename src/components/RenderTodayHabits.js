import axios from "axios";
import { useUserData } from "../contexts/UserDataContext";
import React from "react";
import styled from "styled-components";
import { useTodayHabits } from "../contexts/TodayHabitsContext";

export default function RenderTodayHabits() {
  const [{ token }] = useUserData();
  const [todayHabits, setTodayHabits] = useTodayHabits();

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  React.useEffect(() => {
    const url =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
    axios.get(url, config).then((response) => {
      setTodayHabits(response.data);
      console.log(response.data);
    });
  }, []);

  function mark(todayHabit) {
    if (todayHabit.done) {
      const body = {};
      const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${todayHabit.id}/uncheck`;
      axios
        .post(url, body, config)
        .then(window.location.reload())
        .catch((err) => {
          alert(err.response.statusText);
        });
    } else {
      const body = {};
      const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${todayHabit.id}/check`;
      axios
        .post(url, body, config)
        .then(window.location.reload())
        .catch((err) => {
          alert(err.response.statusText);
        });
    }
  }

  return (
    <>
      {todayHabits.map((todayHabit) => {
        return (
          <Container key={todayHabit.id}>
            <h1>{todayHabit.name}</h1>
            <h2>Sequência atual: {todayHabit.currentSequence} dias</h2>
            <h2>Seu recorde: {todayHabit.highestSequence} dias</h2>
            <Chek done={todayHabit.done}>
              <ion-icon
                onClick={() => mark(todayHabit)}
                name="checkbox-sharp"
              ></ion-icon>
            </Chek>
          </Container>
        );
      })}
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 15px;
  background-color: #ffffff;
  margin-bottom: 10px;
  border-radius: 5px;
  position: relative;

  h1 {
    font-size: 20px;
    color: #666666;
    margin-bottom: 7px;
  }

  h2 {
    font-size: 13px;
    color: #666666;
  }
`;

const Chek = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 55px;
  color: ${(props) => (props.done ? "#8FC549" : "#ebebeb")};
`;

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
    });
  }, []);

  function mark(todayHabit) {
    const backupTodayHabits = [...todayHabits];
    const updatedTodayHabits = [...todayHabits];

    if (todayHabit.done) {
      const body = {};
      const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${todayHabit.id}/uncheck`;

      //optimistic update
      const index = updatedTodayHabits.indexOf(todayHabit);
      updatedTodayHabits[index] = {
        ...updatedTodayHabits[index],
        done: false,
        currentSequence: updatedTodayHabits[index].currentSequence - 1,
        highestSequence: updatedTodayHabits[index].highestSequence - 1,
      };
      setTodayHabits(updatedTodayHabits);

      axios.post(url, body, config).catch((err) => {
        console.log("ops, não foi possível desmarcar o hábito");
        setTodayHabits(backupTodayHabits);
      });
    } else {
      const body = {};
      const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${todayHabit.id}/check`;

      //optimistic update
      const index = updatedTodayHabits.indexOf(todayHabit);
      updatedTodayHabits[index] = {
        ...updatedTodayHabits[index],
        done: true,
        currentSequence: updatedTodayHabits[index].currentSequence + 1,
        highestSequence: updatedTodayHabits[index].highestSequence + 1,
      };
      setTodayHabits(updatedTodayHabits);
      axios.post(url, body, config).catch((err) => {
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
            <Sequence
              currentSequence={todayHabit.currentSequence}
              highestSequence={todayHabit.highestSequence}
            >
              <h2>
                Sequência atual: <span>{todayHabit.currentSequence} dias</span>
              </h2>
              <h2>
                Seu recorde: <span>{todayHabit.highestSequence} dias</span>
              </h2>
            </Sequence>
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
`;

const Sequence = styled.div`
  h2 {
    font-size: 13px;
    color: #666666;
  }

  span {
    color: ${(props) =>
      props.highestSequence === props.currentSequence &&
      props.currentSequence !== 0
        ? "#8FC549"
        : "#666666"};
  }
`;

const Chek = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 55px;
  color: ${(props) => (props.done ? "#8FC549" : "#ebebeb")};
`;

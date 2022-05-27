import styled from "styled-components";
import React from "react";
import axios from "axios";
import { useContext } from "react";
import UserDataContext from "../contexts/UserDataContext";

export default function NewHabit({ setCreateHabitWindow }) {
  const { token } = useContext(UserDataContext);

  const DaysArr = [
    { number: 1, name: "D", isSelected: false },
    { number: 2, name: "S", isSelected: false },
    { number: 3, name: "T", isSelected: false },
    { number: 4, name: "Q", isSelected: false },
    { number: 5, name: "Q", isSelected: false },
    { number: 6, name: "S", isSelected: false },
    { number: 7, name: "S", isSelected: false },
  ];
  const [habit, setHabit] = React.useState("");
  const [days, setDays] = React.useState(DaysArr);
  const [isLoading, setIsLoading] = React.useState(false);

  function createHabits() {
    setIsLoading(true);
    const filteredDays = days.filter((day) => day.isSelected);
    const habitDays = filteredDays.map((day) => day.number);

    const body = {
      name: habit,
      days: habitDays,
    };

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    console.log(token);

    const url =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    axios
      .post(url, body, config)
      .then((response) => {
        console.log(response.data);
        setCreateHabitWindow(false);
        setIsLoading(false);
      })
      .catch((err) => {
        alert(err.response.statusText);
        setIsLoading(false);
      });
  }

  function handleSelected(day) {
    const updatedDays = [...days];
    const index = updatedDays.indexOf(day);
    updatedDays[index] = {
      ...updatedDays[index],
      isSelected: !updatedDays[index].isSelected,
    };
    setDays(updatedDays);
    console.log(updatedDays);
  }

  return (
    <Container>
      <input
        placeholder="nome do hábito"
        value={habit}
        onChange={(e) => setHabit(e.target.value)}
        disabled={isLoading}
      />
      <Days>
        {days.map((day) => {
          return (
            <Day
              key={day.number}
              selected={day.isSelected}
              onClick={() => handleSelected(day)}
              disabled={isLoading}
            >
              {day.name}
            </Day>
          );
        })}
      </Days>
      <Buttons>
        <button onClick={() => setCreateHabitWindow(false)}>Cancelar</button>
        <button onClick={() => createHabits()}>Salvar</button>
      </Buttons>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 180px;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 18px;
  margin-bottom: 20px;
  position: relative;

  input {
    width: 100%;
    height: 45px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    font-size: 20px;
    ::placeholder {
      color: #dbdbdb;
    }
    padding: 10px;
    margin-bottom: 10px;
  }
`;

const Days = styled.div`
  display: flex;
`;

const Day = styled.button`
  width: 30px;
  height: 30px;
  background-color: ${(props) => (props.selected ? "#CFCFCF" : "#ffffff")};
  color: ${(props) => (props.selected ? "#ffffff" : "#dbdbdb")};
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin-right: 4px;
`;

const Buttons = styled.div`
  display: flex;
  position: absolute;
  bottom: 18px;
  right: 18px;

  button {
    width: 84px;
    height: 35px;
  }

  button:nth-child(1) {
    background-color: #ffffff;
    border: 1px solid #ffffff;
    color: #52b6ff;
    font-size: 16px;
  }
  button:nth-child(2) {
    background-color: #52b6ff;
    border: 1px solid #52b6ff;
    border-radius: 5px;
    color: #ffffff;
    font-size: 16px;
  }
`;

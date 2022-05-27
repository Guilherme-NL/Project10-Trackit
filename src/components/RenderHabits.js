import styled from "styled-components";
import axios from "axios";
import React from "react";
import { useContext } from "react";
import UserDataContext from "../contexts/UserDataContext";

import trash from "../assets/trash.png";

const DaysArr = [
  { number: 1, name: "D", isSelected: false },
  { number: 2, name: "S", isSelected: false },
  { number: 3, name: "T", isSelected: false },
  { number: 4, name: "Q", isSelected: false },
  { number: 5, name: "Q", isSelected: false },
  { number: 6, name: "S", isSelected: false },
  { number: 7, name: "S", isSelected: false },
];

export default function RenderListedHabits() {
  const { token } = useContext(UserDataContext);

  const [listedHabits, setListedHabits] = React.useState([]);

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

  function deleteHabit(id) {
    const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    console.log(url);
    axios.delete(url, config).then(console.log());
  }

  return (
    <>
      {listedHabits.map((listedHabit) => {
        return (
          <Container key={listedHabit.id}>
            <div>{listedHabit.name}</div>
            <Days>
              {DaysArr.map((day) => {
                return (
                  <Day
                    key={day.number}
                    selected={listedHabit.days.includes(day.number)}
                  >
                    {day.name}
                  </Day>
                );
              })}
            </Days>
            <Trash
              src={trash}
              alt="trash"
              onClick={() => {
                if (window.confirm("certeza?")) deleteHabit(listedHabit.id);
              }}
            />
          </Container>
        );
      })}
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 91px;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 15px;
  position: relative;
  margin-bottom: 10px;
  div {
    color: #666666;
    font-size: 20px;
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

const Trash = styled.img`
  position: absolute;
  top: 15px;
  right: 15px;
`;

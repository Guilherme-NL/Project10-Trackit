import styled from "styled-components";
import axios from "axios";
import React from "react";
import { useUserData } from "../contexts/UserDataContext";

import trash from "../assets/trash.png";

const DaysArr = [
  { number: 0, name: "D", isSelected: false },
  { number: 1, name: "S", isSelected: false },
  { number: 2, name: "T", isSelected: false },
  { number: 3, name: "Q", isSelected: false },
  { number: 4, name: "Q", isSelected: false },
  { number: 5, name: "S", isSelected: false },
  { number: 6, name: "S", isSelected: false },
];

export default function RenderListedHabits({ listedHabits, setListedHabits }) {
  const [{ token }] = useUserData();

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

  function deleteHabit(listedHabit) {
    const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${listedHabit.id}`;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const backupListedHabits = [...listedHabits];

    //optimistic update
    setListedHabits(listedHabits.filter((habit) => habit !== listedHabit));
    axios.delete(url, config).catch((err) => {
      console.log("ops, não foi possível deletar o seu hábito");
      setListedHabits(backupListedHabits);
    });
  }

  return (
    <Container>
      {listedHabits.length === 0 ? (
        <p>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </p>
      ) : (
        listedHabits.map((listedHabit) => {
          return (
            <MyHabits key={listedHabit.id}>
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
                  if (
                    window.confirm("Tem certeza que quer deletar esse hábito?")
                  )
                    deleteHabit(listedHabit);
                }}
              />
            </MyHabits>
          );
        })
      )}
    </Container>
  );
}

const Container = styled.div`
  p {
    font-size: 18px;
    color: #666666;
  }
`;

const MyHabits = styled.div`
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

import styled from "styled-components";
import { Link } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useTodayHabits, calcPercentage } from "../contexts/TodayHabitsContext";

export default function Bottombar() {
  const [todayHabits] = useTodayHabits();

  const percentage = calcPercentage(todayHabits);

  function progressbar() {
    return (
      <>
        <CircularProgressbar
          background={true}
          backgroundPadding={5}
          value={percentage}
          text="Hoje"
          styles={{
            text: {
              fill: "#ffffff",
              fontSize: "18px",
            },
            background: {
              fill: "#52B6FF",
            },
            path: {
              stroke: "#ffffff",
            },
            trail: {
              stroke: "#52B6FF",
            },
          }}
        />
      </>
    );
  }
  return (
    <Container>
      <Link to={"/habitos"}>
        <h1>Hábitos</h1>
      </Link>
      <Progression>
        <Link to={"/hoje"}>{progressbar()}</Link>
      </Progression>
      <Link to={"/historico"}>
        <h1>Histórico</h1>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 36px;

  h1 {
    font-size: 18px;
    color: #52b6ff;
  }

  a:-webkit-any-link {
    text-decoration: none;
    color: white;
    cursor: pointer;
  }
`;

const Progression = styled.div`
  width: 91px;
  height: 91px;
  margin-bottom: 40px;
`;

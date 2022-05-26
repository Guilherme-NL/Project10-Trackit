import styled from "styled-components";
import { useContext } from "react";
import UserDataContext from "../contexts/UserDataContext";

import trackit from "../assets/TrackIt.png";

export default function Topbar() {
  const { name, image } = useContext(UserDataContext);
  return (
    <Container>
      <img src={trackit} alt="trackit" />
      <UserImage src={image} alt={name} />
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px;
`;

const UserImage = styled.img`
  width: 51px;
  height: 51px;
  border-radius: 50%;
`;

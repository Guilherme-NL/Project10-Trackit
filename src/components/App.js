import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import UserDataContext from "../contexts/UserDataContext";

import HomeScreen from "./Home";
import RegistrationScreen from "./Registration";
import HabitsScreen from "./Habits";
import TodayScreen from "./Today";
import HistoryScreen from "./History";

export default function App() {
  const [userData, setUserData] = React.useState({});
  console.log(userData);
  return (
    <>
      <BrowserRouter>
        <UserDataContext.Provider value={userData}>
          <Routes>
            <Route
              path="/"
              element={<HomeScreen setUserData={setUserData} />}
            />
            <Route path="/cadastro" element={<RegistrationScreen />} />
            <Route path="/habitos" element={<HabitsScreen />} />
            <Route path="/hoje" element={<TodayScreen />} />
            <Route path="/historico" element={<HistoryScreen />} />
          </Routes>
        </UserDataContext.Provider>
      </BrowserRouter>
    </>
  );
}

import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { UserDataProvider } from "../contexts/UserDataContext";
import { TodayHabitsProvider } from "../contexts/TodayHabitsContext";

import HomeScreen from "./Home";
import RegistrationScreen from "./Registration";
import HabitsScreen from "./Habits";
import TodayScreen from "./Today";
import HistoryScreen from "./History";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <UserDataProvider>
          <TodayHabitsProvider>
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/cadastro" element={<RegistrationScreen />} />
              <Route path="/habitos" element={<HabitsScreen />} />
              <Route path="/hoje" element={<TodayScreen />} />
              <Route path="/historico" element={<HistoryScreen />} />
            </Routes>
          </TodayHabitsProvider>
        </UserDataProvider>
      </BrowserRouter>
    </>
  );
}

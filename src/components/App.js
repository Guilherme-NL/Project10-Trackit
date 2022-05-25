import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import HomeScreen from "./Home";
import RegistrationScreen from "./Registration";
import HabitsScreen from "./Habits";
import TodayScreen from "./Today";
import HistoryScreen from "./History";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={HomeScreen} />
          <Route path="/cadastro" element={RegistrationScreen} />
          <Route path="/habitos" element={HabitsScreen} />
          <Route path="/hoje" element={TodayScreen} />
          <Route path="/historico" element={HistoryScreen} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

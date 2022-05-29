import React from "react";

const TodayHabitsContext = React.createContext();

function TodayHabitsProvider(props) {
  const [todayHabits, setTodayHabits] = React.useState([]);

  return (
    <TodayHabitsContext.Provider
      value={[todayHabits, setTodayHabits]}
      {...props}
    />
  );
}

function calcPercentage(todayHabits) {
  const percentage =
    (todayHabits.filter((habit) => habit.done === true).length /
      todayHabits.length) *
    100;

  return percentage;
}

function useTodayHabits() {
  const context = React.useContext(TodayHabitsContext);
  if (!context) {
    throw new Error("useTodayHabits must be used within a UserDataContext");
  }
  return context;
}

export { TodayHabitsProvider, useTodayHabits, calcPercentage };

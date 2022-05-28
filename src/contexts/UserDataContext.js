import React from "react";

const UserDataContext = React.createContext();

const USER_DATA = "__user_data__";

function UserDataProvider(props) {
  const [userData, setUserData] = React.useState(
    () => JSON.parse(window.localStorage.getItem(USER_DATA)) || null
  );

  return (
    <UserDataContext.Provider value={[userData, setUserData]} {...props} />
  );
}

function saveUserDataInLocalStorage(userData) {
  window.localStorage.setItem(USER_DATA, JSON.stringify(userData));
}

function useUserData() {
  const context = React.useContext(UserDataContext);
  if (!context) {
    throw new Error("useUserData must be used within a UserDataContext");
  }
  return context;
}

export { UserDataProvider, useUserData, saveUserDataInLocalStorage };

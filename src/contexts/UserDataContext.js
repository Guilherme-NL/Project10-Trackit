import React from "react";

const UserDataContext = React.createContext();

function UserDataProvider(props) {
  const [userData, setUserData] = React.useState(null);

  return (
    <UserDataContext.Provider value={[userData, setUserData]} {...props} />
  );
}

function useUserData() {
  const context = React.useContext(UserDataContext);
  if (!context) {
    throw new Error("useUserData must be used within a UserDataContext");
  }
  return context;
}

export { UserDataProvider, useUserData };

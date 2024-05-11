// GlobalStateContext.js
import React, { createContext, useContext, useState } from "react";

// Create a context
const GlobalStateContext = createContext();

// Create a provider component
export const GlobalStateProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [from, setFrom] = useState("");

  // Pass state and functions to the context value
  const contextValue = {
    email,
    password,
    from,
    setEmail,
    setPassword,
    setFrom,
    actions: {},
  };

  return (
    <GlobalStateContext.Provider value={contextValue}>
      {children}
    </GlobalStateContext.Provider>
  );
};

// Custom hook to access the global state and actions
export const useGlobalState = () => useContext(GlobalStateContext);

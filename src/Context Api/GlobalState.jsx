import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -150 },
    { id: 2, text: "Salary", amount: 30000 },
    { id: 3, text: "Book", amount: -500 },
    { id: 4, text: "Camera", amount: -15000 },
  ],
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider value={{ transactions: state.transactions }}>
      {children}
    </GlobalContext.Provider>
  );
};
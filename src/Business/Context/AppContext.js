import React, { Children, createContext, useState } from "react";

type ContextType = {
  initDate: stirng,
  finalDate: string,
  setInitDate: (initDate: string) => void,
  setFinalDate: (finalDate: string) => void,
};

const AppProvider = ({ children }) => {
  const [initDate, setInitDate] = useState("");
  const [finalDate, setFinalDate] = useState("");
  return (
    <AppProvider.Provider
      value={{ initDate, finalDate, setInitDate, setFinalDate }}
    ></AppProvider.Provider>
  );
};

export default AppProvider;

//export const AppContext = createContext < ContextType | null > (null);

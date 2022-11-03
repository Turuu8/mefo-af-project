import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const state = { isLoginOpen, setIsLoginOpen, isSignupOpen, setIsSignupOpen };
  return (
    <GlobalContext.Provider value={state}>{children}</GlobalContext.Provider>
  );
};

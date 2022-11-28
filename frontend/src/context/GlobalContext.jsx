import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [lang, setLang] = useState("en");
  const [token, setToken] = useState("");
  const [serverMsg, setServerMsg] = useState({});
  const [userDetail, setUserDetail] = useState({});
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isForPassOpen, setIsForPassOpen] = useState(false);
  const locale = localStorage.getItem("setLanguage");
  useEffect(() => {
    (() => {
      if (locale === "en") return setLang("en");
      return setLang("mn");
    })();
  }, [locale]);

  const state = {
    token: { token, setToken },
    language: { lang, setLang },
    msg: { serverMsg, setServerMsg },
    user: { userDetail, setUserDetail },
    loginOpen: { isLoginOpen, setIsLoginOpen },
    signupOpen: { isSignupOpen, setIsSignupOpen },
    forPassOpen: { isForPassOpen, setIsForPassOpen },
  };
  return <GlobalContext.Provider value={state}>{children}</GlobalContext.Provider>;
};

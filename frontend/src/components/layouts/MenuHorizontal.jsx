import { langTextLeft } from "../../utils/constants";
import { useLocation, Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import classes from "../../assets/styles/header.module.scss";

export const MenuHorizontal = () => {
  const [current, setCurrent] = useState(0);
  const {
    user: { userDetail },
    language: { lang, setLang },
    loginOpen: { setIsLoginOpen },
    signupOpen: { setIsSignupOpen },
  } = useContext(GlobalContext);
  const { search, pathname } = useLocation();
  useEffect(() => {
    (() => {
      const query = new URLSearchParams(search);
      if (query.get("loginOpen")) return setIsLoginOpen(true);
      if (query.get("signupOpen")) return setIsSignupOpen(true);
    })();
  }, [search, setIsLoginOpen, setIsSignupOpen]);
  // useEffect(() => {
  //   (() => {
  //     switch (pathname) {
  //       case "/all":
  //         return setCurrent(1);
  //       case "/men":
  //         return setCurrent(3);
  //       case "/women":
  //         return setCurrent(2);
  //       case "/bag":
  //         return setCurrent(4);
  //       default:
  //         return setCurrent(0);
  //     }
  //   })();
  // }, [pathname]);
  const toEnglish = () => {
    setLang("en");
    localStorage.setItem("setLanguage", "en");
  };
  const toMongolia = () => {
    setLang("mn");
    localStorage.setItem("setLanguage", "mn");
  };
  return (
    <div className={classes.header}>
      <div className={classes.header_l}>
        <Link to={"/"} className={classes.header_l_img_container}>
          <img alt="mepoAfLogo" src="https://res.cloudinary.com/mustnest/image/upload/v1669191520/Mepo_Af/logoBlack_awmpvg.png" />
        </Link>
        <div className={classes.header_l_links}>
          {langTextLeft[lang].map(({ name, path }, id) => (
            <Link onClick={() => setCurrent(id)} style={{ fontWeight: current === id ? 600 : 300 }} to={path} key={name}>
              {name}
            </Link>
          ))}
        </div>
      </div>
      <div className={classes.header_r}>
        <div className={classes.header_r_langs}>
          <button style={{ opacity: lang === "en" ? 1 : 0.5 }} onClick={toEnglish}>
            eng
          </button>
          <span>/</span>
          <button style={{ opacity: lang === "mn" ? 1 : 0.5 }} onClick={toMongolia}>
            мон
          </button>
        </div>
        <Link onClick={() => setCurrent(3)} style={{ fontWeight: current === 3 ? 600 : 300 }} to={"/bag"}>
          {lang === "en" ? "bag" : "сагс"}
        </Link>
        {userDetail?.token ? (
          <button>{lang === "en" ? "account" : "аккаунт"}</button>
        ) : (
          <button onClick={() => setIsLoginOpen(true)}>{lang === "en" ? "login" : "нэвтрэх"}</button>
        )}
      </div>
    </div>
  );
};

import { useContext, useEffect } from "react";
import { navbarLeft } from "../../utils/constants";
import { useLocation, Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";
import classes from "../../assets/styles/header.module.scss";

export const MenuHorizontal = () => {
  const {
    user: { userDetail },
    loginOpen: { setIsLoginOpen },
    signupOpen: { setIsSignupOpen },
  } = useContext(GlobalContext);
  const { search } = useLocation();
  useEffect(() => {
    (() => {
      const query = new URLSearchParams(search);
      if (query.get("loginOpen")) return setIsLoginOpen(true);
      if (query.get("signupOpen")) return setIsSignupOpen(true);
    })();
  }, [search, setIsLoginOpen, setIsSignupOpen]);

  return (
    <div className={classes.header}>
      <div className={classes.header_l}>
        <Link to={"/"} className={classes.header_l_img_container}>
          <img
            alt="mepoAfLogo"
            src="https://res.cloudinary.com/mustnest/image/upload/v1669191520/Mepo_Af/logoBlack_awmpvg.png"
          />
        </Link>
        <div className={classes.header_l_links}>
          {navbarLeft.map(({ name, path }) => (
            <Link to={path} key={name}>
              {name}
            </Link>
          ))}
        </div>
      </div>
      <div className={classes.header_r}>
        <div>
          <button>eng</button>
          <span>/</span>
          <button>mon</button>
        </div>
        <Link to={"/bag"}>bag</Link>
        <button onClick={() => setIsLoginOpen(true)}>login</button>
      </div>
    </div>
  );
};

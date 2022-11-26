import { useContext, useEffect, useState } from "react";
import { navbarLeft } from "../../utils/constants";
import { useLocation, Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";
import classes from "../../assets/styles/header.module.scss";

export const MenuHorizontal = () => {
  const [item, setItem] = useState("");
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
  const handleClick = (e) => {
    if (item === e.target) {
      item.style.fontWeight = "900";
      item.style.color = "black";
    } else {
      if (item) {
        item.style.fontWeight = "100";
        item.style.color = "#6A6A6A";
      }
      e.target.style.fontWeight = "900";
      e.target.style.color = "black";
    }
    setItem(e.target);
  };
  return (
    <div className={classes.header}>
      <div className={classes.header_content}>
        <div className={classes.header_content_l}>
          <Link to={"/"} className={classes.header_content_l_image}>
            <img
              alt="mepoAfLogo"
              src="https://res.cloudinary.com/mustnest/image/upload/v1669191520/Mepo_Af/logoBlack_awmpvg.png"
            />
          </Link>
          <div className={classes.header_content_l_links}>
            {navbarLeft.map(({ name, path }) => (
              <Link to={path} key={name}>
                <span
                  onClick={(e) => handleClick(e)}
                  className={name === "women's" ? classes.header_content_l_links_p : {}}
                >
                  {name}
                </span>
              </Link>
            ))}
          </div>
        </div>
        <div className={classes.header_content_r}>
          <div onClick={(e) => handleClick(e)}>
            <button>eng</button>
            <span>&nbsp;/&nbsp;</span>
            <button>mon</button>
          </div>
          <Link to={"/bag"} onClick={(e) => handleClick(e)}>
            <button>bag</button>
          </Link>
          {userDetail?.token ? (
            <button onClick={(e) => handleClick(e)}>account</button>
          ) : (
            <button
              onClick={(e) => {
                setIsLoginOpen(true);
                handleClick(e);
              }}
            >
              login
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

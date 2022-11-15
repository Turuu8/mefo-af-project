import { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";
import classes from "../../assets/styles/header.module.scss";
import bag from "../../assets/images/bag.svg";
import Hamburger from "../../assets/images/hamburger-menu.svg";
import logo from "../../assets/images/main-logo-black.png";
import { MenuVetical } from "./menuVertical";

export const MenuHorzintial = ({ headermenu, headermenu2 }) => {
  const { search } = useLocation();
  const [menu, setMenu] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const {
    loginOpen: { setIsLoginOpen },
    signupOpen: { setIsSignupOpen },
  } = useContext(GlobalContext);
  useEffect(() => {
    (() => {
      const query = new URLSearchParams(search);
      if (query.get("loginOpen")) return setIsLoginOpen(true);
      if (query.get("signupOpen")) return setIsSignupOpen(true);
    })();
  }, [search, setIsLoginOpen]);

  const openLoginComp = () => {
    setIsLoginOpen(true);
  };
  window.addEventListener("resize", (event) => {
    setMenuOpen(event.currentTarget.innerWidth >= 392);
    if (event.currentTarget.innerWidth >= 392) {
      setMenu(false);
    }
  });
  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
    setMenu((p) => !p);
  };

  return (
    <>
      <div className={classes.header_content}>
        {headermenu.map((props, i) => (
          <div key={i} className={classes.header_content_home}>
            <div className={classes.header_content_home_menu}>
              <img
                src={Hamburger}
                onClick={menuToggleHandler}
                className={classes.header_content_home_menu_toggle}
              />

              <img
                src={logo}
                alt="mepo_af"
                className={classes.header_content_home_menu_logo}
              />

              <img src={bag} className={classes.header_content_home_menu_bag} />
            </div>
            <ul>
              <li>
                <a href={props.path_1}>{props.title_1}</a>
              </li>
              <li>
                <a href={props.path_2}>{props.title_2}</a>
              </li>
              <li>
                <a href={props.path_3}>{props.title_3}</a>
              </li>
            </ul>
          </div>
        ))}
        {headermenu2.map((props, i) => (
          <nav
            key={i}
            className={`${classes.header_content_nav} ${
              menuOpen ? classes.menu : ""
            }`}
          >
            <button>
              <span>{props.title_5}</span>
              <span>{props.title_6}</span>
            </button>

            <button>{props.title_7}</button>
            <button onClick={openLoginComp}>{props.title_8}</button>
          </nav>
        ))}
      </div>
      <div
        style={{
          display: !menu ? "block" : "block",
          transform: !menu ? "translateY(-650px)" : "translateY(-80px)",
        }}
        className={classes.header_box}
      >
        <MenuVetical
          headervermenu={headermenu}
          headervermenu2={headermenu2}
          state={menuToggleHandler}
        />
      </div>
    </>
  );
};

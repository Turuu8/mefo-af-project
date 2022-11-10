import { useContext, useState} from "react";
import { GlobalContext } from "../../context/GlobalContext";
import classes from "../../assets/styles/header.module.scss";
import vector from "../../assets/images/Vector.svg"
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../assets/images/mepo_af_logo.png";
import { MenuVetical } from "./menuVertical";

export const MenuHorzintial = ({ headermenu, headermenu2 }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menu, setMenu] = useState(false);

  const { setIsLoginOpen } = useContext(GlobalContext);
  const openLoginComp = () => {
    setIsLoginOpen(true);
  };

  window.addEventListener("resize", (event) => {
    setMenuOpen(event.currentTarget.innerWidth >= 768);
    if (event.currentTarget.innerWidth >= 768) {
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
            <div className={classes.header_content_logo}>
              <img src={logo} alt="mepo_af" />
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
        <div className={classes.header_content_toggle}>
        
            <img src={vector} onClick={menuToggleHandler} />
         

        </div>
      </div>
      <div
        style={{
          display: !menu ? "block" : "block",
          transform: !menu? "translateY(-500px)" : "translateY(-100px)" 
        }}
        className={classes.header_box}
      >
        <MenuVetical headervermenu={headermenu} headervermenu2={headermenu2} state={menuToggleHandler}/>
      </div>
    </>
  );
};

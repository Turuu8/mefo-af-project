import { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import classes from "../../assets/styles/header.module.scss";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../assets/images/mepo_af_logo.png";
import { useEffect } from "react";
export const Header = () => {
  const { setIsLoginOpen } = useContext(GlobalContext);
  const openLoginComp = () => {
    setIsLoginOpen(true);
  };
  const [menuOpen, setMenuOpen] = useState(true);
  const [ size, setSize ] = useState({
    width: undefined,
    height: undefined,
  })
  useEffect(() => {
    const handleResize = () =>{
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize)
  }, []);
  useEffect(() =>{
    if (size.width > 768 && menuOpen){
      setMenuOpen(false)
    }
  })
  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
   
  };
  return (
    <header className={classes.header}>
      <div className={classes.header_content}>
        {header_text.map(( props,i) => (
            <div key={i} className={classes.header_content_home}>
              <div className={classes.header_content_logo}>
                <img src={logo} alt="mepo_af" />
              </div>
              <ul>
                <li>
                  <a href="/">{props.title_1}</a>
                </li>
                <li>
                  <a href="/">{props.title_2}</a>
                </li>
                <li>
                  <a href="/">{props.title_3}</a>
                </li>
              </ul>
            </div>
          )
        )}
        {header_text2.map((props, i) => (
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
          {menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
      {/* <div
        style={{
          display: menuOpen ? "none" : "block",
        }}
        className={classes.header_box}
      >
        {!menuOpen && header_text.map(( props,i) => (
            <div key={i}>
              
              <ul>
                <li>
                  <a href="/">{props.title_1}</a>
                </li>
                <li>
                  <a href="/">{props.title_2}</a>
                </li>
                <li>
                  <a href="/">{props.title_3}</a>
                </li>
              </ul>
            </div>
          )
        )}
        {!menuOpen && header_text2.map((props, i) => (
          <div key={i}>
            <button>
              <span>{props.title_5}</span>
              <span>{props.title_6}</span>
            </button>
            <button>{props.title_7}</button>
            <button onClick={openLoginComp}>{props.title_8}</button>
          </div>
        ))}
      </div> */}
    </header>
  );
};

const header_text = [
  {
    title_1: "ABOUT",
    title_2: "PRODUCT",
    title_3: "CONTACT",
  },
];

const header_text2 = [
  {
    title_5: "ENG/",
    title_6: "MON",
    title_7: "BAG",
    title_8: "LOGIN",
  },
];

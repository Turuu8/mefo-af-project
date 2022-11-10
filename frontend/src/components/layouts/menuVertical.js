import classes from "../../assets/styles/header.module.scss";
import { useContext } from "react";
import logo from "../../assets/images/mepo_af_logo.png";
import { GlobalContext } from "../../context/GlobalContext";
import { AiOutlineClose } from "react-icons/ai";
export const MenuVetical = ({ headervermenu, headervermenu2, state }) => {
  const { setIsLoginOpen } = useContext(GlobalContext);
  const openLoginComp = () => {
    setIsLoginOpen(true);
  };
 
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        paddingTop: "30px",
        gap: "30px",
      }}
    >
      <img src={logo} className={classes.header_box_logo} alt="mepo_afiphone" />

      <div style={{ paddingTop: "30px" }}>
        {headervermenu.map((props, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              paddingTop: "10px",
            }}
          >
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
        {headervermenu2.map((props, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              paddingTop: "10px",
            }}
          >
            <button>
              <span>{props.title_5}</span>
              <span>{props.title_6}</span>
            </button>

            <button>{props.title_7}</button>
            <button onClick={openLoginComp}>{props.title_8}</button>
          </div>
        ))}
      </div>
      <div style={{ textAlign: "center" }}>
        <button onClick={state}>
          <AiOutlineClose />
        </button>
      </div>
    </div>
  );
};

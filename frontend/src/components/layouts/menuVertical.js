import classes from "../../assets/styles/header.module.scss";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
export const MenuVetical = ({ headervermenu, headervermenu2}) => {

  const { setIsLoginOpen } = useContext(GlobalContext);
  const openLoginComp = () => {
    setIsLoginOpen(true);
  };
  return (
    <>
      {headervermenu.map((props, i) => (
        <div key={i} className={classes.header_box_menu}>
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
           <div style={{display:"flex", alignItems: "center", flexDirection: "column" }}>
               <button>
                 <span>{props.title_5}</span>
                 <span>{props.title_6}</span>
               </button>
   
               <button>{props.title_7}</button>
               <button onClick={openLoginComp}>{props.title_8}</button>
           </div>
         
        ))}
    </>
  );
};

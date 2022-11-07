

import classes from "../../assets/styles/header.module.scss";


import { MenuHorzintial } from "./menuHorzintal";

export const Header = () => {

  return (
    <header className={classes.header}>
      <MenuHorzintial headermenu={header_text} headermenu2={header_text2} />
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

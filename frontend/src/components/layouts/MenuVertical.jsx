import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import BagIcon from "../../assets/images/bag.svg";
import { navbarMobile } from "../../utils/constants";
import { motion, AnimatePresence } from "framer-motion";
import { GlobalContext } from "../../context/GlobalContext";
import classes from "../../assets/styles/header.module.scss";
import MenuIcon from "../../assets/images/hamburger-menu.svg";
import { navbarDropdownAnimation } from "../../utils/animationVariants";
import closeIcon from "../../assets/images/close-white.svg";

export const MenuVertical = () => {
  const [onMenu, setOnMenu] = useState(false);
  const {
    loginOpen: { setIsLoginOpen },
  } = useContext(GlobalContext);
  const openLoginComp = () => {
    setIsLoginOpen(true);
    setOnMenu(false);
  };
  const closeDrop = () => {
    setOnMenu(false);
  };
  return (
    <>
      <div className={classes.mobileHeader}>
        <div onClick={() => setOnMenu(true)} className={classes.mobileHeader_icon}>
          <img src={MenuIcon} alt="menuIcon" />
        </div>
        <Link to={"/"} className={classes.mobileHeader_logo}>
          <img
            alt="mepoAfLogo"
            src="https://res.cloudinary.com/mustnest/image/upload/v1669191520/Mepo_Af/logoBlack_awmpvg.png"
          />
        </Link>
        <div className={classes.mobileHeader_icon}>
          <a href="/bag">
            <img src={BagIcon} alt="bagIcon" />
          </a>
        </div>
      </div>

      {/* Drop down */}

      <AnimatePresence>
        {onMenu && (
          <motion.div
            variants={navbarDropdownAnimation}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={classes.mobileDrop}
          >
            <div className={classes.mobileDrop_header}>
              <div onClick={() => setOnMenu(false)} className={classes.mobileDrop_header_closeIcon}>
                <img src={closeIcon} alt="" />
              </div>
              <Link to={"/"} className={classes.mobileDrop_header_logo}>
                <img
                  alt="mepoAfLogo"
                  src="https://res.cloudinary.com/mustnest/image/upload/v1669202813/Mepo_Af/main-logo-white_idnwm0.png"
                />
              </Link>
            </div>
            <div className={classes.mobileDrop_body}>
              {navbarMobile.map(({ name, path }) => (
                <Link onClick={name === "login" ? openLoginComp : closeDrop} key={name} to={path}>
                  {name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

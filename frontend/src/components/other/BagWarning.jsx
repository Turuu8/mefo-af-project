import { useContext } from "react";
import { motion } from "framer-motion";
import classes from "../../assets/styles/bag.module.scss";
import { GlobalContext } from "../../context/GlobalContext";

export const BagWarning = () => {
  const {
    language: { lang },
  } = useContext(GlobalContext);
  return (
    <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} className={classes.bagWarning}>
      {lang === "en" ? "You have already chosen this product " : "Сагсанд орсон бараа байна."}
    </motion.div>
  );
};

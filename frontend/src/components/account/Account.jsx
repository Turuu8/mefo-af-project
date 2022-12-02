import React from "react";
import { motion } from "framer-motion";
import { Order, Titles, Empty } from "./Build";
import css from "../../assets/styles/Account/account-style.module.scss";

export const AccountSection = () => {
  const datas = new Array(3).fill(1);
  return (
    <section className={css.accountSection}>
      <div className={css.accountSection__titleSection}>
        <h1 className={css.accountSection__titleSection__title}>
          MY ORDERED CLOTHES
        </h1>
      </div>
      <motion.div
        className={css.accountSection__ordersSection}
        initial={{
          opacity: 0,
          transitionDuration: "0.2s",
          x: -30,
          transition: { x: "1s", opacity: "1s" },
        }}
        animate={{ opacity: 1, x: 0 }}
      >
        <Titles />
        <div className={css.accountSection__ordersSection__orders}>
          {datas?.map((el, idx) => (
            <Order key={idx} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

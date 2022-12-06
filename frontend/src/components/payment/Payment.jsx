import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import css from "../../assets/styles/Payment/PaymentStyle.module.scss";

// import sections
import { Pocket, Summary, ContactInformation } from "./Build";

// import context
import { usePaymentContext } from "../../context/paymentContext";

export const Payment = () => {
  const datas = new Array(2).fill(1);
  const { openPocket, setOpenPocket } = usePaymentContext();
  const [switchSections, setSwitchSections] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const switchBtn = () => {
    if (!(width <= 901 || (width <= 901 && switchSections)))
      setSwitchSections(true);
  };
  useEffect(() => {
    const lookAfter = (event) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener("resize", lookAfter);
    return () => {
      window.removeEventListener("resize", lookAfter);
    };
  }, [switchSections, width]);

  return (
    <motion.div
      className={css.paymentSection}
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <ContactInformation key={2} switchSections={switchSections} />
      <Summary
        key={1}
        datas={datas}
        switchBtn={switchBtn}
        switchSections={switchSections}
      />
      {openPocket ? <Pocket key={3} /> : <div />}
    </motion.div>
  );
};

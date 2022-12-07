import { useContext } from "react";
import { motion } from "framer-motion";
import Order from "./Build/Order/Order";
import Titles from "./Build/Titles/Titles";
import { GlobalContext } from "./../../context/GlobalContext";
import css from "../../assets/styles/Bag/BagStyle.module.scss";
import backgroundfirst from "../../assets/images/Bag/background.png";
import backgroundsecond from "../../assets/images/Bag/background2.png";

export const Bag = () => {
  const {
    selectedProducts: { selectedPros },
  } = useContext(GlobalContext);
  const totalPrice = selectedPros.reduce((acc, item) => acc + item.proDetail?.price, 0);
  // console.log(selectedPros);
  return (
    <section className={css.bagSection}>
      <div className={css.bagSection__titleSection}>
        <img src={backgroundfirst} className={css.backgroundLarge} alt="back" />
        <img src={backgroundsecond} className={css.backgroundSmall} alt="back" />
        <div className={css.container}>
          <h1 className={css.bagSection__titleSection__title}>SHOPPING BAG</h1>
        </div>
      </div>
      <motion.div
        className={css.bagSection__ordersSection}
        initial={{
          opacity: 0,
          transitionDuration: "0.2s",
          x: -30,
          transition: { x: "1s", opacity: "1s" },
        }}
        animate={{ opacity: 1, x: 0 }}
      >
        <Titles />
        <div className={css.bagSection__ordersSection__orders}>
          {selectedPros.map((item, i) => (
            <Order key={i} item={item} />
          ))}
        </div>
        <div className={css.bagSection__ordersSection__totalSection}>
          <div className={css.bagSection__ordersSection__totalSection__total}>
            <h3>TOTAL PRICE </h3>
            <h3>USD {new Intl.NumberFormat("en-In").format(totalPrice)}</h3>
          </div>
        </div>

        <div className={css.bagSection__ordersSection__main_button_section}>
          <button>Go to checkout</button>
          <p>Shipping & taxes calculated a checkout</p>
        </div>
      </motion.div>
    </section>
  );
};

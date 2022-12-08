import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useBag } from "../../API/useBag";
import { useContext, useEffect } from "react";
import Order from "../../components/bag/Build/Order/Order";
import Titles from "../../components/bag/Build/Titles/Titles";
import { GlobalContext } from "./../../context/GlobalContext";
import css from "../../assets/styles/Bag/BagStyle.module.scss";
import backgroundfirst from "../../assets/images/Bag/background.png";
import backgroundsecond from "../../assets/images/Bag/background2.png";

export const Bag = () => {
  const { getStoredItems } = useBag();
  const {
    token: { token },
    storedOrders: { orderInStore },
  } = useContext(GlobalContext);
  useEffect(() => {
    getStoredItems(token);
    // eslint-disable-next-line
  }, [token]);
  const totalPrice = orderInStore.reduce((acc, item) => acc + item.proID?.price * item.amount, 0);

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
          {orderInStore.map((item, i) => (
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
          <Link to={token ? "/payment" : "/"}>Go to payment</Link>
          <p>Shipping & taxes calculated a checkout</p>
        </div>
      </motion.div>
    </section>
  );
};

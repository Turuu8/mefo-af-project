import { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Check from "../../assets/images/check.svg";
import classes from "../../assets/styles/bag.module.scss";
import { GlobalContext } from "../../context/GlobalContext";
import { bagDropdownAnimation } from "./../../utils/animationVariants";

export const BagDropDown = ({ products }) => {
  const {
    language: { lang },
    onBag: { setOnBagOpen },
  } = useContext(GlobalContext);
  const totalPrice = products.reduce((acc, item) => acc + item.proDetail?.price, 0);

  return (
    <>
      <div onClick={() => setOnBagOpen(false)} className={classes.BagDropDown_background} />
      <motion.div variants={bagDropdownAnimation} initial="hidden" animate="visible" exit="exit" className={classes.BagDropDown}>
        <div className={classes.BagDropDown_header}>
          <img src={Check} alt="check" className={classes.BagDropDown_header_check} />
          {lang === "en" ? "Your item has been added to the card." : "Таны захиалга сагсанд нэмэгдлээ."}
        </div>
        <div className={classes.BagDropDown_body}>
          <h4 className={classes.BagDropDown_body_shopCart}>Shopping Cart</h4>
          <div className={classes.BagDropDown_body_card}>
            {products.map((item, i) => (
              <div key={i} className={classes.BagDropDown_body_card_item}>
                <div className={classes.BagDropDown_body_card_item_left}>
                  <div className={classes.image}>
                    <img src={item.proDetail.images[0].url} alt="" />
                  </div>
                  <div className={classes.texts}>
                    <h4 className={classes.title}>{item.proDetail.title}s</h4>
                    <h4 className={classes.name}>{item.proDetail.name}s</h4>
                  </div>
                </div>
                <span>USD {item.proDetail.price}</span>
              </div>
            ))}
          </div>
          <div className={classes.BagDropDown_body_totalPrice}>
            <h3>Subtotal</h3>
            <h3>USD {new Intl.NumberFormat("en-In").format(totalPrice)}</h3>
          </div>
          <p>Your shipping costs will be calculated in the last step.</p>
          <Link to={"/bag"} onClick={() => setOnBagOpen(false)} className={classes.BagDropDown_body_checkout}>
            Checkout
          </Link>
        </div>
      </motion.div>
    </>
  );
};

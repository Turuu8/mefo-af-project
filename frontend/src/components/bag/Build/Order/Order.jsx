import React from "react";
import clx from "classnames";
import { useState } from "react";
import DropDown from "./DropDown";
import motion from "framer-motion";
import close_btn from "../../../../assets/images/close-black.svg";
import css from "../../../../assets/styles/Bag/OrderStyle.module.scss";
import arrow_down from "../../../../assets/images/arrow-down-black.svg";

const Order = () => {
  const [sizeOpen, setSizeOpen] = useState(false);
  const [quantity, setQuantity] = useState("");
  const [size, setSize] = useState("XXL");
  const quantityFuction = (number) => {
    if (number === 0 || number < 0) return;
    setQuantity(number);
  };
  return (
    <div className={css.orderSection}>
      <div className={css.orderSection__container}>
        <div className={css.orderSection__container__imgSection}>
          <img
            src="https://www.instyle.com/thmb/Q5SV4V_sMRyRw8gCbTL1kS7qVik=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/032620-jean-jackets-01-2000-4409e181297044f89514af203f462eb3.jpg"
            alt="text"
          />
          <h4>Jeans jacket</h4>
        </div>
        {/* first */}
        <div className={css.orderSection__container__documentsSection}>
          <div className={css.content}>
            <p>Black</p>{" "}
            <div className={css.sizeAndQuantity__dropdown}>
              <button
                className={css.dropdown_btn}
                onClick={() => setSizeOpen((old) => !old)}
              >
                <p>{size}</p>
                <img
                  className={clx(sizeOpen && css.rotateIcon)}
                  src={arrow_down}
                  alt="arrow down"
                />
              </button>
              <DropDown
                change={setSize}
                open={sizeOpen}
                setOpen={setSizeOpen}
              />
            </div>
            <div className={css.sizeAndQuantity__dropdown}>
              <input
                type="number"
                className={css.dropdown_btn}
                value={quantity}
                onChange={(e) => quantityFuction(e.target.value)}
              />
            </div>
            <p>USD 650.00</p>
            <button className={css.removeBtn}>Remove</button>
          </div>
        </div>
        {/* second */}
        <div className={css.orderSection__container__phoneDocumentSection}>
          <button className={css.removeIcon}>
            <img src={close_btn} alt="close" />
          </button>
          <h3>Wide leg pants</h3>
          <p>USD 650.00 | Black</p>
          <div className={css.sizeAndQuantity}>
            <div className={css.sizeAndQuantity__dropdown}>
              <button
                className={css.dropdown_btn}
                onClick={() => setSizeOpen((old) => !old)}
              >
                <p>{size}</p>
                <img src={arrow_down} alt="arrow down" />
              </button>
              <DropDown
                change={setSize}
                open={sizeOpen}
                setOpen={setSizeOpen}
              />
            </div>
            <div className={css.sizeAndQuantity__dropdown}>
              <input
                type="number"
                className={css.dropdown_btn}
                value={quantity}
                onChange={(e) => quantityFuction(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;

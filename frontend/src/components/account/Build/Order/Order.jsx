import React from "react";
import clx from "classnames";
import { motion } from "framer-motion";
import css from "../../../../assets/styles/Account/product-style.module.scss";

export const Order = () => {
  return (
    <div className={css.orderSection}>
      <div className={css.orderSection__container}>
        <div className={css.orderSection__container__imgSection}>
          <img
            src="https://www.instyle.com/thmb/Q5SV4V_sMRyRw8gCbTL1kS7qVik=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/032620-jean-jackets-01-2000-4409e181297044f89514af203f462eb3.jpg"
            alt=""
          />
          <div
            className={css.orderSection__container__imgSection__name_section}
          >
            <h4>Jeans jacket</h4>
            <h4>S &nbsp;|&nbsp; USD 650.00</h4>
          </div>
        </div>
        {/* first */}
        <div className={css.orderSection__container__documentsSection}>
          <div className={css.content}>
            <p>Fr, 30 09.2022</p>{" "}
            <div className={css.sizeAndQuantity__dropdown}>
              <p>12439923</p>
            </div>
            <div className={css.sizeAndQuantity__dropdown}>
              <button className={css.dropdown_btn}>
                <p>1</p>
              </button>
            </div>
            <p className={css.address_section}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            {/* <button>remove</button> */}
            <div className={css.state_section}>
              <div className={css.color_dot} />
              <h4>Ordered</h4>
            </div>
          </div>
        </div>
        {/* second */}
        <div className={css.orderSection__container__phoneDocumentSection}>
          <h3>Wide leg pants</h3>
          <h4>S &nbsp;|&nbsp; USD 650.00</h4>
          <p className={css.date}>Fr, 30 09.2022</p>
          <div className={css.sizeAndQuantity}>
            <div className={css.sizeAndQuantity__dropdown}>
              <button className={css.dropdown_btn}>
                <p>1</p>
              </button>
            </div>
            <div className={css.state_section}>
              <div className={css.color_dot} />
              <h4>Ordered</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

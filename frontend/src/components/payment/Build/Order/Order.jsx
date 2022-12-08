import React from "react";
import css from "../../../../assets/styles/Payment/OrderStyle.module.scss";

const Order = ({ item }) => {
  return (
    <div className={css.orderedProductSection}>
      <div className={css.orderedProductSection__imgSection}>
        <img src={item.proID.images[0].url} alt="" />
      </div>
      <div className={css.orderedProductSection__documentSection}>
        <div className={css.orderedProductSection__documentSection__content}>
          <h4>{item.proID.name}</h4>
          <p>
            {item.size} | USD {new Intl.NumberFormat("en-In").format(item.amount * item.proID.price)}
          </p>
        </div>
        <button>remove</button>
      </div>
    </div>
  );
};

export default Order;

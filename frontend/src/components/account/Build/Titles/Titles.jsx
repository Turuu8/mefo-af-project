import React from "react";
import css from "../../../../assets/styles/Account/account-style.module.scss";

export const Titles = () => {
  return (
    <div className={css.accountSection__ordersSection__titles}>
      <div className={css.accountSection__ordersSection__titles__product}>
        <h4>Products</h4>
      </div>
      <div className={css.accountSection__ordersSection__titles__title}>
        <h4>Date</h4>
        <h4>Order number</h4>
        <h4>QTY</h4>
        <h4>Address</h4>
        <h4>State</h4>
      </div>
    </div>
  );
};

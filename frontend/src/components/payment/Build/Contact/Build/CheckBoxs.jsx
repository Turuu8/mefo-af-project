import React from "react";
import clx from "classnames";
import ci from "../../../../../assets/styles/Payment/ContactStyle.module.scss";

import pocketLogo from "../../../../../assets/images/Payment/pocket.png";
import storeLogo from "../../../../../assets/images/Payment/storePay.png";
import { usePaymentContext } from "../../../../../context/paymentContext";
import creditCartLogo from "../../../../../assets/images/Payment/credit.png";

export const CheckBoxs = (props) => {
  const { setCredit, setPocket, setStorePay, credit, pocket, storePay } =
    props.chooseMethod;
  return (
    <>
      <div className={ci.importantInformation__register__chooseOrganization}>
        <div className={ci.checkBox}>
          <div
            className={clx(ci.button, credit && ci.buttonActive)}
            onClick={() => setCredit((old) => !old)}
          />
          <p>Credit card</p>
        </div>
        <img
          src={creditCartLogo}
          alt="credit card"
          className={ci.credit_logo}
        />
      </div>
      <div className={ci.importantInformation__register__chooseOrganization}>
        <div className={ci.checkBox}>
          <div
            className={clx(ci.button, pocket && ci.buttonActive)}
            onClick={() => setPocket(!pocket)}
          />
          <p>Pocket</p>
        </div>
        <img src={pocketLogo} alt="pocket" className={ci.pocketLogo} />
      </div>
      <div className={ci.importantInformation__register__chooseOrganization}>
        <div className={ci.checkBox}>
          <div
            className={clx(ci.button, storePay && ci.buttonActive)}
            onClick={() => setStorePay(!storePay)}
          />
          <p>Store pay</p>
        </div>
        <img src={storeLogo} alt="store pay" className={ci.storeLogo} />
      </div>
    </>
  );
};

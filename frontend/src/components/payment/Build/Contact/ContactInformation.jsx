import React from "react";
import clx from "classnames";
import { useState } from "react";
import { motion } from "framer-motion";
import ci from "../../../../assets/styles/Payment/ContactStyle.module.scss";

// import images *********
import { InputSection, CheckBoxs } from "./Build";
import { usePaymentContext } from "../../../../context/paymentContext";
import creditCartLogo from "../../../../assets/images/Payment/credit.png";

export const ContactInformation = (props) => {
  const { switchSections } = props;
  const [pocket, setPocket] = useState(false);
  const [credit, setCredit] = useState(false);
  const [storePay, setStorePay] = useState(false);
  const [error, setError] = useState(false);
  const chooseMethod = {
    setStorePay: setStorePay,
    setPocket: setPocket,
    setCredit: setCredit,
    pocket: pocket,
    credit: credit,
    storePay: storePay,
  };

  const { setOpenPocket } = usePaymentContext();

  const openBtn = () => {
    if (!pocket && !credit && !storePay) {
      setError(true);
      return;
    }
    pocket ? setOpenPocket(true) : setOpenPocket(false);
    setError(false);
  };
  return (
    <motion.div
      className={clx(ci.paymentSection__contactInformation)}
      initial={{
        opacity: 1,
        x: 0,
        transitionDuration: "0.1s",
        transition: { x: 0.2 },
      }}
      exit={{ x: "100%" }}
      animate={switchSections && { opacity: 1, x: "100%" }}
    >
      <div className={ci.paymentSection__contactInformation__container}>
        <h1 className={ci.title}>
          {!switchSections ? "Contact information" : "Payment method"}
        </h1>
        <div className={clx(ci.emailSection)}>
          {!switchSections ? (
            <>
              <input
                type="email"
                placeholder="Your email *"
                className={ci.emailSection__emailInput}
              />
              <div className={ci.emailSection__checkBox}>
                <input type="checkbox" />
                <p>Receive occasional newsletter</p>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>

        <div className={clx(ci.importantInformation)}>
          <h3 className={clx(ci.addressTitle, switchSections && ci.removeBtn)}>
            Shipping address
          </h3>

          <div
            className={clx(
              ci.importantInformation__register,
              !switchSections && ci.banks
            )}
          >
            {!switchSections ? (
              <>
                <>
                  <>
                    <InputSection />
                  </>
                </>
              </>
            ) : (
              <>
                <>
                  <>
                    <CheckBoxs chooseMethod={chooseMethod} />
                  </>
                </>
              </>
            )}
          </div>
          {!switchSections ? (
            <>
              <p>
                Receive occasional newsletter billing address same as shipping
                address
              </p>
              <div className={ci.importantInformation__ship__checkBox}>
                <input type="checkbox" />
                <p>Billing address same as shipping address</p>
              </div>
              <div className={ci.importantInformation__ship__checkBox}>
                <input type="checkbox" />
                <p>
                  I have read and accept the&nbsp;{" "}
                  <p className={ci.blackColorFont}>term & conditions</p>
                </p>
              </div>
            </>
          ) : (
            <div className={clx(ci.importantInformation__payBtnSection)}>
              <button
                className={ci.importantInformation__payBtnSection__payBtn}
                onClick={openBtn}
              >
                Pay now
              </button>
              <div
                className={
                  ci.importantInformation__payBtnSection__footerSection
                }
              >
                <p>Secure payment via Stripe</p>
                <img src={creditCartLogo} alt="" className={ci.credit_logo} />
              </div>
              <div
                className={clx(
                  ci.importantInformation__payBtnSection__error,
                  !error && ci.removeBtn
                )}
              >
                Choose your payment organization
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

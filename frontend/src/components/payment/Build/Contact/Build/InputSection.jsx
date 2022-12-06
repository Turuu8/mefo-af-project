import React from "react";
import arrow_down from "../../../../../assets/images/arrow-down-black.svg";
import ci from "../../../../../assets/styles/Payment/ContactStyle.module.scss";

export const InputSection = () => {
  return (
    <>
      <div className={ci.importantInformation__register__inputs}>
        <input type="text" placeholder="First name*" />
        <input type="text" placeholder="Last name*" />
      </div>
      <div className={ci.importantInformation__register__inputs}>
        <input type="text" placeholder="Phone number*" />
        <input type="text" placeholder="Postal code" />
      </div>
      <div className={ci.importantInformation__register__inputs}>
        <div className={ci.select}>
          <input
            type="text"
            className={ci.select__input}
            placeholder="Country"
          />
          <img src={arrow_down} alt="" />
        </div>
        <div className={ci.select}>
          <input type="text" className={ci.select__input} placeholder="City" />
          <img src={arrow_down} alt="" />
        </div>
      </div>
      <div className={ci.importantInformation__register__inputs}>
        <div className={ci.select}>
          <input
            type="text"
            className={ci.select__input}
            placeholder="District"
          />
          <img src={arrow_down} alt="" />
        </div>
        <div className={ci.select}>
          <input type="text" className={ci.select__input} placeholder="City" />
          <img src={arrow_down} alt="" />
        </div>
      </div>
      <div className={ci.importantInformation__register__inputs}>
        <input type="text" className={ci.addressInput} placeholder="Address" />
      </div>
      {/* <InputSection /> */}
    </>
  );
};

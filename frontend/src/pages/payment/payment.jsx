import {
  QRBox,
  Summary,
  CreditCard,
  ContactInfo,
  PaymentMethod,
} from "../../components";
import React from "react";

export const Payment = () => {
  return (
    <div>
      <ContactInfo />
      <Summary />
      <PaymentMethod />
      <QRBox />
      <CreditCard />
    </div>
  );
};

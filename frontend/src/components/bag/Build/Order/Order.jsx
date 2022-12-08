import clx from "classnames";
import { useContext, useEffect, useState } from "react";
import DropDown from "./Dropdown";
import { useBag } from "../../../../API/useBag";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import { GlobalContext } from "../../../../context/GlobalContext";
import css from "../../../../assets/styles/Bag/OrderStyle.module.scss";
import arrow_down from "../../../../assets/images/arrow-down-black.svg";

const Order = ({ item }) => {
  const {
    storedOrders: { orderInStore, setOrderInStore },
  } = useContext(GlobalContext);
  const { removeFromBag } = useBag();
  const [size, setSize] = useState(item.size);
  const [sizeOpen, setSizeOpen] = useState(false);
  const [amount, setAmount] = useState(item.amount);
  const removeOrder = () => {
    removeFromBag(item._id);
    setOrderInStore(orderInStore.filter((pro) => pro.proID?._id !== item.proID?._id));
  };
  useEffect(() => {
    setOrderInStore(orderInStore.map((order) => (order._id === item._id ? { ...order, amount, size } : order)));
  }, [amount, size, item._id]);
  const totalPrice = item.proID?.price * amount;

  return (
    <div className={css.orderSection}>
      <div className={css.orderSection__container}>
        <div className={css.orderSection__container__imgSection}>
          <img src={item.proID?.images[0].url} alt="text" />
          <h4>{item.proID?.name}</h4>
        </div>
        <div className={css.orderSection__container__documentsSection}>
          <div className={css.content}>
            <div className={css.sizeAndQuantity__dropdown}>
              <button className={css.dropdown_btn} onClick={() => setSizeOpen((old) => !old)}>
                <p>{size}</p>
                <img className={clx(sizeOpen && css.rotateIcon)} src={arrow_down} alt="arrow down" />
              </button>
              <DropDown sizes={item.proID.sizes} change={setSize} open={sizeOpen} setOpen={setSizeOpen} />
            </div>

            <div className={css.quantity}>
              <input onChange={(e) => setAmount(e.target.value)} type="text" value={amount} />
              <div className={css.arrows}>
                <BsChevronUp size={10} onClick={() => setAmount((pre) => ++pre)} />
                <BsChevronDown style={{ display: amount === 1 ? "none" : "block" }} size={10} onClick={() => setAmount((pre) => --pre)} />
              </div>
            </div>
            <p>USD {new Intl.NumberFormat("en-In").format(totalPrice)}</p>
            <button onClick={removeOrder} className={css.removeBtn}>
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;

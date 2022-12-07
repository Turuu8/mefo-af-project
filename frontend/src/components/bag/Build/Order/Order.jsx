import clx from "classnames";
import DropDown from "./Dropdown";
import { useState, useContext } from "react";
import { GlobalContext } from "../../../../context/GlobalContext";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import css from "../../../../assets/styles/Bag/OrderStyle.module.scss";
import arrow_down from "../../../../assets/images/arrow-down-black.svg";

const Order = ({ item }) => {
  const [size1, setSize1] = useState("");
  const [sizeOpen, setSizeOpen] = useState(false);
  const [quantity, setQuantity] = useState(item.amount);
  const {
    size: { size, setSize },
    qty: { amount, setAmount },
    selectedProducts: { selectedPros, setSelectedPros },
  } = useContext(GlobalContext);
  const removeOrder = () => {
    setSelectedPros(selectedPros.filter((pro) => pro.proDetail?._id !== item.proDetail?._id));
  };

  return (
    <div className={css.orderSection}>
      <div className={css.orderSection__container}>
        <div className={css.orderSection__container__imgSection}>
          <img src={item.proDetail?.images[0].url} alt="text" />
          <h4>{item.proDetail?.name}</h4>
        </div>
        <div className={css.orderSection__container__documentsSection}>
          <div className={css.content}>
            <div className={css.sizeAndQuantity__dropdown}>
              <button className={css.dropdown_btn} onClick={() => setSizeOpen((old) => !old)}>
                <p>{size}</p>
                <img className={clx(sizeOpen && css.rotateIcon)} src={arrow_down} alt="arrow down" />
              </button>
              <DropDown sizes={item.proDetail?.sizes} change={setSize} open={sizeOpen} setOpen={setSizeOpen} />
            </div>

            <div className={css.quantity}>
              <input onChange={(e) => setQuantity(e.target.value)} type="text" value={quantity} />
              <div className={css.arrows}>
                <BsChevronUp size={10} onClick={() => setQuantity((pre) => ++pre)} />
                <BsChevronDown style={{ display: quantity === 1 ? "none" : "block" }} size={10} onClick={() => setQuantity((pre) => --pre)} />
              </div>
            </div>
            <p>USD {item.proDetail?.price}</p>
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

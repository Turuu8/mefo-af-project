import React from "react";
import clx from "classnames";
import css from "../../../../assets/styles/Bag/drop-down.module.scss";

const data = ["XXL", "XL", "XXX"];

const DropDown = ({ change, open, setOpen }) => {
  const click = (size) => {
    change(size);
    setOpen(false);
  };
  return (
    <div className={clx(css.drop_down, open && css.active)}>
      {data?.map((el, idx) => (
        <button key={idx} className={css.text} onClick={() => click(el)}>
          {el}
        </button>
      ))}
    </div>
  );
};

export default DropDown;

import { useState, useLayoutEffect, useRef } from "react";
import classes from "../../assets/styles/detail.module.scss";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

export const ProductMobileImgs = ({ images }) => {
  const ref = useRef(null);
  const [width, setWidth] = useState();
  const [current, setCurrent] = useState(0);
  useLayoutEffect(() => {
    setWidth(ref.current.offsetWidth);
  }, [images]);
  return (
    <div className={classes.mobileDetailImgs}>
      <div ref={ref} className={classes.mobileDetailImgs_item}>
        {images?.map((item, id) => (
          <img style={{ transform: `translateX(-${width * current}px)`, transition:"all 0.3s ease" }} key={id} src={item.url} alt="clothes" />
        ))}
      </div>
      <div className={classes.mobileDetailImgs_indicator}>
        {images?.map((item, i) => (
          <div style={{ opacity: current === i ? 1 : 0.5 }} key={i} />
        ))}
      </div>
      <div className={classes.mobileDetailImgs_arrows}>
        <button style={{ visibility: current === 0 ? "hidden" : "visible" }} onClick={() => setCurrent((pre) => --pre)}>
          <BsChevronCompactLeft size={28} />
        </button>
        <button style={{ visibility: current === images?.length - 1 ? "hidden" : "visible" }} onClick={() => setCurrent((pre) => ++pre)}>
          <BsChevronCompactRight size={28} />
        </button>
      </div>
    </div>
  );
};

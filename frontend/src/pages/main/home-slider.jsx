import { useEffect, useState } from "react";
import { homeImgArr } from "../../utils/constants";
import classes from "../../assets/styles/home.module.scss";

export const HomeSlide = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const MyInterval = setTimeout(() => {
      if (count === homeImgArr.length - 1) {
        setCount(0);
      } else {
        setCount((prev) => prev + 1);
      }
    }, 2000);
    return () => {
      clearTimeout(MyInterval);
    };
  }, [count]);
  return (
    <div>
      <div className={classes.home_img}>
        {homeImgArr.map((item, id) => (
          <img
            key={id}
            src={item}
            alt="men's clothes"
            className={classes.home_img_item}
            style={{ opacity: count === id ? 1 : 0, transitionDuration: "0.4s" }}
          />
        ))}
      </div>
      <div className={classes.img_indicator}>
        {homeImgArr.map((item, id) => (
          <span
            key={id}
            style={{
              width: "40px",
              padding: "1px 0",
              backgroundColor: "black",
              transitionDuration: "0.4s",
              opacity: count === id ? "1" : "0.3",
            }}
          />
        ))}
      </div>
    </div>
  );
};

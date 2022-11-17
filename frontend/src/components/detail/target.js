import { Data } from "../../components/data/productData";
import { forwardRef, useImperativeHandle, useRef } from "react";
import classes from "../../assets/styles/home.module.scss";
export const Target = forwardRef((props, ref) => {
  const div1 = useRef(null);
  const div2 = useRef(null);
  const div3 = useRef(null);
  const div4 = useRef(null);
  const div5 = useRef(null);
  useImperativeHandle(ref, () => ({
    div1,
    div2,
    div3,
    div4,
    div5,
  }));
  let homeData = [];
  Data.forEach((el) =>{
    if (el.homepage === "yes"){
      homeData.push(el);
    }
  })
  const specialData = homeData.slice(-5);
  if (Data.length < 6) {
    specialData.shift();
  }
  specialData[0].ref = div1;
  specialData[1].ref = div2;
  specialData[2].ref = div3;
  specialData[3].ref = div4;
  specialData[4].ref = div5;
  return (
    <>
      <div ref={div1}>
        <img
          src={specialData[0].images}
          className={classes.home_scrollImage}
          alt="1"
        />
      </div>
      <div ref={div2}>
        <img
          src={specialData[1].images}
          className={classes.home_scrollImage}
          alt="2"
        />
      </div>
      <div ref={div3}>
        <img
          src={specialData[2].images}
          className={classes.home_scrollImage}
          alt="3"
        />
      </div>
      <div ref={div4}>
        <img
          src={specialData[3].images}
          className={classes.home_scrollImage}
          alt="4"
        />
      </div>
      <div ref={div5}>
        <img
          src={specialData[4].images}
          className={classes.home_scrollImage}
          alt="5"
        />
      </div>
    </>
  );
});

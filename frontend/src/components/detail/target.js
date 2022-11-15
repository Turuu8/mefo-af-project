
import image6 from "../../assets/images/clothes men/6.png";
import image10 from "../../assets/images/clothes men/10.png";
import image9 from "../../assets/images/clothes men/9.png";
import image7 from "../../assets/images/clothes men/7.png";
import image5 from "../../assets/images/clothes men/5.png"
import { forwardRef, useImperativeHandle, useRef } from "react";
import classes from "../../assets/styles/home.module.scss"
export const Target = forwardRef((props, ref) => {
  const div1 = useRef(null);
  // const div2 = useRef(null);
  // const div3 = useRef(null);
  // const div4 = useRef(null);
  // const div5 = useRef(null);
  useImperativeHandle(ref, () => ({
    div1,
    // div2,
    // div3,
    // div4,
    // div5,
  }));
  return (
    <>
      <div ref={div1}>
          <img src={image6} className={classes.home_img} alt="1"/>
      </div>
      {/* <div ref={div2}>
          <img src={image10} className={classes.home_img} alt ="2"/>
      </div>
      <div ref={div3}>
          <img src={image9} className={classes.home_img} alt ="3"/>
      </div>
      <div ref={div4}>
          <img src={image7} className={classes.home_img} alt ="4"/>
      </div>
      <div ref={div4}>
          <img src={image5} className={classes.home_img} alt ="5"/>
      </div> */}
    </>
  );
});
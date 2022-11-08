import part1 from "../../assets/images/301610468_1226762367869520_4778822227424414284_n.jpg";
import part2 from "../../assets/images/301676391_760146185313384_7155529653519959105_n.jpg";
import part3 from "../../assets/images/301815609_782199779572010_88340814944985780_n.jpg";
import part4 from "../../assets/images/302495965_171425098737929_6807918357025679645_n.jpg";
import { forwardRef, useImperativeHandle, useRef } from "react";
import classes from "../../assets/styles/home.module.scss"
export const Target = forwardRef((props, ref) => {
  const div1 = useRef(null);
  const div2 = useRef(null);
  const div3 = useRef(null);
  const div4 = useRef(null);
  useImperativeHandle(ref, () => ({
    div1,
    div2,
    div3,
    div4,
  }));
  return (
    <>
      <div ref={div1}>
          <img src={part4} className={classes.home_img} alt="1"/>
      </div>
      <div ref={div2}>
          <img src={part1} className={classes.home_img} alt ="2"/>
      </div>
      <div ref={div3}>
          <img src={part2} className={classes.home_img} alt ="2"/>
      </div>
      <div ref={div4}>
          <img src={part3} className={classes.home_img} alt ="2"/>
      </div>
    </>
  );
});
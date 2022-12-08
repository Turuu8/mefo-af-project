import classes from "../../assets/styles/home.module.scss";
import { forwardRef, useImperativeHandle, useRef } from "react";
import { specialImges, specialProductDetail } from "../../utils/constants";

export const TargetItems = forwardRef((props, ref) => {
  const img1 = useRef(null);
  const img2 = useRef(null);
  const img3 = useRef(null);
  const img4 = useRef(null);
  const img5 = useRef(null);
  const container = useRef(null);
  const shadow = useRef(null);
  const mainimg = useRef(null);
  const img = useRef(null);
  useImperativeHandle(ref, () => ({
    img1,
    img2,
    img3,
    img4,
    img5,
    shadow,
    mainimg,
    img,
  }));
  const div = [img1, img2, img3, img4, img5];
  return (
    <>
      <div id="fiveImg" ref={container} className={classes.home_scroll_animation_fiveImg}>
        {specialImges.map((el, i) => (
          <div ref={div[i]} key={el.url}>
            <img ref={div[2] === div[i] ? mainimg : img} src={el.url} alt="img" />
          </div>
        ))}
      </div>
      <div ref={shadow} className={classes.home_shadow}>
        {specialProductDetail.map((el, i) => (
          <span key={i} id="detailText" className={classes.home_shadow_detail}>
            <h2>{el.descriptionName}</h2>
            <span>
              <p>{el.detail[0]}</p>
              <p>{el.detail[1]}</p>
              <p>{el.detail[2]}</p>
            </span>
          </span>
        ))}
      </div>
    </>
  );
});

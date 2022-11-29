import classes from "../../assets/styles/home.module.scss";
import { forwardRef, useImperativeHandle, useRef } from "react";
import men1 from "../../assets/images/mepo-image-men1.jpg";
import men2 from "../../assets/images/mepo-image-men2.jpg";
import men3 from "../../assets/images/mepo-image-men6.jpg";
import men4 from "../../assets/images/mepo-image-men3.jpg";
import men5 from "../../assets/images/mepo-image-men4.jpg";

export const TargetItems = forwardRef((props, ref) => {
  const img1 = useRef(null);
  const img2 = useRef(null);
  const img3 = useRef(null);
  const img4 = useRef(null);
  const img5 = useRef(null);
  const mainImg = useRef(null);
  const container = useRef(null);
  useImperativeHandle(ref, () => ({
    img1,
    img2,
    img3,
    img4,
    img5,
    mainImg,
    container,
  }));
  const div = [img1, img2, img3, img4, img5];
  return (
    <div ref={container} className={classes.home_scroll_animation_container}>
      <div id="fiveImg" className={classes.home_scroll_animation_container_fiveImg}>
        {imges.map((el, i) => (
          <div key={el.url}>
            <img
              id={div[3] === div[i] ? "mainImg" : "mainImg"}
              ref={div[i]}
              src={el.url}
              alt="img"
            />
          </div>
        ))}
      </div>
    </div>
  );
});

const imges = [{ url: men1 }, { url: men2 }, { url: men3 }, { url: men4 }, { url: men5 }];

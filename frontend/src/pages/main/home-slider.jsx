import classes from "../../assets/styles/home.module.scss";
import {  useEffect, useState } from "react";

export const HomeSlide = (slides) => {
    console.log (slides, "slaid")
    const [count, setCount] = useState(0);
    // specialData.map ((el, index) =>{
    //  setImage((f)=>[...f, el.images])
    // })
  
    useEffect(() => {
      const MyInterval = setInterval(
        () => {
          if (count === slides.slides.length - 3) {
            setCount(0);
          } else {
            setCount((prev) => prev + 1);
          }
        },
  
        2000
      );
  
      return () => {
        clearInterval(MyInterval);
      };
    }, []);
  return (
    <>
      <div
        className={classes.home_img}
        style={{ backgroundImage: `url(${slides.slides[count].images})` }}
      ></div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "10px",
        }}
      >
        ------
      </div>
    </>
  );
};

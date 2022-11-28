import classes from "../../assets/styles/home.module.scss";
import { HomeScroll } from "./home-scroll";
import { HomeAnimation } from "./home-animation";
import { HomeSlide } from "./home-slider";
import { RouterAnimation } from "../../utils/animationVariants";
import { motion } from "framer-motion";

export const Home = () => {
  return (
    <>
      {/* <motion.div
      variants={RouterAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      transition="transition"
      className={classes.home}
    > */}
      <div className={classes.home_product_promo_text}>
        <h2 className={classes.home_product_promo_text_top}>
          A New Look at Fashion of the MEPO AF
        </h2>
        <h3 className={classes.home_product_promo_text_bottom}>
          EXCLUSIVE COLLECTIONS OF POPULAR BRANDS ABOUT HUMAN CULTURE
        </h3>
      </div>
      <HomeSlide />
      {/* <div className={classes.home_text2}> Our collections</div> */}
      {/* <div id="animation" className={classes.home_scroll}>
        <HomeAnimation />
      </div> */}
      <div id="gridSrcoll" className={classes.home_grid}>
        {/* <HomeScroll scroll= {specialData} /> */}
      </div>
      {/* </motion.div> */}
    </>
  );
};

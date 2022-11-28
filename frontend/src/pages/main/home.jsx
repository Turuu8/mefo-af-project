import { motion } from "framer-motion";
import { HomeSlide } from "./home-slider";
import { HomeScroll } from "./home-scroll";
import { HomeAnimation } from "./home-animation";
import classes from "../../assets/styles/home.module.scss";
import { RouterAnimation } from "../../utils/animationVariants";

export const Home = () => {
  return (
    <motion.div variants={RouterAnimation} initial="initial" animate="animate" exit="exit" transition="transition" className={classes.home}>
      <h2 className={classes.home_text1}>A New Look at Fashion of the MEPO AF</h2>
      <p className={classes.home_text2}>EXCLUSIVE COLLECTIONS OF POPULAR BRANDS ABOUT HUMAN CULTURE</p>
      <HomeSlide />
      <div className={classes.home_text2}> Our collections</div>
      <div id="animation" className={classes.home_scroll}>
        {/* <HomeAnimation /> */}
      </div>
      <div id="gridSrcoll" className={classes.home_grid}>
        {/* <HomeScroll scroll= {specialData} /> */}
      </div>
    </motion.div>
  );
};

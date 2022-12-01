import classes from "../../assets/styles/home.module.scss";
import { HomeScrollAnimation } from "./home-scroll_animation";
import { HomeSlide } from "./home-slider";
import { motion } from "framer-motion";
import { RouterAnimation } from "../../utils/animationVariants";

export const Home = () => {
  return (
    <>
      <motion.div
        variants={RouterAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        transition="transition"
        className={classes.home}
      >
        <section className={classes.home_product_promo_text}>
          <h2 className={classes.home_product_promo_text_top}>A New Look at Fashion of the MEPO AF</h2>
          <h3 className={classes.home_product_promo_text_bottom}>
            EXCLUSIVE COLLECTIONS OF POPULAR BRANDS ABOUT HUMAN CULTURE
          </h3>
        </section>
        <HomeSlide />
        <h1 className={classes.home_collections_text}>Our collections</h1>
        <section id="animation">
          <HomeScrollAnimation />
          {/* <HomeAnimation /> */}
          {/* <Controller>
            <Scene
              duration={1000}
              pin={true}
              indicators={true}
              triggerHook="onLeave"
              triggerElement="#animation"
            >
              {(progress) => {
                <div
                  style={{
                    width: "100%",
                    height: "100vh",
                    backgroundColor: "black",
                  }}
                ></div>;
              }}
            </Scene>
          </Controller> */}
        </section>
        <div
          style={{
            width: "100%",
            height: "100vh",
            backgroundColor: "black",
          }}
        ></div>
      </motion.div>
    </>
  );
};

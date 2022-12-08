import classes from "../../assets/styles/home.module.scss";
import { HomeScrollAnimation } from "./home-scroll_animation";
import { HomeSlide } from "./home-slider";
import { RouterAnimation } from "../../utils/animationVariants";
import { motion } from "framer-motion";
import { useState, useContext } from "react";
import { DiffencedScroll } from "./DiffencedScroll";
import arrow from "../../assets/images/arrow-right-white.svg";
import gif from "../../assets/images/gif.gif";
import threed from "../../assets/images/3d.gif";
import { GlobalContext } from "./../../context/GlobalContext";
import { ArtistItems } from "../../utils/constants";

export const Home = () => {
  const [resize] = useState(window.innerWidth);
  const {
    language: { lang },
  } = useContext(GlobalContext);
  return (
    <>
      <motion.div variants={RouterAnimation} initial="initial" animate="animate" exit="exit" transition="transition" className={classes.home}>
        <section className={classes.home_product_promo_text}>
          <h2 className={classes.home_product_promo_text_top}>{lang === "en" ? "A New Look at Fashion of the MEPO AF" : "Мепо АФ загварын шинэ өнгө төрх"}</h2>
          <h3 className={classes.home_product_promo_text_bottom}>EXCLUSIVE COLLECTIONS OF POPULAR BRANDS ABOUT HUMAN CULTURE</h3>
        </section>
        <HomeSlide />
        <h1 className={classes.home_collections_text}>Our collections</h1>
        <section id="animation" className={classes.home_scroll_animation}>
          <HomeScrollAnimation resize={resize} />
        </section>
        <DiffencedScroll resize={resize} />

        {/* <<<<<    NFT COLLECTION    >>>>> */}
        <section className={classes.home_nftCollection}>
          <div>
            <h1>NFT collection</h1>
            <div className={classes.home_nftCollection_container}>
              <div className={classes.home_nftCollection_container_firstColumn}>
                {/* <iframe
                  title="video"
                  src="https://im.ezgif.com/tmp/ezgif-1-c253cb91c8.gif"
                  frameborder="0"
                  width="1000"
                  height="900px"
                ></iframe> */}
                <img src={gif} alt="" />
              </div>
              <div className={classes.home_nftCollection_container_secondColumn}>
                <img src={threed} alt="" />
                <h3>
                  <p>You can make your own lookbook with mepo af. We hope you enjoy it. You can make your own lookbook with mepo af.</p>
                  <button>
                    <span>
                      More about<span>&nbsp; NFT </span>
                      <img src={arrow} alt="" />
                    </span>
                  </button>
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* <<<<<    ARTISTS   >>>>> */}
        <section className={classes.home_artists}>
          <h1>Artists</h1>
          <div className={classes.home_artists_container}>
            {ArtistItems.map((el) => (
              <div key={el.url} style={{ overflow: "hidden" }}>
                <p>{el.type}</p>
                <h2>{el.name}</h2>
                <div className={classes.home_artists_container_imgs}>
                  <img src={el.url} alt="" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </motion.div>
    </>
  );
};

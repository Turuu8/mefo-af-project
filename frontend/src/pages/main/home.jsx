import classes from "../../assets/styles/home.module.scss";
import { HomeScrollAnimation } from "./home-scroll_animation";
import { HomeSlide } from "./home-slider";
import { RouterAnimation } from "../../utils/animationVariants";
import { motion } from "framer-motion";
import { useState } from "react";
import { DiffencedScroll } from "./DiffencedScroll";
import khangal from "../../assets/images/khangal.png";
import riaaan from "../../assets/images/riaaan.png";
import kris from "../../assets/images/kris.png";
import arrow from "../../assets/images/arrow-right-white.svg";
import gif from "../../assets/images/gif.gif";
import { specialProductDetail } from "../../utils/constants";

export const Home = () => {
  const [resize] = useState(window.innerWidth);
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
          <h2 className={classes.home_product_promo_text_top}>
            A New Look at Fashion of the MEPO AF
          </h2>
          <h3 className={classes.home_product_promo_text_bottom}>
            EXCLUSIVE COLLECTIONS OF POPULAR BRANDS ABOUT HUMAN CULTURE
          </h3>
        </section>
        <HomeSlide />
        <h1 className={classes.home_collections_text}>Our collections</h1>
        <section id="animation" className={classes.home_scroll_animation}>
          {/* <HomeScrollAnimation resize={resize} /> */}
        </section>
        <div
          style={{
            width: "100%",
            height: "100vh",
          }}
        ></div>
        <div className={classes.home_shadow}>
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
        <DiffencedScroll />

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
                <img src={gif} alt="" />
                <h3>
                  <p>
                    You can make your own lookbook with mepo af. We hope you enjoy it. You can make
                    your own lookbook with mepo af.
                  </p>
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

const ArtistItems = [
  {
    url: khangal,
    type: "Fashion designer",
    name: "Khangal .T",
  },
  {
    url: riaaan,
    type: "Fashion designer",
    name: "Riaann .N",
  },
  {
    url: kris,
    type: "Fashion designer",
    name: "Kris PInkstart",
  },
];

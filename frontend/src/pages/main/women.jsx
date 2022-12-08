import { motion } from "framer-motion";
import { useEffect, useContext } from "react";
import { useProduct } from "../../API/useProduct";
import { useInView } from "react-intersection-observer";
import { GlobalContext } from "../../context/GlobalContext";
import classes from "../../assets/styles/product.module.scss";
import { RouterAnimation } from "../../utils/animationVariants";
import RightArrow from "../../assets/images/arrow-right-grey.svg";
import { ProductCart } from "../../components/product/ProductCart";

const Women = () => {
  const { getWomenProducts } = useProduct();
  const { ref, inView } = useInView({ threshold: 0.4 });
  const {
    limit: { limit, setLimit },
    womenPro: { womenProducts },
  } = useContext(GlobalContext);
  useEffect(() => {
    getWomenProducts(limit);
    // eslint-disable-next-line
  }, [limit]);

  return (
    <motion.div variants={RouterAnimation} initial="initial" animate="animate" exit="exit" transition="transition" className={classes.container}>
      <div className={classes.product_header}>
        <div ref={ref} className={classes.product_header_black_back}>
          <img src="https://res.cloudinary.com/mustnest/image/upload/v1669799180/Mepo_Af/men_s.headline.background.img.responsive_hloavd.png" alt="proHeader" />
          <motion.div initial={{ x: "-100%" }} className={classes.product_header_black_back_ground} animate={{ x: 0, transition: { type: "spring", duration: 2 } }} />
        </div>
        {inView && (
          <motion.div initial={{ x: "-100px", opacity: 0 }} className={classes.product_header_text_white} animate={{ x: 0, opacity: 1, transition: { delay: 0.5, duration: 0.5 } }}>
            <p>
              WE COLLECT <strong>BEAUTIFUL CLASSIC MEN'S</strong>
            </p>
            <p>DESIGN ARTIFACTS FROM THE 20TH & 21ST CENTURY</p>
          </motion.div>
        )}
      </div>
      <div className={classes.product_body}>
        {womenProducts.products?.map((item) => (
          <ProductCart key={item._id} type={"product"} item={item} />
        ))}
      </div>
      {womenProducts.length !== womenProducts.products?.length && (
        <button onClick={() => setLimit((pre) => ++pre)} className={classes.see_more}>
          See more <img src={RightArrow} alt="" />
        </button>
      )}
    </motion.div>
  );
};

export default Women;

import { motion } from "framer-motion";
import { useEffect, useContext } from "react";
import { useProduct } from "../../API/useProduct";
import { useInView } from "react-intersection-observer";
import { GlobalContext } from "../../context/GlobalContext";
import classes from "../../assets/styles/product.module.scss";
import { RouterAnimation } from "../../utils/animationVariants";
import RightArrow from "../../assets/images/arrow-right-grey.svg";
import { ProductCart } from "../../components/product/ProductCart";

const Men = () => {
  const { getMenProducts } = useProduct();
  const { ref, inView } = useInView({ threshold: 0.4 });
  const {
    menPro: { menProducts },
    limit: { limit, setLimit },
  } = useContext(GlobalContext);
  useEffect(() => {
    getMenProducts(limit);
    // eslint-disable-next-line
  }, [limit]);

  return (
    <motion.div variants={RouterAnimation} initial="initial" animate="animate" exit="exit" transition="transition" className={classes.container}>
      <div className={classes.product_header}>
        <div ref={ref} className={classes.product_header_backImg}>
          <img src="https://res.cloudinary.com/mustnest/image/upload/v1669799180/Mepo_Af/men_s.headline.background.img.responsive_hloavd.png" alt="proHeader" />
        </div>
        <div className={classes.product_header_logo}>
          <img src="https://res.cloudinary.com/mustnest/image/upload/v1669800231/Mepo_Af/black_1_tugeor.png" alt="" />
        </div>
        {inView && (
          <motion.div initial={{ x: "-100px", opacity: 0 }} className={classes.product_header_text} animate={{ x: 0, opacity: 1, transition: { delay: 0.5, duration: 0.5 } }}>
            <p>
              WE COLLECT <strong>BEAUTIFUL CLASSIC MEN'S</strong>
            </p>
            <p>DESIGN ARTIFACTS FROM THE 20TH & 21ST CENTURY</p>
          </motion.div>
        )}
      </div>
      <div className={classes.product_body}>
        {menProducts.products?.map((item) => (
          <ProductCart key={item._id} type={"product"} item={item} />
        ))}
      </div>
      {menProducts.length !== menProducts.products?.length && (
        <button onClick={() => setLimit((pre) => ++pre)} className={classes.see_more}>
          See more <img src={RightArrow} alt="" />
        </button>
      )}
    </motion.div>
  );
};

export default Men;

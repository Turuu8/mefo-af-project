import { motion } from 'framer-motion';
import { RouterAnimation } from '../../utils/animationVariants';
import { useEffect, useState } from 'react';
import { getAPI } from '../../utils/fetchingProduct';
import { ProductCart } from '../../components/product/ProductCart';

const Men = () => {
  const [product, setProduct] = useState([]);
  const fetchProduct = async () => {
    try {
      const res = await getAPI('/product');
      setProduct(res.data.products);
    } catch (error) {}
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div>
      <motion.div
        variants={RouterAnimation}
        initial='initial'
        animate='animate'
        exit='exit'
        transition='transition'
        style={{ position: 'relative', top: 100 }}
      ></motion.div>
      <div>
        {product.map((item, id) =>
          <ProductCart item={item} type={'product'}/>
        )}
      </div>
    </div>
  );
};

export default Men;

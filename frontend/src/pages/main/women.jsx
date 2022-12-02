import { motion } from 'framer-motion';
import { RouterAnimation } from '../../utils/animationVariants';
import { useEffect, useState } from 'react';
import { getAPI } from '../../utils/fetchingProduct';

const Women = () => {
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
          item.gender === 'Women' ? (
            <div key={id}>
              <img src={item.images[0].url} alt='' />
              <span>{item.title}</span>
              <p>{item.description}</p>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Women;

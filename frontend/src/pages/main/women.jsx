
import { motion } from 'framer-motion';
import { RouterAnimation } from '../../utils/animationVariants';
import { useEffect, useState } from 'react';
import { getAPI } from '../../utils/fetchingProduct';


const Women = () => {

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
    <div>Women</div>
  )
}

export default Women
import { motion } from "framer-motion";
import { RouterAnimation } from "../../utils/animationVariants";

const Men = () => {
  return (
    <motion.div
      variants={RouterAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      transition="transition"
      style={{ position: "absolute", top: 100 }}
    >
      Men
    </motion.div>
  );
};

export default Men;

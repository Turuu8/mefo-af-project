import { motion } from "framer-motion";
import { RouterAnimation } from "../../utils/animationVariants";

const Women = () => {
  return (
    <motion.div
      variants={RouterAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      transition="transition"
      style={{ position: "absolute", top: 100 }}
    >
      Women
    </motion.div>
  );
};

export default Women;

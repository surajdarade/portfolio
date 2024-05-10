import { motion } from "framer-motion";
import { ComponentType, JSXElementConstructor } from 'react';
const MotionWrap = (
  Component: ComponentType<unknown> | JSXElementConstructor<unknown>,
  classNames: string
) =>
  function HOC() {
    return (
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className={`${classNames} app__flex`}
      >
        <Component />
      </motion.div>
    );
  };

export default MotionWrap;

import { motion } from "framer-motion";
import { FiChevronRight, fiChevronLeft, FiChevronLeft } from "react-icons/fi";
import { styles } from "./movingTextStyle";

const movingTest = () => {
  const textData = [
    "Content Moderation",
    "Content Moderation",
    "Content Moderation",
  ];
  const list = { hidden: { opacity: 0 } };
  return (
    <div className="texts-container">
      {textData.map((item, index) => {
        return (
          <div className="text1-container">
            <motion.h1
              animate={
                index % 2 !== 0 ? { x: [1700, -500] } : { x: [-500, 1700] }
              }
              transition={{ duration: 7 }}
              style={styles.h1}
            >
              {item}
              <FiChevronRight />
            </motion.h1>
            <motion.hr
              animate="hidden"
              variants={list}
              transition={{ duration: 7 }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default movingTest;

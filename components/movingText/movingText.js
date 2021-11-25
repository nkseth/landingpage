import { motion } from "framer-motion";
import Phone from "../phone/phone";
import Timeline from "../timeline/timeline";
import { FiChevronRight, fiChevronLeft, FiChevronLeft } from "react-icons/fi";
import { styles } from "./movingTextStyle";

const movingText = () => {
  const textData = [
    "Content Moderation",
    "Content Moderation",
    "Content Moderation",
  ];
  const list = { hidden: { opacity: 0 } };
  return (
    <div style={styles.text}>
      <div className="texts-container">
        {textData.map((item, index) => {
          return (
            <div key={index} className="text1-container">
              <motion.h1
                animate={
                  index % 2 !== 0 ? { x: [1700, -1200] } : { x: [-1200, 1700] }
                }
                initial={index % 2 !== 0 ? { x: 1700 } : { x: -1200 }}
                transition={{ duration: 5 }}
                style={styles.h1}
              >
                {item}
                <FiChevronRight />
              </motion.h1>
              {index * 2 == 4 ? null : (
                <motion.hr
                  animate="hidden"
                  variants={list}
                  transition={{ duration: 6 }}
                  style={{
                    width: "100rem",
                    backgroundColor: "grey",
                    border: "1px solid grey",
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
      <div className="phone-container" style={styles.phone}>
        <Phone />
      </div>
      <div className="phone-container" style={styles.Timeline}>
        {" "}
        <Timeline />
      </div>
    </div>
  );
};

export default movingText;

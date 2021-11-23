import { motion } from "framer-motion";
import { styles } from "./phonestyles";
import ReactPlayer from "react-player";

const phone = () => {
  return (
    <motion.div
      animate={{ y: 0 }}
      initial={{ y: -1500 }}
      transition={{ delay: 4, duration: 1 }}
      className="phone-component"
      style={styles.phone}
    >
      <div className="phone-bg" style={styles.phoneBg}>
        <div className="phone-holder" style={styles.holder}>
          <ReactPlayer
            height="510px"
            url="./video.mp4"
            playing={true}
            autoplay={true}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default phone;

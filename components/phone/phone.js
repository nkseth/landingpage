import { styles } from "./phonestyles";

const phone = () => {
  return (
    <div className="phone-component" style={styles.phone}>
      <div className="phone-bg" style={styles.phoneBg}>
        <div className="phone-holder" style={styles.holder}>
          {" "}
          <iframe
            width="300"
            height="500"
            src="./video.mp4?autoplay=1"
            title="YouTube video player"
            frameborder="0"
            allow="autoplay"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default phone;

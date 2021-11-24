import { styles } from "./navbarstyles";
import Image from "next/image";
const navbar = () => {
  return (
    <div className="navbar" style={styles.div}>
      <Image src="/Group.png" alt="logo" width="60" height="20" />
    </div>
  );
};

export default navbar;

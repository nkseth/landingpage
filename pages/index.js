import Navbar from "../components/navbar/navbar";
import Animatedtext from "../components/movingText/movingText";
import Footer from "../components/footer/footer";
import SupPlatforms from "../components/supPlatforms/supPlatforms";

const index = () => {
  return (
    <div>
      <Navbar />
      <Animatedtext />
      <SupPlatforms />
      <Footer />
    </div>
  );
};

export default index;

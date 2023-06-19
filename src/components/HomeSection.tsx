import Slider from "./Slider";
import Social from "./Social";
import WaComponent from "./WaComponent";
import { ObserverFunction } from "../utils/ChangeColor";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    ObserverFunction("#home");
  }, []);

  return (
    <section className="relative h-full overflow-hidden" id="home" data-color="white">
      <Social />
      <WaComponent />

      <div className="absolute w-full h-full bg-black bg-opacity-40 z-10"></div>
      <div className="h-screen">
        <Slider autoplay={true} arrows={false} />
      </div>
    </section>
  );
};

export default Home;

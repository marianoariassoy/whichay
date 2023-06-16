import Slider from "./Slider";
import Social from "./Social";
import WaComponent from "./WaComponent";

const Home = () => {
  return (
    <section className="relative h-screen overflow-hidden" id="home">
      <Social />
      <WaComponent />

      <div className="absolute w-full h-full bg-black bg-opacity-40 z-10"></div>
      <div className="h-screen">
        <Slider />
      </div>
    </section>
  );
};

export default Home;

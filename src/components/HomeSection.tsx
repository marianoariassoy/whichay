import Slider from "./Slider";
import { Whatsapp } from "../icons/MySvgs";
import Social from "./Social";

const Home = () => {
  return (
    <section className="h-screen overflow-hidden relative" id="home">
      <Social />

      <a href="https://wa.me/#" target="_blank" rel="noreferrer" className="fixed z-20 bottom-8 right-8 drop-shadow text-primary">
        <Whatsapp />
      </a>

      <div className="absolute w-full h-full bg-black bg-opacity-30 z-10"></div>
      <Slider />
    </section>
  );
};

export default Home;

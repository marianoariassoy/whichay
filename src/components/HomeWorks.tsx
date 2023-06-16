import Slider from "./Slider";
import WaComponent from "./WaComponent";

const HomeWorks = () => {
  return (
    <section className="relative h-screen">
      <WaComponent />

      <div className="absolute w-full bottom-0 z-20 text-white">
        <div className="container px-14 py-24 m-auto max-w-7xl">
          <h1 className="font-bold text-4xl md:text-6xl mb-2">Zona Franca</h1>
          <h2 className="font-medium text-xl md:text-3xl mb-8">Perico - Jujuy</h2>
        </div>
      </div>

      <div className="absolute w-full h-full bg-black bg-opacity-40 z-10"></div>
      <Slider />
    </section>
  );
};

export default HomeWorks;

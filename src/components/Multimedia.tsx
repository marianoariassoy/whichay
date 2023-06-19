import { useEffect } from "react";
import Videos from "./Videos";
import Slider from "./Slider";
import { ObserverFunction } from "../utils/ChangeColor";

const Multimedia = () => {
  useEffect(() => {
    ObserverFunction("#fotos");
    ObserverFunction("#gallery");
  }, []);

  return (
    <>
      <section id="fotos" data-color="#e64b1c">
        <div className="container px-14 pb-16 pt-32 items-center m-auto max-w-7xl">
          <Videos />
          <h1 className="text-4xl md:text-6xl font-bold text-primary mt-24">Fotos</h1>
        </div>
      </section>
      <section className="relative h-screen" id="gallery" data-color="white">
        <Slider autoplay={false} arrows={true} />
      </section>
    </>
  );
};

export default Multimedia;

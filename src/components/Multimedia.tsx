import { useEffect } from "react";
import Videos from "./Videos";
import ChangeHeaderColor from "../utils/ChangeHeaderColor";
import Slider from "./Slider";

const Multimedia = () => {
  useEffect(() => {
    ChangeHeaderColor("#multimedia");
  }, []);

  return (
    <>
      <section id="multimedia">
        <div className="container px-14 pb-16 pt-32 items-center m-auto max-w-7xl">
          <Videos />
          <h1 className="text-4xl md:text-6xl font-bold text-primary mt-24">Fotos</h1>
        </div>
      </section>
      <section className="relative h-screen" id="gallery">
        <Slider autoplay={false} arrows={true} />
      </section>
    </>
  );
};

export default Multimedia;

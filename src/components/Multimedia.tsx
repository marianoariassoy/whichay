import { useEffect } from "react";
import Galery from "./Galery";
import Videos from "./Videos";
import ChangeHeaderColor from "../utils/ChangeHeaderColor";

const Multimedia = () => {
  useEffect(() => {
    ChangeHeaderColor("#multimedia");
  }, []);

  return (
    <>
      <section id="multimedia">
        <div className="container px-14 pb-24 pt-32 items-center m-auto max-w-7xl">
          <Videos />
          <h1 className="text-5xl md:text-6xl font-bold text-primary mt-24">Fotos</h1>
        </div>
      </section>
      <section className="relative h-screen" id="gallery">
        <Galery />
      </section>
    </>
  );
};

export default Multimedia;

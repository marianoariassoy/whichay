import { useEffect } from "react";
import Videos from "./Videos";
import Slider from "./Slider";
import useFetch from "../hooks/useFetch";
import { changeColor } from "../utils/headerColor";

type DataProps = {
  data: null | Array<{ id: number; image: string }>;
  loading: boolean;
};

const Multimedia = () => {
  const { data, loading } = useFetch(`/fotos`) as DataProps;

  useEffect(() => {
    changeColor("#multimedia");
  }, []);

  return (
    <>
      <section id="multimedia">
        <div className="container px-14 pb-16 items-center m-auto max-w-7xl">
          <Videos />
          <h1 className="text-4xl md:text-6xl font-bold text-primary pt-24">Fotos</h1>
        </div>
      </section>
      <section className="relative h-screen" id="gallery">
        {!loading && <Slider data={data} autoplay={false} arrows={true} />}
      </section>
    </>
  );
};

export default Multimedia;

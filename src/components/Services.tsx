import { useDataContext } from "../context/useDataContext";
import ServicesItem from "./ServicesItem";
import Loader from "./Loader";
import useFetch from "../hooks/useFetch";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Services = () => {
  const { lan } = useDataContext();
  const { data, loading } = useFetch(`/servicios/${lan}`);

  if (!loading) {
    ScrollTrigger.refresh(true);
  }

  return (
    <section className="bg-primary" id="services">
      <div className="container px-14 pb-24 pt-32 m-auto max-w-7xl text-white text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-12 md:mb-24">{lan === "es" ? "Servicios" : "Services"}</h1>
        <div className="flex flex-wrap gap-8 md:gap-14 justify-evenly items-start">{loading ? <Loader /> : data.map((item, index) => <ServicesItem item={item} key={index} />)}</div>
      </div>
    </section>
  );
};

export default Services;

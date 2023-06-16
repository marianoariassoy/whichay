import { dataServices } from "../data/Data";
import { useDataContext } from "../context/useDataContext";
import ServicesItem from "./ServicesItem";

const Services = () => {
  const { lan } = useDataContext();

  return (
    <section className="bg-primary" id="services">
      <div className="container px-14 pb-24 pt-32 m-auto max-w-7xl text-white text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-24">{lan === "es" ? "Servicios" : "Services"}</h1>
        <div className="flex flex-wrap gap-4 md:gap-14 justify-evenly items-start">
          {dataServices.map((item, index) => (
            <ServicesItem item={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

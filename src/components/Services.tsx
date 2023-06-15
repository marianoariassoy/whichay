import { dataServices } from "../data/Data";
import { useDataContext } from "../context/useDataContext";

const Services = () => {
  const { lan } = useDataContext();

  return (
    <section className="bg-primary" id="services">
      <div className="container px-14 py-24 m-auto max-w-7xl text-white text-center">
        <h1 className="text-6xl font-bold mb-24">{lan === "es" ? "Servicios" : "Services"}</h1>
        <div className="flex flex-wrap gap-14 justify-evenly items-start">
          {dataServices.map((item, index) => (
            <article className="flex flex-col gap-4 items-center justify-start w-64" key={index}>
              <div className="h-16 w-full flex justify-center items-center">
                <img src={`/assets/${item.image}`} />
              </div>
              <h2 className="font-semibold">{lan === "es" ? item.title : item.title_en}</h2>
              <p className="font-medium italic text-sm">{lan === "es" ? item.description : item.description_en}</p>
              <img src="/assets/down.svg" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

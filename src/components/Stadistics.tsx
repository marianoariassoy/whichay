import { dataStadistics } from "../data/Data";
import { useDataContext } from "../context/useDataContext";

const Stadistics = () => {
  const { lan } = useDataContext();

  return (
    <section className="relative bg-center bg-cover" id="stadistics">
      <div className="absolute z-10 right-14 -mt-8">
        <img src="/assets/iso1.svg" />
      </div>
      <div className="container px-14 py-48 m-auto max-w-7xl grid grid-cols-2 gap-14 md:grid-cols-4 md:gap-24 text-white text-center items-start">
        {dataStadistics.map((item, index) => (
          <article className="font-semibold flex flex-col justify-center gap-4 md:gap-6" key={index}>
            <h3>{lan === "es" ? item.title : item.title_en}</h3>
            <hr className="border-y-2" />
            <h2 className="text-2xl md:text-4xl font-bold md:my-4">{item.subtitle}</h2>
            <hr className="border-y-2" />
            <h3>{lan === "es" ? item.description : item.description_en}</h3>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Stadistics;

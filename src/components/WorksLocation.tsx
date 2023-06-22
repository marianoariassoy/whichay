import { useDataContext } from "../context/useDataContext";

const WorksLocation = ({ url }) => {
  const { lan } = useDataContext();

  return (
    <section id="location">
      <div className="absolute z-10 right-14 mt-8">
        <img src="/assets/iso1.svg" />
      </div>
      <div className="container px-14 pb-6 m-auto max-w-7xl">
        <h2 className="font-bold text-2xl md:text-4xl mb-4 text-primary">{lan === "es" ? "Ubicación" : "Location"}</h2>
      </div>
      <iframe src={url} width="100%" height="500" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </section>
  );
};

export default WorksLocation;

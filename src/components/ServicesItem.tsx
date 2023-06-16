import { useDataContext } from "../context/useDataContext";

const ServicesItem = ({ item }) => {
  const { lan } = useDataContext();

  return (
    <article className="flex flex-col gap-2 md:gap-4 items-center justify-start w-64">
      <div className="h-16 w-full flex justify-center items-center">
        <img src={`/assets/${item.image}`} className="h-12 md:h-auto" />
      </div>
      <h2 className="font-semibold">{lan === "es" ? item.title : item.title_en}</h2>
      <p className="font-medium italic text-sm mb-2">{lan === "es" ? item.description : item.description_en}</p>
      <img src="/assets/down.svg" />
    </article>
  );
};

export default ServicesItem;

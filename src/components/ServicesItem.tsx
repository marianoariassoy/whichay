import { useState } from "react";
import { useDataContext } from "../context/useDataContext";
import { Down, Up } from "../icons/MySvgs";

const ServicesItem = ({ item }) => {
  const { lan } = useDataContext();
  const [show, setShow] = useState(false);

  const handleButton = () => {
    setShow(!show);
  };

  return (
    <article className="flex flex-col gap-2 md:gap-4 items-center justify-start w-64">
      <div className="h-16 w-full flex justify-center items-center">
        <img src={`/assets/${item.image}`} className="h-12 md:h-auto" />
      </div>
      <h2 className="font-semibold">{lan === "es" ? item.title : item.title_en}</h2>

      {show && <p className="fade-in font-medium italic text-sm -mt-2">{lan === "es" ? item.description : item.description_en}</p>}

      <button className="hover:text-black transition-all cursor-pointer" onClick={handleButton}>
        {show ? <Up /> : <Down />}
      </button>
    </article>
  );
};

export default ServicesItem;

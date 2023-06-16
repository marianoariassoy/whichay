import { useState } from "react";
import { useDataContext } from "../context/useDataContext";
import { Down } from "../icons/MySvgs";
import { Icon1, Icon2, Icon3, Icon4, Icon5 } from "../icons/Icons";

const ServicesItem = ({ item }) => {
  const { lan } = useDataContext();
  const [show, setShow] = useState(false);

  const handleButton = () => {
    setShow(!show);
  };

  return (
    <article className="flex flex-col gap-2 items-center justify-start w-64 cursor-pointer transition-colors hover:text-black" onClick={handleButton}>
      <div className="h-16 w-full flex justify-center items-center md:mb-2 services-icon">
        {item.image === 1 && <Icon1 />}
        {item.image === 2 && <Icon2 />}
        {item.image === 3 && <Icon3 />}
        {item.image === 4 && <Icon4 />}
        {item.image === 5 && <Icon5 />}
      </div>
      <h2 className="font-semibold">{lan === "es" ? item.title : item.title_en}</h2>

      {show && <p className="fade-in font-medium italic text-sm">{lan === "es" ? item.description : item.description_en}</p>}

      {!show && (
        <div className="mt-2">
          <Down />
        </div>
      )}
    </article>
  );
};

export default ServicesItem;

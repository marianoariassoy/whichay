import { useEffect } from "react";
import HTML from "../hooks/useHTML";
import { changeColor } from "../utils/headerColor";

const NewsDescription = ({ title, text_top, text, date }) => {
  useEffect(() => {
    changeColor("description");
  }, []);

  return (
    <section className="pt-24" id="description">
      <div className="relative container px-14 py-24 m-auto max-w-7xl">
        <div className="absolute z-10 right-14 mt-16">
          <img src="/assets/iso2.svg" />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div>
            <h2 className="font-bold text-2xl md:text-4xl mb-4 text-primary">{title}</h2>
          </div>
          <div>
            <h2 className="text-2xl md:text-4xl mb-4 text-primary text-right">{date}</h2>
          </div>
        </div>
        <p className="font-medium mb-8 text-xl">
          <HTML text={text_top} />
        </p>
        <p className="md:columns-2 gap-8 text-grap-balance">
          <HTML text={text} />
        </p>
      </div>
    </section>
  );
};

export default NewsDescription;

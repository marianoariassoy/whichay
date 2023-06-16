import { useEffect } from "react";
import { useDataContext } from "../context/useDataContext";
import ChangeHeaderColor from "../utils/ChangeHeaderColor";

const WorksLocation = () => {
  const { lan } = useDataContext();

  useEffect(() => {
    ChangeHeaderColor("#location");
  }, []);

  return (
    <section id="location">
      <div className="absolute z-10 right-14 mt-8">
        <img src="/assets/iso1.svg" />
      </div>

      <div className="container px-14 pb-6 m-auto max-w-7xl">
        <h2 className="font-bold text-2xl md:text-4xl mb-4 text-primary">{lan === "es" ? "Ubicación" : "Location"}</h2>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.918829930349!2d-65.12108682375852!3d-24.349319991014376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941babf14dce88df%3A0x53a03263666c7a8e!2sZona%20Franca%20Perico!5e0!3m2!1ses!2sit!4v1686927845211!5m2!1ses!2sit"
        width="100%"
        height="500"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default WorksLocation;

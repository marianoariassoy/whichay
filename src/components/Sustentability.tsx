import { useEffect } from "react";
import ImageComponent from "./ImageComponent";
import { useDataContext } from "../context/useDataContext";
import { changeColor } from "../utils/headerColor";

const Sustentability = () => {
  const { lan } = useDataContext();

  useEffect(() => {
    changeColor("#sustentability");
  }, []);

  const text = {
    es: {
      title: "Sustentabilidad",
      text1: "Aceptamos el desafío que hoy se impone en nuestro sector para ser parte de la construcción de un futuro sostenible.",
      text2:
        "Acompañamos el compromiso de nuestra provincia con el cuidado del medio ambiente, por ello capacitamos a nuestros técnicos y operarios en el desarrollo de nuevas técnicas constructivas que tiendan al aprovechamiento renovable de energías.",
      text3: "Una de las formas de aplicar estas energías renovables es a partir de la energía fotovoltaica y solar térmica. En ese marco ejecutamos instalaciones de PANELES y TERMOTANQUES SOLARES",
    },
    en: {
      title: "Sustentability",
      text1: "We accept the challenge that is imposed on our sector today to be part of the construction of a sustainable future.",
      text2: "We accompany the commitment of our province to the care of the environment, for this reason we train our technicians and operators in the development of new construction techniques that tend to the renewable use of energy.",
      text3: "One of the ways to apply these renewable energies is from photovoltaic and solar thermal energy. In this framework, we carry out installations of SOLAR PANELS and SOLAR WATER HEATERS",
    },
  };

  return (
    <section id="sustentability">
      <div className="container px-14 pb-24 pt-32 md:flex gap-8 items-center m-auto max-w-7xl">
        <div className="md:w-2/3 md:pr-16">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-8">{text[lan].title}</h1>
          <div className="mb-8 ">
            <p className="text-wrap-balance mb-4">{text[lan].text1}</p>
            <p className="text-wrap-balance mb-4">{text[lan].text2}</p>
            <p className="text-wrap-balance">{text[lan].text3}</p>
          </div>
        </div>
        <div className="md:w-1/3">
          <ImageComponent src="/images/sustentability.jpg" alt="Sustentability" />
        </div>
      </div>
    </section>
  );
};

export default Sustentability;

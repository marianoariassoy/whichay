import ImageComponent from "./ImageComponent";
import { useDataContext } from "../context/useDataContext";
import { ObserverFunction } from "../utils/ChangeColor";
import { useEffect } from "react";

const Sustentability = () => {
  const { lan } = useDataContext();

  useEffect(() => {
    ObserverFunction("#sustentability");
  }, []);

  return (
    <section id="sustentability" data-color="#e64b1c">
      <div className="container px-14 pb-24 pt-32 md:flex gap-8 items-center m-auto max-w-7xl">
        <div className="md:w-2/3 md:pr-16">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-8">{lan === "es" ? "Sustentabilidad" : "Sustentability"}</h1>
          <p className="mb-8 text-wrap-balance">
            Aceptamos el desafío que hoy se impone en nuestro sector para ser parte de la construcción de un futuro sostenible.
            <br /> <br />
            Acompañamos el compromiso de nuestra provincia con el cuidado del medio ambiente, por ello capacitamos a nuestros técnicos y operarios en el desarrollo de nuevas técnicas constructivas que tiendan al aprovechamiento renovable de energías.
            <br /> <br />
            Una de las formas de aplicar estas energías renovables es a partir de la energía fotovoltaica y solar térmica. En ese marco ejecutamos instalaciones de PANELES y TERMOTANQUES SOLARES
          </p>
        </div>
        <div className="md:w-1/3">
          <ImageComponent src="/images/sustentability.jpg" alt="Sustentability" />
        </div>
      </div>
    </section>
  );
};

export default Sustentability;

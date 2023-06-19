import { useEffect } from "react";
import { useDataContext } from "../context/useDataContext";
import { ObserverFunction } from "../utils/ChangeColor";

const About = () => {
  const { lan } = useDataContext();

  useEffect(() => {
    ObserverFunction("#about");
  }, []);

  return (
    <section id="about" data-color="#e64b1c">
      <div className="container px-14 py-24 md:flex gap-8 items-center m-auto max-w-7xl">
        <div className="md:w-1/3">
          <h1 className="text-5xl md:text-7xl my-4">
            <span className="font-light block">{lan === "es" ? "Somos" : "We Are"}</span>
            <span className="font-bold block text-primary">WICHAY</span>
          </h1>
        </div>
        <div className="md:w-2/3">
          <p className="text-xl mb-4 text-primary font-bold italic">Construimos porque nos apasiona el poder transformador de nuestra industria.</p>
          <p className="mb-8 text-wrap-balance">
            Nos motiva experimentar cómo una obra, sin importar su tamaño, incentiva el desarrollo de todo su entorno, generando crecimiento y evolución social. <br />
            <br />
            Somos una empresa jujeña dedicada al desarrollo y construcción de obras civiles dentro de los sectores público y privado.
            <br />
            <br />
            Contamos con el respaldo técnico de un excepcional equipo de trabajo y el networking necesario para el óptimo desarrollo y construcción de obras de arquitectura e ingeniería de gran escala en todo el territorio provincial, enfocados
            continuamente en satisfacer los requerimientos y las expectativas de nuestros clientes.
          </p>
          <p className="text-xl mb-4 text-primary font-bold italic">CONSTRUIMOS FUTURO</p>
          <p className="font-medium italic">“Miramos hacia adelante, buscando siempre superarnos sobre la base de lo que hemos transcurrido”.</p>
        </div>
      </div>
    </section>
  );
};

export default About;

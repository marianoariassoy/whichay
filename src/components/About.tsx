import { useEffect } from "react";
import { useDataContext } from "../context/useDataContext";
import { changeColor } from "../utils/headerColor";

const About = () => {
  const { lan } = useDataContext();

  useEffect(() => {
    changeColor("#about");
  }, []);

  const text = {
    es: {
      title: "Somos",
      subtitle: "Construimos porque nos apasiona el poder transformador de nuestra industria.",
      text1: "Nos motiva experimentar cómo una obra, sin importar su tamaño, incentiva el desarrollo de todo su entorno, generando crecimiento y evolución social.",
      text2: "Somos una empresa jujeña dedicada al desarrollo y construcción de obras civiles dentro de los sectores público y privado.",
      text3:
        "Contamos con el respaldo técnico de un excepcional equipo de trabajo y el networking necesario para el óptimo desarrollo y construcción de obras de arquitectura e ingeniería de gran escala en todo el territorio provincial, enfocados continuamente en satisfacer los requerimientos y las expectativas de nuestros clientes.",
      text4: "CONSTRUIMOS FUTURO",
      text5: "Miramos hacia adelante, buscando siempre superarnos sobre la base de lo que hemos transcurrido.",
    },
    en: {
      title: "We Are",
      subtitle: "We build because we are passionate about the transforming power of our industry.",
      text1: "We are motivated to experience how a work, regardless of its size, encourages the development of its entire environment, generating growth and social evolution.",
      text2: "We are a Jujuy company dedicated to the development and construction of civil works within the public and private sectors.",
      text3:
        "We have the technical support of an exceptional team and the necessary networking for the optimal development and construction of large-scale architectural and engineering works throughout the provincial territory, continuously focused on satisfying the requirements and expectations of our clients.",
      text4: "WE BUILD FUTURE",
      text5: "We look forward, always seeking to improve on the basis of what we have gone through.",
    },
  };

  return (
    <section id="about">
      <div className="container px-14 py-32 md:flex gap-8 items-center m-auto max-w-7xl">
        <div className="md:w-1/3">
          <h1 className="text-5xl md:text-7xl my-4">
            <span className="font-light block">{text[lan].title}</span>
            <span className="font-bold block text-primary">WICHAY</span>
          </h1>
        </div>
        <div className="md:w-2/3">
          <h3 className="text-xl mb-4 text-primary font-bold italic">{text[lan].subtitle}</h3>
          <div className="mb-8">
            <p className="text-wrap-balance mb-4">
              {text[lan].text1} <br />
              {text[lan].text2}
            </p>
            <p className="text-wrap-balance">{text[lan].text3}</p>
          </div>
          <h3 className="text-xl mb-4 text-primary font-bold italic">{text[lan].text4}</h3>
          <p className="font-medium italic">{text[lan].text5}</p>
        </div>
      </div>
    </section>
  );
};

export default About;

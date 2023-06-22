import { useEffect } from "react";
import { useDataContext } from "../context/useDataContext";
import { changeColor } from "../utils/headerColor";
import HTML from "../hooks/useHTML";

const WorksDescription = ({ project, client, text }) => {
  const { lan } = useDataContext();

  useEffect(() => {
    changeColor("#description");
  }, []);

  return (
    <section id="description">
      <div className="container px-14 py-24 m-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div>
            <h2 className="font-bold text-2xl md:text-4xl mb-4 text-primary">{lan === "es" ? "Proyecto" : "Project"}</h2>
            {project}
          </div>
          <div>
            <h2 className="font-bold text-2xl md:text-4xl mb-4 text-primary">{lan === "es" ? "Cliente" : "Client"}</h2>
            {client}
          </div>
        </div>
        <h2 className="font-bold text-2xl md:text-4xl mb-4 text-primary">{lan === "es" ? "Detalles" : "Details"}</h2>
        <p className="md:columns-2 gap-8 text-grap-balance">
          <HTML text={text} />
        </p>
      </div>
    </section>
  );
};

export default WorksDescription;

import { useEffect } from "react";
import { useDataContext } from "../context/useDataContext";
import ChangeHeaderColor from "../utils/ChangeHeaderColor";

const WorksDescription = () => {
  const { lan } = useDataContext();

  useEffect(() => {
    ChangeHeaderColor("#description");
  }, []);

  return (
    <section id="description">
      <div className="container px-14 py-24 m-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div>
            <h2 className="font-bold text-2xl md:text-4xl mb-4 text-primary">{lan === "es" ? "Proyecto" : "Project"}</h2>
            Construcción de Zona Franca en Perico - Jujuy
          </div>
          <div>
            <h2 className="font-bold text-2xl md:text-4xl mb-4 text-primary">{lan === "es" ? "Cliente" : "Client"}</h2>
            Zona Franca
          </div>
        </div>
        <h2 className="font-bold text-2xl md:text-4xl mb-4 text-primary">{lan === "es" ? "Detalles" : "Details"}</h2>
        <p className="md:columns-2 gap-8 text-grap-balance">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
          aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent
          luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
          veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum
          dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore{" "}
        </p>
      </div>
    </section>
  );
};

export default WorksDescription;

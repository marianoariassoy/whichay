import { useEffect } from "react";
import ChangeHeaderColor from "../utils/ChangeHeaderColor";
// import { useDataContext } from "../context/useDataContext";

const NewsDescription = () => {
  // const { lan } = useDataContext();

  useEffect(() => {
    ChangeHeaderColor("#description");
  }, []);

  return (
    <section className="pt-24" id="description">
      <div className="relative container px-14 py-24 m-auto max-w-7xl">
        <div className="absolute z-10 right-14 mt-16">
          <img src="/assets/iso2.svg" />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div>
            <h2 className="font-bold text-2xl md:text-4xl mb-4 text-primary">Nueva Flota</h2>
          </div>
          <div>
            <h2 className="text-2xl md:text-4xl mb-4 text-primary text-right"> 30/05/23</h2>
          </div>
        </div>
        <p className="font-medium mb-8 text-xl">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
          aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent lup
        </p>
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

export default NewsDescription;

import ImageComponent from "./ImageComponent";
import { Link } from "react-router-dom";
import { useDataContext } from "../context/useDataContext";

const WorksItem = ({ item }) => {
  const { lan } = useDataContext();

  return (
    <article className="h-screen relative">
      <div className="absolute w-full h-full bg-black bg-opacity-40 z-10">
        <div className="container h-full px-14 m-auto max-w-7xl text-white  flex items-end">
          <div className="pb-24">
            <h1 className="font-bold text-6xl mb-2">{item.title}</h1>
            <h2 className="font-medium text-3xl mb-8">Perico - Jujuy</h2>
            <Link to={`/obras/${item.id}`}>
              <button className="bg-primary h-11 font-bold px-8 inline-block hover:bg-black hover:text-white transition-all">{lan === "es" ? "+VER MAS" : "+MORE"}</button>
            </Link>
          </div>
        </div>
      </div>
      <ImageComponent src={item.image} alt={item.title} />
    </article>
  );
};

export default WorksItem;

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import useFetch from "../hooks/useFetch";
import Loader from "./Loader";
import { useDataContext } from "../context/useDataContext";
import WorksItem from "./WorksItem";
import { useEffect } from "react";
import { ObserverFunction } from "../utils/ChangeColor";

const Works = () => {
  const { data, loading } = useFetch(`/proyectos`);
  const { lan } = useDataContext();

  useEffect(() => {
    ObserverFunction("#works");
  }, []);

  const properties = {
    prevArrow: (
      <button className="ml-6">
        <img src="/assets/back.svg" />
      </button>
    ),
    nextArrow: (
      <button className="mr-6">
        <img src="/assets/forward.svg" />
      </button>
    ),
    transitionDuration: 500,
    autoplay: false,
  };

  return (
    <section className="relative h-full" id="works" data-color="white">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="absolute z-20">
            <div className="container px-14 pb-24 pt-32 m-auto max-w-7xl text-white">
              <h1 className="text-xl ">{lan === "es" ? "OBRAS" : "WORKS"}</h1>
            </div>
          </div>
          <Slide {...properties}>
            {data.map((item) => (
              <WorksItem item={item} key={item.id} />
            ))}
          </Slide>
        </>
      )}
    </section>
  );
};

export default Works;

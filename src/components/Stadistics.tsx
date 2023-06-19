import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { dataStadistics } from "../data/Data";
import { useDataContext } from "../context/useDataContext";
import { ObserverFunction } from "../utils/ChangeColor";

const Stadistics = () => {
  const { lan } = useDataContext();

  useEffect(() => {
    ObserverFunction("#stadistics");

    gsap.registerPlugin(ScrollTrigger);
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#stadistics",
          start: "top 60%",
          markers: false,
          toggleActions: "play pause play restart",
        },
      })
      .to("#data-0", { innerText: dataStadistics[0].subtitle, snap: "innerText", duration: 1, ease: "none" })
      .to("#data-1", { innerText: dataStadistics[1].subtitle, snap: "innerText", duration: 1, ease: "none" }, "-=0.5")
      .to("#data-2", { innerText: dataStadistics[2].subtitle, snap: "innerText", duration: 1, ease: "none" }, "-=0.5")
      .to("#data-3", { innerText: dataStadistics[3].subtitle, snap: "innerText", duration: 1, ease: "none" }, "-=0.5");
  }, []);

  return (
    <section className="relative bg-center bg-cover" id="stadistics" data-color="white">
      <div className="absolute z-10 right-14 -mt-10">
        <img src="/assets/iso1.svg" />
      </div>
      <div className="container px-14 py-48 m-auto max-w-7xl grid grid-cols-2 gap-14 md:grid-cols-4 md:gap-24 text-white text-center items-start">
        {dataStadistics.map((item, index) => (
          <article className="font-semibold flex flex-col justify-center gap-4 md:gap-6" key={index}>
            <h3>{lan === "es" ? item.title : item.title_en}</h3>
            <hr className="border-y-2" />
            <h2 className="text-2xl md:text-4xl font-bold md:my-4">
              <span id={`data-${index}`}>0</span> M2
            </h2>
            <hr className="border-y-2" />
            <h3>{lan === "es" ? item.description : item.description_en}</h3>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Stadistics;

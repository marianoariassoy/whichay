import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const GsapHeader = (data: string) => {
  gsap.registerPlugin(ScrollTrigger);
  const header = document.querySelector("header");

  const lightTheme = () => {
    header.classList.remove("text-primary");
  };

  const darkTheme = () => {
    header.classList.add("text-primary");
  };

  ScrollTrigger.create({
    trigger: data,
    start: "top top-=-80",
    end: "bottom top-=-80",
    onEnter: () => {
      darkTheme();
    },
    onLeave: () => {
      lightTheme();
    },
    onEnterBack: () => {
      darkTheme();
    },
    onLeaveBack: () => {
      lightTheme();
    },
    markers: false,
  });
};

export default GsapHeader;

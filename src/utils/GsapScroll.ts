import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

const GsapScroll = () => {
  gsap.registerPlugin(ScrollToPlugin);
  gsap.registerPlugin(ScrollTrigger);

  const links = gsap.utils.toArray(".menu-item");

  links.forEach((a: HTMLAnchorElement) => {
    const element = document.querySelector(a.getAttribute("href")),
      linkST = ScrollTrigger.create({
        trigger: element,
        start: "top top",
      });
    ScrollTrigger.create({
      trigger: element,
      start: "top center",
      end: "bottom center",
    });
    a.addEventListener("click", (e) => {
      e.preventDefault();
      gsap.to(window, { duration: 1, scrollTo: linkST.start, overwrite: "auto" });
    });
  });

  // const linksOthers = gsap.utils.toArray(".scroll");
  // linksOthers.forEach((a: HTMLAnchorElement) => {
  //   const element = document.querySelector(a.getAttribute("href")),
  //     linkST = ScrollTrigger.create({
  //       trigger: element,
  //       start: "top top",
  //     });
  //   ScrollTrigger.create({
  //     trigger: element,
  //     start: "top center",
  //     end: "bottom center",
  //   });
  //   a.addEventListener("click", (e) => {
  //     e.preventDefault();
  //     gsap.to(window, { duration: 1, scrollTo: linkST.start, overwrite: "auto" });
  //   });
  // });
};

export default GsapScroll;

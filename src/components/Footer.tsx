import { useEffect } from "react";
import { Logo } from "../icons/MySvgs";
// import { Facebook } from "../icons/MySvgs";
// import { Instagram } from "../icons/MySvgs";
import NavFooter from "./NavFooter";
import pageScroll from "../utils/pageScroll";
import { useDataContext } from "../context/useDataContext";

const Footer = () => {
  const { homeSection } = useDataContext();

  useEffect(() => {
    pageScroll();
  }, [homeSection]);

  return (
    <section className="bg-primary px-14 py-12 flex justify-between text-white text-sm">
      <div>
        <NavFooter />
      </div>
      <div className="flex flex-col justify-start items-end">
        <Logo />

        {/* <ul className="flex gap-4 items-center mt-12">
          <li>
            <a href="https://www.facebook.com/" target="_blank">
              <Facebook />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/" target="_blank">
              <Instagram />
            </a>
          </li>
        </ul> */}
      </div>
    </section>
  );
};

export default Footer;

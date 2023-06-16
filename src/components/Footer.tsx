import { useEffect } from "react";
import { navItems } from "../data/Data";
import { useDataContext } from "../context/useDataContext";
import { Logo } from "../icons/MySvgs";
import { Facebook } from "../icons/MySvgs";
import { Instagram } from "../icons/MySvgs";
import GsapScroll from "../utils/GsapScroll";

const Footer = () => {
  const { lan } = useDataContext();

  useEffect(() => {
    GsapScroll();
  }, []);

  return (
    <section className="bg-primary px-14 py-12 flex justify-between text-white text-sm">
      <div>
        <ul className="font-medium">
          {navItems.map((item, index) => (
            <li key={index} className="mb-1">
              <a href={item.url} className="menu-item">
                {lan === "es" ? item.name : item.name_en}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col justify-start items-end">
        <Logo />

        <ul className="flex gap-4 items-center mt-12">
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
        </ul>
      </div>
    </section>
  );
};

export default Footer;

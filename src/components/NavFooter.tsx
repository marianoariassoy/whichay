import { Link } from "react-router-dom";
import { navItems } from "../data/Data";
import { useDataContext } from "../context/useDataContext";

const NavFooter = () => {
  const { lan, homeSection } = useDataContext();

  return (
    <ul className="font-medium">
      {homeSection &&
        navItems.map((item, index) => (
          <li key={index} className="mb-1">
            <a href={item.url} className="menu-scroll">
              {lan === "es" ? item.name : item.name_en}
            </a>
          </li>
        ))}
      {!homeSection &&
        navItems.map((item, index) => (
          <li key={index} className="mb-1">
            <Link to="/">{lan === "es" ? item.name : item.name_en}</Link>
          </li>
        ))}
    </ul>
  );
};

export default NavFooter;

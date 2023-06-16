import { navItems } from "../data/Data";
import { useDataContext } from "../context/useDataContext";

const NavFooter = () => {
  const { lan } = useDataContext();

  return (
    <ul className="font-medium">
      {navItems.map((item, index) => (
        <li key={index} className="mb-1">
          <a href={item.url} className="menu-scroll">
            {lan === "es" ? item.name : item.name_en}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavFooter;

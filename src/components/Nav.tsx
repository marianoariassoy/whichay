import { navItems } from "../data/Data";
import { useDataContext } from "../context/useDataContext";

const Nav = () => {
  const { lan } = useDataContext();

  return (
    <nav className="hidden lg:block">
      <ul className="flex gap-6 xl:gap-12 items-center text-sm font-medium">
        {navItems.map((item, index) => (
          <li key={index}>
            <a href={item.url} className="menu-item">
              {lan === "es" ? item.name : item.name_en}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;

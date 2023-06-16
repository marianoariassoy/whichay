import { Link } from "react-router-dom";
import { navItems } from "../data/Data";
import { useDataContext } from "../context/useDataContext";

const NavMobile = () => {
  const { lan, homeSection } = useDataContext();

  const closeMenu = () => {
    const menu = document.querySelector(".nav-mobile");
    menu.classList.add("hidden");
  };

  return (
    <nav className="nav-mobile fade-in fixed top-0 w-full h-screen bg-black bg-opacity-70 backdrop-blur-md  -z-10 hidden">
      <div className="h-full w-full flex items-center justify-center text-center text-xl">
        <ul className="font-medium">
          {homeSection &&
            navItems.map((item, index) => (
              <li key={index} className="mb-4">
                <a href={item.url} className="menu-item" onClick={closeMenu}>
                  {lan === "es" ? item.name : item.name_en}
                </a>
              </li>
            ))}
          {!homeSection &&
            navItems.map((item, index) => (
              <li key={index} className="mb-4">
                <Link to="/">{lan === "es" ? item.name : item.name_en}</Link>
              </li>
            ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavMobile;

import { Link } from "react-router-dom";
import { navItems } from "../data/Data";
import { useDataContext } from "../context/useDataContext";
import { useEffect } from "react";

const Nav = () => {
  const { lan, homeSection } = useDataContext();

  useEffect(() => {
    const listItem = document.querySelectorAll(".nav-main ul li a");
    const menuBackDrop = document.querySelector("#menu-backdrop") as HTMLElement;

    const item = listItem[0] as HTMLElement;
    const { left, top, width, height } = item.getBoundingClientRect();

    menuBackDrop.style.setProperty("--left", `${left}px`);
    menuBackDrop.style.setProperty("--top", `${top}px`);
    menuBackDrop.style.setProperty("--width", `${width}px`);
    menuBackDrop.style.setProperty("--height", `${height}px`);

    listItem.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        const { left, top, width, height } = item.getBoundingClientRect();
        menuBackDrop.style.setProperty("--left", `${left}px`);
        menuBackDrop.style.setProperty("--top", `${top}px`);
        menuBackDrop.style.setProperty("--width", `${width}px`);
        menuBackDrop.style.setProperty("--height", `${height}px`);
        menuBackDrop.style.opacity = "1";
        menuBackDrop.style.visibility = "visible";
      });

      item.addEventListener("mouseleave", () => {
        menuBackDrop.style.opacity = "0";
        menuBackDrop.style.visibility = "hidden";
      });
    });
  }, [homeSection]);

  return (
    <div className="relative">
      <nav className="nav-main hidden lg:block">
        <ul className="flex font-medium text-sm [&>li>a]:text-current [&>li>a]:font-medium [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2">
          {homeSection &&
            navItems.map((item, index) => (
              <li key={index}>
                <a href={item.url} className="menu-item">
                  {lan === "es" ? item.name : item.name_en}
                </a>
              </li>
            ))}

          {!homeSection &&
            navItems.map((item, index) => (
              <li key={index}>
                <Link to="/">{lan === "es" ? item.name : item.name_en}</Link>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;

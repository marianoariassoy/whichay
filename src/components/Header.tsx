import { Logo } from "../icons/MySvgs";
import Lan from "./Lan";
import Nav from "./Nav";

const Header = () => {
  return (
    <section className="w-full px-16 py-8 flex justify-between items-center text-white ">
      <div>
        <a href="#home" className="menu-item logo">
          <Logo />
        </a>
      </div>
      <div>
        <Nav />
      </div>
      <div>
        <Lan />
      </div>
    </section>
  );
};

export default Header;

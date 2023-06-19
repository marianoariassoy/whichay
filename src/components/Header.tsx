import Lan from "./Lan";
import MenuMobile from "./MenuMobile";
import Nav from "./Nav";
import LogoContainer from "./LogoContainer";

const Header = () => {
  return (
    <section className="w-full px-14 py-8 flex justify-between items-center">
      <div>
        <LogoContainer />
      </div>
      <div>
        <Nav />
      </div>
      <div className="flex gap-4">
        <Lan />
        <MenuMobile />
      </div>
      <div
        id="menu-backdrop"
        className="absolute bg-black/5 backdrop-blur-lg rounded
      translate-x-[var(--left)] translate-y-[var(--top)]
      left-0 top-0
      w-[var(--width)] h-[var(--height)]
      transition-all duration-300
      ease-in-out opacity-0 -z-10"
      ></div>
    </section>
  );
};

export default Header;

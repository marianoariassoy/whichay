import Lan from "./Lan";
import MenuMobile from "./MenuMobile";
import Nav from "./Nav";
import LogoContainer from "./LogoContainer";

const Header = () => {
  return (
    <section className="w-full px-16 py-8 flex justify-between items-center">
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
    </section>
  );
};

export default Header;

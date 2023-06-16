import { Link } from "react-router-dom";
import { Logo } from "../icons/MySvgs";
import { useDataContext } from "../context/useDataContext";

const LogoContainer = () => {
  const { homeSection } = useDataContext();

  return homeSection ? (
    <a href="#home" className="menu-item">
      <Logo />
    </a>
  ) : (
    <Link to="/">
      <Logo />
    </Link>
  );
};

export default LogoContainer;

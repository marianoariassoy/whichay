import { useDataContext } from "../context/useDataContext";

const Lan = () => {
  const { lan, setLan } = useDataContext();

  return (
    <ul className="flex gap-1 items-center text-sm">
      <li>
        <a href="#home" className={`menu-item  ${lan === "es" && "opacity-50"}`} onClick={() => setLan("en")}>
          EN
        </a>
      </li>
      <li> - </li>
      <li>
        <a href="#home" className={`menu-item  ${lan === "en" && "opacity-50"}`} onClick={() => setLan("es")}>
          ES
        </a>
      </li>
    </ul>
  );
};

export default Lan;

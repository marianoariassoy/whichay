import { Facebook } from "../icons/MySvgs";
import { Instagram } from "../icons/MySvgs";

const Social = () => {
  return (
    <div className="fixed z-30 bottom-8 left-0 px-14 text-white">
      <ul className="social-nav flex gap-4 items-center">
        <li>
          <a href="https://www.facebook.com/" target="_blank">
            <Facebook />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/" target="_blank">
            <Instagram />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;

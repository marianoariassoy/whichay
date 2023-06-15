import { useEffect, useState } from "react";
import Loader from "./Loader";

type ImageComponentProps = {
  src: string;
  alt: string;
};

const ImageComponent = ({ src, alt }: ImageComponentProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const url = "http://localhost/sites/saltaok-backend/images/";

  useEffect(() => {
    const image = new Image();
    image.src = url + src;
    image.onload = () => {
      setIsLoading(false);
    };
  }, [src]);

  return isLoading ? <Loader /> : <img src={url + src} alt={alt} className="fade-in w-full object-cover h-full" />;
};

export default ImageComponent;

import { useEffect, useState } from "react";
import Loader from "./Loader";

type ImageComponentProps = {
  src: string;
  alt: string;
};

const ImageComponent = ({ src, alt }: ImageComponentProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      setIsLoading(false);
    };
  }, [src]);

  return isLoading ? <Loader /> : <img src={src} alt={alt} className="fade-in w-full h-full object-cover object-center block" />;
};

export default ImageComponent;

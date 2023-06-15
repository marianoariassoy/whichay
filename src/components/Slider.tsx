import { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Loader from "./Loader";
import useFetch from "../hooks/useFetch";

type SliderItemProps = {
  src: string;
  alt: string;
};

const SliderItem = ({ src, alt }: SliderItemProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      setIsLoading(false);
    };
  }, [src]);

  return isLoading ? <Loader /> : <img src={src} alt={alt} className="fade-in h-screen w-screen object-cover" />;
};

type SliderProps = {
  data: null | Array<{ id: number; image: string }>;
  loading: boolean;
};

const Slider = () => {
  const { data, loading } = useFetch(`/imagenes`) as SliderProps;

  const properties = {
    arrows: false,
    transitionDuration: 700,
    pauseOnHover: false,
    autoplay: true,
    indicators: true,
  };

  type Image = {
    id: number;
    image: string;
  };

  return loading ? <Loader /> : <Slide {...properties}>{data && data.slice(0, 4).map((image: Image) => <SliderItem key={image.id} src={image.image} alt="" />)}</Slide>;
};

export default Slider;

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

  return <div className="h-screen">{isLoading ? <Loader /> : <img src={src} alt={alt} className="fade-in h-full w-full object-cover" />}</div>;
};

type DataProps = {
  data: null | Array<{ id: number; image: string }>;
  loading: boolean;
};

type SliderComponentProps = {
  arrows: boolean;
  autoplay: boolean;
};

const Slider = ({ arrows, autoplay }: SliderComponentProps) => {
  const { data, loading } = useFetch(`/imagenes`) as DataProps;

  const properties = {
    prevArrow: (
      <button className="ml-6">
        <img src="/assets/back.svg" />
      </button>
    ),
    nextArrow: (
      <button className="mr-6">
        <img src="/assets/forward.svg" />
      </button>
    ),
    transitionDuration: 500,
    autoplay,
    arrows,
    indicators: true,
  };

  type Image = {
    id: number;
    image: string;
  };

  return <div className="relative h-full w-full">{loading ? <Loader /> : <Slide {...properties}>{data && data.slice(0, 4).map((image: Image) => <SliderItem key={image.id} src={image.image} alt="" />)}</Slide>}</div>;
};

export default Slider;

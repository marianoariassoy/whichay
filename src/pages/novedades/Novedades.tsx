import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDataContext } from "../../context/useDataContext";
import Layout from "../../layout/Layout";
import NewsDescription from "../../components/NewsDescription";
import Slider from "../../components/Slider";

const Novedades = () => {
  const { setHomeSection } = useDataContext();

  useEffect(() => {
    window.scrollTo(0, 0);
    const header = document.querySelector("header");
    header.classList.add("text-primary");
    setHomeSection(false);
  }, [setHomeSection]);

  return (
    <Layout>
      <Helmet>
        <title>Wichay &bull; Novedades</title>
        <meta name="description" content="" />
      </Helmet>
      <NewsDescription />
      <Slider />
    </Layout>
  );
};

export default Novedades;

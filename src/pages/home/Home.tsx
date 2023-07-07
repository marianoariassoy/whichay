import Layout from "../../layout/Layout";
import HomeSection from "../../components/HomeSection";
import About from "../../components/About";
import Stadistics from "../../components/Stadistics";
import Services from "../../components/Services";
import Works from "../../components/Works";
import Sustentability from "../../components/Sustentability";
import News from "../../components/News";
import Contact from "../../components/Contact";
import Multimedia from "../../components/Multimedia";
import { Helmet } from "react-helmet";
import { useDataContext } from "../../context/useDataContext";
import { useEffect } from "react";

type HomeProps = {
  target: string;
};

const Home = ({ target }: HomeProps) => {
  const { setHomeSection } = useDataContext();
  useEffect(() => {
    setHomeSection(true);
    const targetElement = document.querySelector(`#${target}`) as HTMLElement;
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth",
    });
  }, [target, setHomeSection]);

  return (
    <Layout>
      <Helmet>
        <title>Wichay Servicios</title>
        <meta name="description" content="" />
      </Helmet>
      <HomeSection />
      <About />
      <Stadistics />
      <Services />
      <Works />
      <Sustentability />
      <News />
      <Multimedia />
      <Contact />
    </Layout>
  );
};

export default Home;

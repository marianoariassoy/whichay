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

const Home = () => {
  const { setHomeSection } = useDataContext();

  useEffect(() => {
    setHomeSection(true);
  }, [setHomeSection]);

  return (
    <Layout>
      <Helmet>
        <title>Wichay Servicios</title>
        <meta name="description" content="" />
      </Helmet>
      <div className="snap-y snap-mandatory h-screen top-0 overflow-auto">
        <div className="snap-start">
          <HomeSection />
        </div>
        <div className="snap-start">
          <About />
        </div>
        <div className="snap-start">
          <Stadistics />
        </div>
        <div className="snap-start">
          <Services />
        </div>
        <div className="snap-start">
          <Works />
        </div>
        <div className="snap-start">
          <Sustentability />
        </div>
        <div className="snap-start">
          <News />
        </div>
        <div className="snap-start">
          <Multimedia />
        </div>
        <div className="snap-start">
          <Contact />
        </div>
      </div>
    </Layout>
  );
};

export default Home;

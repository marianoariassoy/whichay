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

const Home = () => {
  return (
    <Layout>
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

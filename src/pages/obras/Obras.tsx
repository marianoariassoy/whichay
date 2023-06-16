import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDataContext } from "../../context/useDataContext";
import Layout from "../../layout/Layout";
import HomeWorks from "../../components/HomeWorks";
import WorksDescription from "../../components/WorksDescription";
import WorksLocation from "../../components/WorksLocation";

const Obras = () => {
  const { setHomeSection } = useDataContext();

  useEffect(() => {
    window.scrollTo(0, 0);
    setHomeSection(false);
  }, [setHomeSection]);

  return (
    <Layout>
      <HomeWorks />
      <WorksDescription />
      <WorksLocation />
      <Helmet>
        <title>Wichay &bull; Zona Franca</title>
        <meta name="description" content="" />
      </Helmet>
    </Layout>
  );
};

export default Obras;

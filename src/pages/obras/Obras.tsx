import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useDataContext } from "../../context/useDataContext";
import Layout from "../../layout/Layout";
import HomeWorks from "../../components/HomeWorks";
import WorksDescription from "../../components/WorksDescription";
import WorksLocation from "../../components/WorksLocation";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader";

const Obras = () => {
  const { id } = useParams();
  const { lan } = useDataContext();
  const { setHomeSection } = useDataContext();
  const { data, loading } = useFetch(`/obras/${lan}/${id}`);

  useEffect(() => {
    window.scrollTo(0, 0);
    setHomeSection(false);
  }, [setHomeSection]);

  return (
    <Layout>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HomeWorks id={data[0].id} title={data[0].title} location={data[0].location} />
          <WorksDescription project={data[0].project} client={data[0].client} text={data[0].text} />
          <WorksLocation url={data[0].googlemap} />
          <Helmet>
            <title>Wichay &bull; {data[0].title}</title>
            <meta name="description" content={data[0].text} />
          </Helmet>
        </>
      )}
    </Layout>
  );
};

export default Obras;

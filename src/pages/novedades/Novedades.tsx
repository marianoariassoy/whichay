import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useDataContext } from "../../context/useDataContext";
import Layout from "../../layout/Layout";
import NewsDescription from "../../components/NewsDescription";
import Slider from "../../components/Slider";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader";

const Novedades = () => {
  const { id } = useParams();
  const { lan } = useDataContext();
  const { setHomeSection } = useDataContext();
  const { data, loading } = useFetch(`/novedades/${lan}/${id}`);
  const { data: dataImages, loading: loadingImages } = useFetch(`/imagenes/${id}`);

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
      {loading ? (
        <div className="h-screen">
          <Loader />
        </div>
      ) : (
        <>
          <NewsDescription title={data[0].title} text_top={data[0].text_top} text={data[0].text} date={data[0].date} />
          {loadingImages ? <Loader /> : <Slider data={dataImages} autoplay={true} arrows={true} />}
        </>
      )}
    </Layout>
  );
};

export default Novedades;

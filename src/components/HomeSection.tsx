import Slider from "./Slider";
import Social from "./Social";
import WaComponent from "./WaComponent";
import useFetch from "../hooks/useFetch";

type DataProps = {
  data: null | Array<{ id: number; image: string }>;
  loading: boolean;
};

const Home = () => {
  const { data, loading } = useFetch(`/home`) as DataProps;

  return (
    <section className="relative h-screen overflow-hidden" id="home">
      <Social />
      <WaComponent />
      <div className="absolute w-full h-full bg-black bg-opacity-40 z-10"></div>
      <div className="h-screen">{!loading && <Slider data={data} autoplay={true} arrows={false} />}</div>
    </section>
  );
};

export default Home;

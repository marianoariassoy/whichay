import { useState } from "react";
import { useDataContext } from "../context/useDataContext";
import NewsItem from "./NewsItem";
import Loader from "./Loader";
import useFetch from "../hooks/useFetch";

const News = () => {
  const { lan } = useDataContext();
  const { data, loading } = useFetch(`/novedades/${lan}`);
  const [visible, setVisible] = useState(3);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  return (
    <section className="bg-secondary text-white" id="news">
      <div className="container px-14 pb-24 pt-32 m-auto max-w-7xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-16">{lan === "es" ? "Novedades" : "News"}</h1>
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="grid md:grid-cols-3 gap-14 items-start">
              {data.map((article) => (
                <NewsItem key={article.id} article={article} />
              ))}
            </div>
            {visible < data.length && (
              <div className="flex justify-center mt-16">
                <button className="bg-tertiary h-11 font-medium px-12 inline-block hover:bg-black hover:text-white  hover:shadow-xl transition-all" onClick={showMoreItems}>
                  {lan === "es" ? "+VER MAS" : "+MORE"}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default News;

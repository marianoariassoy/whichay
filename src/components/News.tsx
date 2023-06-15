import { useDataContext } from "../context/useDataContext";
import NewsItem from "./NewsItem";

const News = () => {
  const { lan } = useDataContext();

  const news = [
    {
      title: "Movimiento de suelo en Perico",
      image: "https://images.pexels.com/photos/242492/pexels-photo-242492.jpeg?auto=compress&cs=tinysrgb&w=1600",
      date: "12/12/2021",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    },

    {
      title: "Movimiento de suelo en Perico",
      image: "https://images.pexels.com/photos/242492/pexels-photo-242492.jpeg?auto=compress&cs=tinysrgb&w=1600",
      date: "12/12/2021",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    },

    {
      title: "Movimiento de suelo en Perico",
      image: "https://images.pexels.com/photos/242492/pexels-photo-242492.jpeg?auto=compress&cs=tinysrgb&w=1600",
      date: "12/12/2021",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    },
  ];

  return (
    <section className="bg-secondary text-white" id="news">
      <div className="container px-14 py-24 m-auto max-w-7xl">
        <h1 className="text-6xl font-bold mb-24">{lan === "es" ? "Novedades" : "News"}</h1>
        <div className="grid grid-cols-3 gap-14 items-start">
          {news.map((article, index) => (
            <NewsItem key={index} article={article} />
          ))}
        </div>
        <div className="flex justify-center mt-16">
          <button className="bg-tertiary h-11 font-bold px-8 inline-block hover:bg-black hover:text-white transition-all">{lan === "es" ? "+VER MAS" : "+MORE"}</button>
        </div>
      </div>
    </section>
  );
};

export default News;

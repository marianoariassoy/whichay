import { useDataContext } from "../context/useDataContext";
import NewsItem from "./NewsItem";

const News = () => {
  const { lan } = useDataContext();

  const news = [
    {
      id: 1,
      title: "Movimiento de suelo en Perico",
      image: "https://images.pexels.com/photos/242492/pexels-photo-242492.jpeg?auto=compress&cs=tinysrgb&w=1600",
      date: "12/12/2021",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    },

    {
      id: 2,
      title: "Movimiento de suelo en Perico",
      image: "https://images.pexels.com/photos/2531552/pexels-photo-2531552.jpeg?auto=compress&cs=tinysrgb&w=1600",
      date: "12/12/2021",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    },

    {
      id: 3,
      title: "Movimiento de suelo en Perico",
      image: "https://images.pexels.com/photos/281451/pexels-photo-281451.jpeg?auto=compress&cs=tinysrgb&w=1600",
      date: "12/12/2021",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    },
  ];

  return (
    <section className="bg-secondary text-white" id="news">
      <div className="container px-14 pb-24 pt-32 m-auto max-w-7xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-24">{lan === "es" ? "Novedades" : "News"}</h1>
        <div className="grid md:grid-cols-3 gap-14 items-start">
          {news.map((article) => (
            <NewsItem key={article.id} article={article} />
          ))}
        </div>
        <div className="flex justify-center mt-16">
          <button className="bg-tertiary h-11 font-medium px-12 inline-block hover:bg-black hover:text-white transition-all">{lan === "es" ? "+VER MAS" : "+MORE"}</button>
        </div>
      </div>
    </section>
  );
};

export default News;

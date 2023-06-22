import ImageComponent from "./ImageComponent";
import { Link } from "react-router-dom";

const NewsItem = ({ article }) => {
  return (
    <article className="flex flex-col gap-4">
      <div className="relative aspect-square object-cover overflow-hidden">
        <Link to={`/novedades/${article.id}`} className="absolute h-full w-full flex items-center justify-center [&>div]:hover:flex hover:backdrop-blur-sm">
          <div className="font-bold text-2xl bg-white text-black w-10 h-10 rounded-full items-center justify-center hidden">+</div>
        </Link>
        <ImageComponent src={article.image} alt={article.title} />
      </div>
      <div className="flex justify-between font-bold ">
        <div>{article.title}</div>
        <div>{article.date}</div>
      </div>
      <hr className="w-full border-white" />
      <div className="text-sm">
        <p>{article.text}</p>
      </div>
    </article>
  );
};

export default NewsItem;

import ImageComponent from "./ImageComponent";

const VideosItem = ({ title, image, video, setCurrentVideo }) => {
  return (
    <article className="relative aspect-video">
      <button className="absolute h-full w-full flex items-center justify-center [&>div]:hover:flex hover:backdrop-blur-sm transition-all" onClick={() => setCurrentVideo(video)}>
        <div className="font-bold text-2xl bg-white text-black w-10 h-10 rounded-full items-center justify-center hidden">+</div>
      </button>
      <ImageComponent src={image} alt={title} />
    </article>
  );
};

export default VideosItem;

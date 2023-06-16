import { useState } from "react";
import { useDataContext } from "../context/useDataContext";
import VideosItem from "./VideosItem";
import Modal from "./Modal";

const Videos = () => {
  const { lan } = useDataContext();
  const [currentVideo, setCurrentVideo] = useState(null);

  return (
    <>
      <h1 className="text-4xl md:text-6xl font-bold text-primary mb-16">Videos</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <VideosItem title="" setCurrentVideo={setCurrentVideo} video="https://www.youtube.com/watch?v=FhkFXiB34iI" image="https://images.pexels.com/photos/1870438/pexels-photo-1870438.jpeg?auto=compress&cs=tinysrgb&w=1600" />
        <VideosItem title="" setCurrentVideo={setCurrentVideo} video="https://www.youtube.com/watch?v=NPeP9uz1K08" image="https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg?auto=compress&cs=tinysrgb&w=1600" />
        <VideosItem title="" setCurrentVideo={setCurrentVideo} video="https://www.youtube.com/watch?v=oN_AsU7jFmc" image="https://images.pexels.com/photos/1755086/pexels-photo-1755086.jpeg?auto=compress&cs=tinysrgb&w=1600" />
        <VideosItem title="" setCurrentVideo={setCurrentVideo} video="https://www.youtube.com/watch?v=FhkFXiB34iI" image="https://images.pexels.com/photos/2608519/pexels-photo-2608519.jpeg?auto=compress&cs=tinysrgb&w=1600" />
      </div>
      <div className="flex justify-center mt-16">
        <button className="bg-primary text-white h-11 font-medium px-12 inline-block hover:bg-black hover:text-white transition-all">{lan === "es" ? "+VER MAS" : "+MORE"}</button>
      </div>

      {currentVideo && <Modal currentVideo={currentVideo} setCurrentVideo={setCurrentVideo} />}
    </>
  );
};

export default Videos;

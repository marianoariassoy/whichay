import { useState } from "react";
import { useDataContext } from "../context/useDataContext";
import VideosItem from "./VideosItem";
import Modal from "./Modal";
import Loader from "./Loader";
import useFetch from "../hooks/useFetch";

const Videos = () => {
  const { lan } = useDataContext();
  const { data, loading } = useFetch(`/videos/`);
  const [visible, setVisible] = useState(3);
  const [currentVideo, setCurrentVideo] = useState(null);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  return (
    <>
      <h1 className="text-4xl md:text-6xl font-bold text-primary mb-16">Videos</h1>

      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {data.map((item) => (
              <VideosItem key={item.id} title={item.title} setCurrentVideo={setCurrentVideo} video={item.video} image={item.image} />
            ))}
          </div>
          {visible < data.length && (
            <div className="flex justify-center mt-16">
              <button className="bg-primary text-white h-11 font-medium px-12 inline-block hover:bg-black hover:text-white  hover:shadow-xl transition-all" onClick={showMoreItems}>
                {lan === "es" ? "+VER MAS" : "+MORE"}
              </button>
            </div>
          )}
        </>
      )}

      {currentVideo && <Modal currentVideo={currentVideo} setCurrentVideo={setCurrentVideo} />}
    </>
  );
};

export default Videos;

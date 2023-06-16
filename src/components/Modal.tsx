import ReactPlayer from "react-player";

const Modal = ({ setCurrentVideo, currentVideo }) => {
  const handelClick = (e) => {
    if (e.target.classList.contains("dismiss")) {
      setCurrentVideo(null);
    }
  };
  return (
    <div className="fade-in fixed bg-black bg-opacity-70 backdrop-blur-md h-screen w-screen top-0 left-0 grid place-items-center dismiss z-50 p-8 md:p-24" onClick={handelClick}>
      <div className="bg-white p-4 w-full aspect-square md:aspect-auto md:h-full md:w-auto">
        <ReactPlayer url={currentVideo} playing={true} controls={true} width="100%" height="100%" className="aspect-video object-cover" />
      </div>

      <span className="absolute top-8 right-8 text-white text-4xl cursor-pointer hover:text-black dismiss" onClick={handelClick}>
        X
      </span>
    </div>
  );
};

export default Modal;

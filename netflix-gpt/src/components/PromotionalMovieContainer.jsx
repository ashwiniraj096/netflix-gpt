import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const PromotionalMovieContainer = ({ promotionalMovie }) => {
  const { title, id, overview } = promotionalMovie;
  useMovieTrailer(id);
  const youTubeKeyId = useSelector(
    (state) => state.movies?.trailerOfMovie?.key
  );
  return (
    <>
      <div className="w-screen aspect-video absolute  bg-gradient-to-r from-black">
        <div className="ml-14 mt-[20%]">
          <h1 className="font-bold text-6xl text-white ">{title}</h1>
          <p className="w-4/12 mt-3 text-white">{overview}</p>
          <div className="mt-5">
            <button className=" bg-white text-black p-4 px-12 text-xl  rounded-lg hover:bg-opacity-80">
              ▶ Play
            </button>
            <button className="mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
              ℹ More Info
            </button>
          </div>
        </div>
      </div>
      <div>
        <iframe
          className="w-screen aspect-video"
          // width="560"
          //height="315"
          src={`https://www.youtube.com/embed/${youTubeKeyId}?&autoplay=1&mute=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
    </>
  );
};

export default PromotionalMovieContainer;

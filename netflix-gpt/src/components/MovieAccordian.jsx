import { useRef } from "react";
import { TMDB_IMAGE_URL } from "../utils/constants";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const MovieAccordian = ({ list, name }) => {
  const scrollContainerRef = useRef(null);
  // const scrollLeft = () => {
  //   scrollContainerRef.current.scrollLeft -= 200;
  // };
  const scrollRight = () => {
    scrollContainerRef.current.scrollLeft += 200;
  };
  return (
    <div className="mb-10">
      <div className="mb-3">
        <h1 className="font-semibold text-2xl text-white">{name}</h1>
      </div>
      <div className="relative">
        {/* <div className="top-[35%] absolute -left-10" onClick={scrollLeft}>
          <AiOutlineLeft className=" size-10 text-white" />
        </div> */}
        <div className="top-[35%] absolute right-5" onClick={scrollRight}>
          <AiOutlineRight className="text-white size-10 font-extrabold" />
        </div>
        <div
          className="flex overflow-x-scroll hide-scrollbar no-scrollbar"
          ref={scrollContainerRef}
        >
          {list?.map((movie) => (
            <img
              src={`${TMDB_IMAGE_URL}/${movie?.poster_path}`}
              alt=""
              className="w-36 pr-2 rounded-xl"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieAccordian;

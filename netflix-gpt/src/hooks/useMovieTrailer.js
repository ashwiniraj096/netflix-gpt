import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerOfMovie } from "../slices/moviesSlice";
import { useDispatch } from "react-redux";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const fetchMovieTrailerVideo = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const result = await response.json();
    const trailerVideos = result?.results?.filter(
      (video) => video.type === "Trailer"
    );
    const officialTrailer = trailerVideos?.filter((trailer) =>
      trailer.name.includes("Official Trailer")
    );
    dispatch(addTrailerOfMovie(officialTrailer[0] || trailerVideos[0]));
  };
  useEffect(() => {
    fetchMovieTrailerVideo();
  }, []);
};

export default useMovieTrailer;

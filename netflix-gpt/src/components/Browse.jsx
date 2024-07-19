import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import MoviesListContainer from "./MoviesListContainer";
import PromotionalMovieContainer from "./PromotionalMovieContainer";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMoviesList } from "../slices/moviesSlice";
import useNowPlayingMoviesList from "../hooks/useNowPlayingMoviesList";

const BrowsePage = () => {
  useNowPlayingMoviesList();
  const movies = useSelector((state) => state.movies?.nowPlayingMoviesList);

  //Add Shimmer UI here
  if (!movies?.length) return;

  const promotionalMovie = movies[0];

  return (
    <div className="">
      <PromotionalMovieContainer promotionalMovie={promotionalMovie} />
      <MoviesListContainer />
    </div>
  );
};

export default BrowsePage;

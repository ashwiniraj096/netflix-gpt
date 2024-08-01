import { useEffect } from "react";
import MoviesListContainer from "./MoviesListContainer";
import PromotionalMovieContainer from "./PromotionalMovieContainer";
import { useSelector } from "react-redux";
import useMoviesList from "../hooks/useMoviesList";
import {
  NOW_PLAYING,
  NOW_PLAYING_MOVIES,
  POPULAR,
  POPULAR_MOVIES,
  TOP_RATED,
  TOP_RATED_MOVIES,
  UPCOMING,
  UPCOMING_MOVIES,
} from "../utils/constants";

const BrowsePage = () => {
  useMoviesList(NOW_PLAYING, NOW_PLAYING_MOVIES);
  useMoviesList(TOP_RATED, TOP_RATED_MOVIES);
  useMoviesList(POPULAR, POPULAR_MOVIES);
  useMoviesList(UPCOMING, UPCOMING_MOVIES);

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

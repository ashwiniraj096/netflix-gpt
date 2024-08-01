import { useSelector } from "react-redux";
import MovieAccordian from "./MovieAccordian";

const MoviesListContainer = () => {
  const nowPlayingMovieList = useSelector(
    (state) => state.movies.nowPlayingMoviesList
  );
  const topRatedMoviesList = useSelector(
    (state) => state.movies.topRatedMoviesList
  );
  const upcomingMoviesList = useSelector(
    (state) => state.movies.upcomingMoviesList
  );
  const popularMoviesList = useSelector(
    (state) => state.movies.popularMoviesList
  );
  return (
    <div className="bg-black pb-10">
      <div className="-mt-52 pl-12 relative z-20">
        <MovieAccordian list={nowPlayingMovieList} name={"Now Playing"} />
        <MovieAccordian list={popularMoviesList} name={"Popular"} />
        <MovieAccordian list={upcomingMoviesList} name={"Upcoming"} />
        <MovieAccordian list={topRatedMoviesList} name={"Top Rated"} />
      </div>
    </div>
  );
};

export default MoviesListContainer;

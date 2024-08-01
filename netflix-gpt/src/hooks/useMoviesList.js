import { useDispatch } from "react-redux";
import { addNowPlayingMoviesList } from "../slices/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMoviesList = (searchStiring, stateVariable) => {
  const dispatch = useDispatch();
  const fetchNowPlayingMoviesList = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${searchStiring}?language=en-US&page=1`,
      API_OPTIONS
    );
    const result = await response.json();
    dispatch(
      addNowPlayingMoviesList({
        payload: result.results,
        key: stateVariable,
      })
    );
  };

  useEffect(() => {
    fetchNowPlayingMoviesList();
  }, []);
};

export default useMoviesList;

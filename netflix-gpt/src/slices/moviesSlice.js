import { createSlice } from "@reduxjs/toolkit";
import {
  NOW_PLAYING_MOVIES,
  POPULAR_MOVIES,
  TOP_RATED_MOVIES,
  UPCOMING_MOVIES,
} from "../utils/constants";

const initialState = {
  [NOW_PLAYING_MOVIES]: null,
  trailerOfMovie: null,
  [POPULAR_MOVIES]: null,
  [TOP_RATED_MOVIES]: null,
  [UPCOMING_MOVIES]: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addNowPlayingMoviesList: (state, action) => {
      state[action.payload.key] = action.payload.payload;
    },
    addTrailerOfMovie: (state, action) => {
      state.trailerOfMovie = action.payload;
    },
  },
});

export const { addNowPlayingMoviesList, addTrailerOfMovie } =
  moviesSlice.actions;
export default moviesSlice.reducer;

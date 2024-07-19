import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
  nowPlayingMoviesList: null,
  trailerOfMovie: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addNowPlayingMoviesList: (state, action) => {
      state.nowPlayingMoviesList = action.payload;
    },
    addTrailerOfMovie: (state, action) => {
      state.trailerOfMovie = action.payload;
    },
  },
});

export const { addNowPlayingMoviesList, addTrailerOfMovie } =
  moviesSlice.actions;
export default moviesSlice.reducer;

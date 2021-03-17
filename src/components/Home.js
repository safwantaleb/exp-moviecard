import React, { useState } from "react";
import { moviesHome } from "./MoviesHome";
import MoviesList from "./MoviesList";
import MoviesAdd from "./MoviesAdd";
import MoviesSearch from "./MoviesSearch";

import "../App.css";

function Home() {
  const [moviesList, setMoviesList] = useState(moviesHome);
  const [nameSearch, setNameSearch] = useState("");
  const [ratingSearch, setRatingSearch] = useState(1);

  const addNewMovie = (e, newMovie) => {
    e.preventDefault();
    setMoviesList([...moviesList, newMovie]);
  };
  return (
    <div>
      <MoviesSearch
        setNameSearch={setNameSearch}
        ratingSearch={ratingSearch}
        setRatingSearch={setRatingSearch}
      />
      <MoviesList
        moviesList={moviesList}
        nameSearch={nameSearch}
        ratingSearch={ratingSearch}
      />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <MoviesAdd addNewMovie={addNewMovie} />
      </div>
    </div>
  );
}

export default Home;

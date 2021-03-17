import React from "react";

import MoviesCard from "./MoviesCard";

const MoviesList = ({ moviesList, nameSearch, ratingSearch }) => {
  return (
    <div>
      {moviesList
        .filter(
          (el) =>
            el.name.toLowerCase().includes(nameSearch.toLowerCase().trim()) &&
            el.rating >= ratingSearch
        )
        .map((el, i) => (
          <MoviesCard key={i} movie={el} />
        ))}
    </div>
  );
};

export default MoviesList;

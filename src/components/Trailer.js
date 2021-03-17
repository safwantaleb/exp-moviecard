import React from "react";
import { Link, useParams } from "react-router-dom";
import { moviesHome } from "./MoviesHome";
const Trailer = () => {
  const { moviesId } = useParams();
  console.log("movie id", moviesId);
  const movie = moviesHome.find((movie) => movie.id === moviesId);
  console.log(movie);

  return (
    <>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/watch?v=dtKMEAXyPkg"
        frameborder="0"
        allow="accelerometer; 
    autoplay; clipboard - write; encrypted - media; gyroscope; picture - in -picture "
        allowfullscreen
        title={movie.name}
      ></iframe>{" "}
      <p> {movie.type} </p>
      <Link to="/">
        <button> home </button>{" "}
      </Link>{" "}
    </>
  );
};
export default Trailer;

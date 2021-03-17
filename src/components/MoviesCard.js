import React from "react";
import { Link } from "react-router-dom";

const MoviesCard = ({ movie: { id, name, date, image, type } }) => {
  return (
    <div>
      <div>
        <img src={image} alt="poster" />
      </div>
      <div>
        <h1>{name}</h1>
        <div>
          <ul>
            <li>{date}</li>
            <li>||</li>
            <li>{type}</li>
          </ul>
        </div>

        <div>
          <a href="https://www.imdb.com/?ref_=nv_home">Read More</a>
        </div>
        <div>
          <Link to={`/trailer/${id}`}>
            <button>WATCH TRAILER</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default MoviesCard;

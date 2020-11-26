import React from "react";
import { Link } from "react-router-dom";

function MovieItem({ movie }) {
  return (
    <div className="movies-item">
      <p className="item-name">{`${movie.name} (${movie.release})`}</p>
      <p className="item-description">{movie.description}</p>
      <Link to={`/movie/${movie.id}`} className="item-play">
        Play Now
      </Link>
    </div>
  );
}

export default MovieItem;

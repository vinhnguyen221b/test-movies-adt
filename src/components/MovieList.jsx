import React, { useEffect } from "react";
import MovieItem from "./common/MovieItem.jsx";
import { connect } from "react-redux";
import { getMovies } from "../redux/actions/movieAction";
function MovieList(props) {
  const arr = [1, 2, 3, 4, 5, 6];
  useEffect(() => {
    props.getMovies();
  }, []);
  console.log(props.movies);
  return (
    <div className="movies-wrapper">
      {props.movies &&
        props.movies.map((m) => <MovieItem key={m.id} movie={m} />)}
    </div>
  );
}

const mapStateToProps = (state) => ({
  movies: state.movies.items,
});

export default connect(mapStateToProps, { getMovies })(MovieList);

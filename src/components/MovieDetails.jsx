import React, { useEffect } from "react";
import VideoPlayer from "./common/VideoPlayer.jsx";
import { connect } from "react-redux";
import { getMovieDetail } from "../redux/actions/movieAction";
import NotFound from "./NotFound.jsx";
function MovieDetails(props) {
  const id = props.match.params.id;
  useEffect(() => {
    props.getMovieDetail(id);
  }, []);
  console.log(props.movie);
  return (
    <div>
      {props.movie && Object.keys(props.movie).length !== 0 ? (
        <VideoPlayer src={props.movie.video} />
      ) : (
        <h1>Movie not found</h1>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  movie: state.movies.item,
});

export default connect(mapStateToProps, { getMovieDetail })(MovieDetails);

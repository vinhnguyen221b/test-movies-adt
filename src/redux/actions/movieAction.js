import { GET_MOVIES, GET_MOVIES_DETAIL, POST_MOVIES } from "./type";
import data from "../../data.json";
// export const getMovies = () => (dispatch) => {
//   fetch("../../data.json", {
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//   })
//     .then((res) => res.json())
//     .then((movies) => {
//       dispatch({
//         type: GET_MOVIES,
//         payload: movies,
//       });
//     });
// };

export const getMovies = () => (dispatch) => {
  dispatch({
    type: GET_MOVIES,
    payload: data,
  });
};

export const getMovieDetail = (id) => (dispatch) => {
  const movie = data.find((m) => m.id == id);
  dispatch({
    type: GET_MOVIES_DETAIL,
    payload: movie,
  });
};

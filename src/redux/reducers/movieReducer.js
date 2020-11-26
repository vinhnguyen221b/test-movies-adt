import { GET_MOVIES, GET_MOVIES_DETAIL, POST_MOVIES } from "../actions/type";

const initialState = {
  items: [],
  item: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        items: action.payload,
      };
    case GET_MOVIES_DETAIL:
      return {
        ...state,
        item: action.payload,
      };

    default:
      return state;
  }
}

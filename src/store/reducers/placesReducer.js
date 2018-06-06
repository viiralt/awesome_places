import { ADD_PLACE, DELETE_PLACE } from '../actions/actionTypes';
import placeImage from '../../assets/kalen.jpg';

const initialState = {
  places: [],
};

const placesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: Math.random().toString(),
          name: action.payload,
          image: placeImage,
        }),
      };
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => place.key !== action.payload),
      };
    default:
      return state;
  }
};

export default placesReducer;

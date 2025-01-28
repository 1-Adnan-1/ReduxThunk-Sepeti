import ActionTypes from "../actionTypes";

const initialState = {
  isLoading: false,
  error: null,
  data: [],
};

const basketReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      return { ...state, data: state.data.concat(action.payload) };
    case ActionTypes.UPDATE_CART:
      const updateArr = state.data.map((i) =>
        i.id === action.payload.id ? action.payload : i
      );
      return { ...state, data: updateArr };
    case ActionTypes.ERROR_CART:
      return { ...state, error: action.payload };
    case ActionTypes.DELETE_FROM_CART:
      const filtred = state.data.filter((i) => i.id !== action.payload);
      return { ...state, data: filtred };
    default:
      return state;
  }
};

export default basketReducer;

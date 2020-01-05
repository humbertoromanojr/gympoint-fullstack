const initialState = {
  data: [],
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case '@registration/GET_SUCCESS':
      return { ...state, data: action.payload.data };

    case '@registration/DELETE_REQUEST':
      return {
        ...state,
        data: state.data.filter(registration => registration.id !== action.id),
      };

    default:
      return state;
  }
}

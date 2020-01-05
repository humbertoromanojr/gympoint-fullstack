const initialState = {
  data: [],
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case '@checkIn/GET_SUCCESS':
      return {
        ...state,
        data: action.payload.data,
      };

    case '@checkIn/DELETE_REQUEST':
      // const { id } = action.payload;

      return {
        ...state,
        data: state.data.filter(checkIn => checkIn.id !== action.id),
      };

    default:
      return state;
  }
}

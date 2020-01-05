const initialState = {
  data: [],
  loading: false,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case '@helpOrder/GET_SUCCESS':
      return {
        ...state,
        loading: true,
        data: action.payload.data,
      };

    case '@helpOrder/DELETE_REQUEST':
      // const { id } = action.payload;

      return {
        ...state,
        loading: false,
        data: state.data.filter(helpOrder => helpOrder.id !== action.id),
      };

    default:
      return state;
  }
}

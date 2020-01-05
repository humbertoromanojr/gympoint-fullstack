const initialState = {
  data: [],
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case '@student/GET_SUCCESS':
      return {
        ...state,
        data: action.payload.data,
      };

    case '@student/DELETE_REQUEST':
      const { id } = action.payload;
      return {
        ...state,
        data: state.data.filter(student => student.id !== id),
      };

    default:
      return state;
  }
}

const initialState = {
  data: [],
};

export default function planReducer(state = initialState, action) {
  switch (action.type) {
    case '@plan/GET_SUCESS':
      return {
        ...state,
        data: action.payload.data,
      };

    case '@plan/DELETE_REQUEST':
      const { id } = action.payload;
      return {
        ...state,
        data: state.data.filter(plan => plan.id !== id),
      };

    default:
      return state;
  }
}

const initialState = {
  data: [],
  loading: false,
};

export default function newQuestionReducer(state = initialState, action) {
  switch (action.type) {
    case '@newQuestion/GET_SUCESS':
      return {
        ...state,
        loading: true,
        data: action.payload.data,
      };

    case '@newQuestion/DELETE_REQUEST':
      // const { id } = action.payload;

      return {
        ...state,
        loading: false,
        data: state.data.filter(newQuestion => newQuestion.id !== action.id),
      };

    default:
      return state;
  }
}

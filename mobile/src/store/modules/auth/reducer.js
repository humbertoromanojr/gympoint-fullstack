import produce from 'immer';

const initialState = {
  token: null,
  id: null,
  signed: false,
  loading: false,
};

export default function auth(state = initialState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SIGN_IN_SUCCESS': {
        draft.token = action.payload.token;
        draft.id = action.payload.id;
        draft.signed = true;
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.token = null;
        draft.id = null;
        draft.signed = false;
        break;
      }

      default:
    }
  });
}

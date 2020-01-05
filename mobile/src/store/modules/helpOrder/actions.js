export function getHelpOrdersRequest() {
  return {
    type: '@helpOrder/GET_REQUEST',
  };
}

export function getHelpOrdersSuccess(data) {
  return {
    type: '@helpOrder/GET_SUCCESS',
    payload: { data },
  };
}

export function updateHelpOrderRequest(id, answer) {
  return {
    type: '@helpOrder/UPDATE_REQUEST',
    payload: {
      id,
      answer,
    },
  };
}

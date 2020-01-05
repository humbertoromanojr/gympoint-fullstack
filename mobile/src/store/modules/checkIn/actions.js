export function getCheckInsRequest() {
  return {
    type: '@checkIn/GET_REQUEST',
  };
}

export function getCheckInsSuccess(data) {
  return {
    type: '@checkIn/GET_SUCCESS',
    payload: { data },
  };
}

export function updateCheckInRequest(id, answer) {
  return {
    type: '@checkIn/UPDATE_REQUEST',
    payload: {
      id,
      answer,
    },
  };
}

export function createCheckInRequest(student_id) {
  return {
    type: '@checkIn/CREATE_REQUEST',
    payload: { student_id },
  };
}

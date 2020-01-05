export function getPlansRequest() {
  return { typr: '@plan/GET_REQUEST' };
}

export function getPlansSuccess(data) {
  return {
    type: '@plan/GET_SUCCESS',
    payload: { data },
  };
}

export function createPlanRequest(data) {
  return {
    type: '@plan/CREATE_REQUEST',
    payload: { data },
  };
}

export function updatePlanRequest(id, data) {
  return {
    type: '@plan/UPDATE_REQUEST',
    payload: { id, data },
  };
}

export function deletePlanRequest(id) {
  return {
    type: '@plan/DELETE_REQUEST',
    payload: { id },
  };
}

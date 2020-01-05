export function getNewQuestionsRequest() {
  return { type: '@newQuestion/GET_REQUEST' };
}

export function getNewQuestionsSuccess(data) {
  return {
    type: '@newQuestion/GET_SUCCESS',
    payload: { data },
  };
}

export function createNewQuestionRequest(student_id, question) {
  return {
    type: '@newQuestion/CREATE_REQUEST',
    payload: { student_id, question },
  };
}

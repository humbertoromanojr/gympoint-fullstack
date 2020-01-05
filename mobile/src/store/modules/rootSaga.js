import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import helpOrder from './helpOrder/sagas';
import newquestion from './newquestion/sagas';
import checkIn from './checkIn/sagas';

export default function* rootSaga() {
  return yield all([auth, helpOrder, newquestion, checkIn]);
}

import { combineReducers } from 'redux';

import auth from './auth/reducer';
import helpOrder from './helpOrder/reducer';
import newquestion from './newquestion/reducer';
import checkIn from './checkIn/reducer';

export default combineReducers({
  auth,
  helpOrder,
  newquestion,
  checkIn,
});

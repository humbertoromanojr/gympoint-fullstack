import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import students from './students/reducer';
import plan from './plan/reducer';
import registrations from './registrations/reducer';
import helpOrders from './helpOrders/reducer';

export default combineReducers({
  auth,
  user,
  students,
  plan,
  registrations,
  helpOrders,
});

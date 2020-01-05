import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Plans from '~/pages/Plans';
import PlanForm from '~/pages/PlanForm';
import Students from '~/pages/Students';
import StudentForm from '~/pages/StudentForm';
import Registrations from '~/pages/Registrations';
import RegistrationForm from '~/pages/RegistrationForm';
import HelpOrders from '~/pages/HelpOrders';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Students} isPrivate />
      <Route path="/students/:id/edit" component={StudentForm} isPrivate />
      <Route path="/students/new" component={StudentForm} isPrivate />
      <Route path="/plans" exact component={Plans} isPrivate />
      <Route path="/plans/:id/edit" component={PlanForm} isPrivate />
      <Route path="/plans/new" component={PlanForm} isPrivate />
      <Route path="/registrations" exact component={Registrations} isPrivate />
      <Route
        path="/registrations/:id/edit"
        component={RegistrationForm}
        isPrivate
      />
      <Route path="/registrations/new" component={RegistrationForm} isPrivate />
      <Route path="/help-orders" exact component={HelpOrders} isPrivate />
    </Switch>
  );
}

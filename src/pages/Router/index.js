import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Login from 'pages/Login';
import Home from 'pages/Home';
import Users from 'pages/Customers';
import Profile from 'pages/Profile';
import ResetPassword from 'pages/ResetPassword';
import NotFound from 'pages/NotFound';
import User from 'pages/Customer';
import Section from 'pages/Section';
import Channels from 'pages/Channels';
import Subscriptions from 'pages/Subscriptions';
import paths from './paths';
import PrivateRoute from './PrivateRoute';

const RouterComponent = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={paths.LOGIN} component={Login} />
        <Route exact path={paths.RESET_PASSWORD} component={ResetPassword} />
        <PrivateRoute path={paths.ADD_USER} component={User} />
        <PrivateRoute path={paths.MODIFY_USER} component={User} />
        <PrivateRoute path={paths.USERS} component={Users} />
        <PrivateRoute path={paths.PROFILE} component={Profile} />
        <PrivateRoute path={paths.SECTION} component={Section} />
        <PrivateRoute path={paths.CHANNELS} component={Channels} />
        <PrivateRoute path={paths.SUBSCRIPTIONS} component={Subscriptions} />
        <PrivateRoute path={paths.ROOT} component={Home} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default RouterComponent;

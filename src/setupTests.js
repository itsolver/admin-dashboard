/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import deepFreeze from 'deep-freeze';
import { configure, mount, shallow } from 'enzyme';
import { BrowserRouter, MemoryRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

configure({ adapter: new Adapter() });

global.reducerTester = reducer => (currentState, action, expectedState) => {
  if (currentState && typeof currentState === 'object') {
    deepFreeze(currentState);
  }
  const newState = reducer(currentState, action);
  return expect(newState).toEqual(expectedState);
};

const mockedStore = (initial = {}) =>
  configureStore([
    /* place middlewares here */
  ])(initial);

// Use this to test mounted components w/ store connection
global.mountWithProvider = children => initialState => {
  const store = mockedStore(initialState);
  return {
    component: mount(
      <BrowserRouter keyLength={0}>
        <Provider store={store}>{children}</Provider>
      </BrowserRouter>
    ),
    store
  };
};

global.shallowWithProvider = children => initialState => {
  const store = mockedStore(initialState);
  return {
    component: shallow(
      <BrowserRouter keyLength={0}>
        <Provider store={store}>{children}</Provider>
      </BrowserRouter>
    ),
    store
  };
};

global.shallowWithRouter = children => (path, entries) => {
  return {
    component: shallow(
      <MemoryRouter initialEntries={[...entries]} initialIndex={0}>
        <Route path={path}>{children}</Route>
      </MemoryRouter>
    )
  };
};

global.mountWithRouter = children => (path, entries) => {
  return {
    component: mount(
      <MemoryRouter initialEntries={[...entries]}>
        <Route path={path}>{children}</Route>
      </MemoryRouter>
    )
  };
};

import React from 'react';

import Users from '.';

describe('<Users /> rendering', () => {
  it('should render without crashing', () => {
    const { component } = shallowWithProvider(<Users />)({
      users: {},
      auth: {
        userData: {}
      }
    });

    expect(component).toMatchSnapshot();
  });
});

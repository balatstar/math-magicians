import * as React from 'react';
import { render } from '@testing-library/react';
import Home from '../components/Home';

describe('Home', () => {
  it('renders Home component', () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});

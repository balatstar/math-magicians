import * as React from 'react';
import { render } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('Calculator', () => {
  it('renders Calculator component', () => {
    const { container } = render(<Calculator />);
    expect(container).toMatchSnapshot();
  });
});
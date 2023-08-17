import * as React from 'react';
import { render } from '@testing-library/react';
import QuoteDisplay from '../components/Quote';

describe('QuoteDisplay', () => {
  it('renders QuoteDisplay component', () => {
    const { container } = render(<QuoteDisplay category="education" />);
    expect(container).toMatchSnapshot();
  });
});

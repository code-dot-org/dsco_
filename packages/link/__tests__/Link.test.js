import React from 'react';
import {render} from '@testing-library/react';
import Link from '../lib/Link';

test('renders', () => {
  render(<Link text="hi" href="/some/url" />);
});

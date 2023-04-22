import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorPage from '../ErrorPage';

test('renders Error page', () => {
  render(<ErrorPage message='Error' />);
  const errorMessage = screen.getByText(/Error/i);
  expect(errorMessage).toBeInTheDocument();
});

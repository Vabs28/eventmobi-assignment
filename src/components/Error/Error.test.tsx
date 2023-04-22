import React from 'react';
import { render, screen } from '@testing-library/react';
import Error from './Error';

test('renders Error component with a message prop', () => {
  render(<Error message='Error' />);
  const errorMessage = screen.getByText(/Error/i);
  expect(errorMessage).toBeInTheDocument();
});

test('renders Error component without a message prop', () => {
    render(<Error testId='error' />);
    const errorComponent = screen.getByTestId('error');
    expect(errorComponent).toBeInTheDocument();
  });

import React from 'react';
import { render, screen } from '@testing-library/react';
import Loader from './Loader';

test('renders Loader component with a message prop', () => {
  render(<Loader message='It could take a while... be patient' />);
  const errorMessage = screen.getByText(/It could take a while... be patient/i);
  expect(errorMessage).toBeInTheDocument();
});

test('renders Loader component without a message prop', () => {
    render(<Loader testId='loader' />);
    const errorComponent = screen.getByTestId('loader');
    expect(errorComponent).toBeInTheDocument();
  });

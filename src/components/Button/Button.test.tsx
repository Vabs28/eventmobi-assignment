import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

test('renders Button component', () => {
  
    render(<Button label="Submit" onClick={() => {}} />);
  expect(screen.getByText("Submit")).toBeInTheDocument();

});
test('callback function', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick} label="Submit" />)
    fireEvent.click(screen.getByText(/Submit/i))
    expect(handleClick).toHaveBeenCalledTimes(1)
});
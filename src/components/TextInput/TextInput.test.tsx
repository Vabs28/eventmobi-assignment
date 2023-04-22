import { render, screen, fireEvent } from '@testing-library/react';
import TextInput from './TextInput';

test('renders TextInput component', () => {
  
    render(<TextInput inputType="text" onChange={() => {}} placeholder="Username" />);
  expect(screen.getByPlaceholderText('Username')).toBeInTheDocument();

});
test('callback function onChaange', () => {
    const handleChange = jest.fn();
    render(<TextInput onChange={handleChange} inputType="text" placeholder="Username" />);
    fireEvent.change(screen.getByPlaceholderText('Username'), {target: {value: 'user'}});
    expect(handleChange).toHaveBeenCalledTimes(1);
});
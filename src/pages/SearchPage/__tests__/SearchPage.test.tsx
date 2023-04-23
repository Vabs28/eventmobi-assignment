import { render, screen, fireEvent, waitForElementToBeRemoved } from '@testing-library/react';
import SearchPage from '../SearchPage';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: () => jest.fn(),
 }));

describe('SearchPage page', () => {
    
    it('should render SearchPage ', async () => {
        const {getByText, getByPlaceholderText} = render(<SearchPage />);
        expect(getByPlaceholderText("Enter username here")).toBeInTheDocument();
        expect(getByText(/Submit/i)).toBeInTheDocument;
    });
});
import { render, screen, fireEvent, waitForElementToBeRemoved } from '@testing-library/react';
import ViewForks from '../ViewForks';
import axios from '../../../__mocks__/axios';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: () => jest.fn(),
 }));

describe('ViewForks page for error returned from Gist API', () => {
    
    it('should render ViewForks with an error message ', async () => {
        const {getByText} = render(<ViewForks />);
        await waitForElementToBeRemoved(() => getByText(/Loading/i));
        expect(getByText(/Error/i)).toBeInTheDocument();
    });
});

describe('ViewForks page for success returned from Gist API', () => {
    const apiResponse = {
        forks: [
            {
                id: '123',
                user: {
                    login: 'user1',
                    avatar_url: 'https://avatar-url'
                }
            },
            {
                id: '456',
                user: {
                    login: 'user2',
                    avatar_url: 'https://avatar-url'
                }
            },
            {
                id: '789',
                user: {
                    login: 'user3',
                    avatar_url: 'https://avatar-url'
                }
            },
            {
                id: '999',
                user: {
                    login: 'user4',
                    avatar_url: 'https://avatar-url'
                }
            }
        ]
    }
    it('should render ViewForks with recent 3 users who forked it ', async () => {
        axios.get.mockImplementationOnce((url) : Promise<any> => {
            return Promise.resolve({
                data: {...apiResponse}
            });
        })
        const {getByText, queryByText} = render(<ViewForks />);
        await waitForElementToBeRemoved(() => getByText(/Loading/i));
        expect(queryByText(/Error/i)).toBeNull();
        expect(queryByText(/user1/i)).toBeNull();
        expect(getByText(/user2/i)).toBeInTheDocument();
        expect(getByText(/user3/i)).toBeInTheDocument();
        expect(getByText(/user4/i)).toBeInTheDocument();
    });
})


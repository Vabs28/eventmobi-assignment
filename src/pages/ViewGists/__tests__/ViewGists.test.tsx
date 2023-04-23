import { render, screen, fireEvent, waitForElementToBeRemoved } from '@testing-library/react';
import ViewGists from '../ViewGists';
import axios from '../../../__mocks__/axios';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: () => jest.fn(),
 }));

describe('ViewGists page for error returned from Gist API', () => {
    
    it('should render ViewGists with an error message ', async () => {
        const {getByText} = render(<ViewGists />);
        await waitForElementToBeRemoved(() => getByText(/Loading/i));
        expect(getByText(/Error/i)).toBeInTheDocument();
    });
});

describe('ViewGists page for success returned from Gist API', () => {
    const apiResponse = {
        data: [
            {
                public: true, 
                id: "123", 
                files: {
                    "a.js": {},
                    "b.py": {},
                    "c.tsx": {},
                    "d.js": {},
                    "e.py": {},
                    "f.tsx": {}
                }
            },
            {
                public: true, 
                id: "456", 
                files: {
                    "a.doc": {},
                    "b.test.js": {},
                    "c.tsx": {},
                    "d.js": {},
                    "e.py": {},
                    "f.tsx": {}
                }
            },
            {
                public: false, 
                id: "789", 
                files: {
                    "a.doc": {}
                }
            }
        ]
    }
    it('should render ViewGists with gists details and file badges ', async () => {
        axios.get.mockImplementationOnce((url) => {
            return Promise.resolve({
                ...apiResponse
            });
        })
        const {getByText, queryByText} = render(<ViewGists />);
        await waitForElementToBeRemoved(() => getByText(/Loading/i));
        expect(queryByText(/Error/i)).toBeNull();
        expect(getByText(/123/i)).toBeInTheDocument();
    });

    it('should render ViewGists with gists details which are public only ', async () => {
        axios.get.mockImplementationOnce((url) => {
            return Promise.resolve({
                ...apiResponse
            });
        })
        const {getByText, queryByText} = render(<ViewGists />);
        await waitForElementToBeRemoved(() => getByText(/Loading/i));
        expect(getByText(/123/i)).toBeInTheDocument();
        expect(getByText(/456/i)).toBeInTheDocument();
        expect(queryByText(/789/i)).toBeNull();
    });
})


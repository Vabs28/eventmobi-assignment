import {GET_FORKS_BY_GISTS_ID, GET_FORKS_BY_GISTS_ID_ERROR, GET_FORKS_BY_GISTS_ID_SUCCESS} from './GetForksTypes';

export interface GetForksInitialStateType {
    data: {
        forks: Array<object>
    },
    loading: boolean,
    error: any
};

interface actionType {
    type: string, 
    payload: {
        forks: Array<object>
    },
}

export const getForksInitialState: GetForksInitialStateType = {
    data: {
        forks: []
    },
    loading: false,
    error: ''
};

export default function reducer(state = getForksInitialState, action: actionType) : GetForksInitialStateType {
    switch(action.type) {
        case GET_FORKS_BY_GISTS_ID:
            return {
                ...state,
                loading: true
            };
        case GET_FORKS_BY_GISTS_ID_SUCCESS: 
            return {
                ...state,
                data: {
                    forks: action.payload.forks
                },
                loading: false
            };
        case GET_FORKS_BY_GISTS_ID_ERROR: 
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default: {
            return state;
        }
    }
}

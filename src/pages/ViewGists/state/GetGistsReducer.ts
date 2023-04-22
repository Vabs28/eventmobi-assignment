import {GET_GISTS_BY_USERNAME, GET_GISTS_BY_USERNAME_ERROR, GET_GISTS_BY_USERNAME_SUCCESS} from './GetGistsTypes';

export interface GetGistsInitialStateType {
    data: object | Array<object>,
    loading: boolean,
    error: any
};

interface actionType {
    type: string, 
    payload: object | Array<object>,
}

export const getGistsInitialState: GetGistsInitialStateType = {
    data: [],
    loading: false,
    error: ''
};

export default function reducer(state = getGistsInitialState, action: actionType) : GetGistsInitialStateType {
    switch(action.type) {
        case GET_GISTS_BY_USERNAME:
            return {
                ...state,
                loading: true
            };
        case GET_GISTS_BY_USERNAME_SUCCESS: 
            return {
                ...state,
                data: action.payload,
                loading: false
            };
        case GET_GISTS_BY_USERNAME_ERROR: 
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

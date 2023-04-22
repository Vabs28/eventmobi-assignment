import {GET_FORKS_BY_GISTS_ID, GET_FORKS_BY_GISTS_ID_ERROR, GET_FORKS_BY_GISTS_ID_SUCCESS} from './GetForksTypes';
import httpRequest from '../../../utils/HttpRequest';

export function getForksByGistsId(dispatch: React.Dispatch<{
    type: string;
    payload: {forks: Array<object>};
}>, url: string) {
    dispatch({ type: GET_FORKS_BY_GISTS_ID, payload: {forks: []} });
    httpRequest.get({url: url})
    .then( (response)=> {
        dispatch({ type:GET_FORKS_BY_GISTS_ID_SUCCESS, payload: response.data})
    })
    .catch( (error) => {
        dispatch({type: GET_FORKS_BY_GISTS_ID_ERROR, payload: error});
    })
}
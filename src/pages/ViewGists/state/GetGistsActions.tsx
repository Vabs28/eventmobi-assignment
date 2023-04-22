import {GET_GISTS_BY_USERNAME, GET_GISTS_BY_USERNAME_ERROR, GET_GISTS_BY_USERNAME_SUCCESS} from './GetGistsTypes';
import httpRequest from '../../../utils/HttpRequest';

export function getGistsByUsername(dispatch: React.Dispatch<{
    type: string;
    payload: object;
}>, url: string) {
   
    dispatch({ type: GET_GISTS_BY_USERNAME, payload: {} });
    
    httpRequest.get({url: url})
    .then( (response)=> {
        dispatch({ type:GET_GISTS_BY_USERNAME_SUCCESS, payload: response.data})
    })
    .catch( (error) => {
        dispatch({type: GET_GISTS_BY_USERNAME_ERROR, payload: error});
    })
}
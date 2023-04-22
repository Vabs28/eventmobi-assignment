import React, { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import reducer, {getForksInitialState} from './state/GetForksReducer';
import { getForksByGistsId } from './state/GetForksActions';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/Error/Error';

interface ForkRecordType {
    forks: Array<{id: string,
    user: {
        login: string,
        avatar_url: string
    }}>
}

export default function ViewForks(){
    const { username, gistsid } = useParams();
    const [state, dispatch] = useReducer(reducer, getForksInitialState);
    const isError = state.error || (state.data.forks.length == 0);

    // fetching users who forked the gist
    useEffect(() => {
        getForksByGistsId(dispatch, `gists/${gistsid}`);
    }, [])

    // Open the fork on selecting the fork link
    function onLinkClick(e: React.MouseEvent<HTMLLIElement, MouseEvent>) {
        const user = e.currentTarget.getAttribute("data-username");
        const forkId = e.currentTarget.getAttribute("data-id");
        user && forkId && window.open(`https://gist.github.com/${user}/${forkId}`);
    }

    // render the list item containing users who forked it
    function renderData(records: ForkRecordType) {
        if(!records.forks) return;

        // Pick the last 3 records as the data is returned with oldest on the top
        const topUserRecords = records.forks.slice(records.forks.length - 3);

        const elements = topUserRecords.map((record) => {
         return (<li key={record.id} data-id={record.id} data-username={record.user.login} onClick={onLinkClick}>
            <img alt='avatar image' src={record.user.avatar_url} width={50} /> 
            <span>{record.user.login}</span>
            </li>)
        });
        return elements;
     }
    
    return(
        <>
            <h1>Last 3 users who forked gist id {gistsid}</h1>
            <h4>Select one to open fork</h4>
            {state.loading ? (<Loader />) : (
                isError ? (<Error  message="An Error Occurred or no data present for the gists"/>) :
                <ul>{ renderData(state.data as ForkRecordType) }</ul>
            )}
        </>
    );
}
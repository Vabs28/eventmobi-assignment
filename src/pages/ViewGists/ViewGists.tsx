import React, {useEffect, useReducer} from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import reducer, {getGistsInitialState} from './state/GetGistsReducer';
import {getGistsByUsername} from './state/GetGistsActions';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/Error/Error';

export default function ViewGists() {
    const navigate = useNavigate();
    const [state, dispatch] = useReducer(reducer, getGistsInitialState);
    const { username } = useParams();
    const url = `/users/${username}/gists`;
    const isError = state.error || (state.data as Array<object>).length == 0;

    // fetching the gists for the username
    useEffect(() => {
        getGistsByUsername(dispatch, url);
    }, []);

    // Navigate to next page to show top 3 users who have forked this gist
    function onListItemClick(event : React.MouseEvent<HTMLLIElement, MouseEvent>) {
        const id = event.currentTarget.getAttribute('data-id');
        navigate(`/users/${username}/gists/${id}/forks`);
    }
    function getPublicGists(records: any) {
        // return only public gists
        return records.filter((record: any) => record.public);
    }
    function getUniqueFileExtensions(gistRecord: any) {
        // Get All the file extensions
        const fileExtensions = Object.keys(gistRecord.files).map( (element) => {
            const fileNameSplits = element.split(".");
            return fileNameSplits[fileNameSplits.length-1]
        });
        // remove the duplicates
        return Array.from(new Set(fileExtensions));
    }
    // render a list with received records
    function renderData(records: Array<object>) {
       const publicRecords = getPublicGists(records);
       const elements = publicRecords.map((record: any) => {
        const uniqueFileExtensions = getUniqueFileExtensions(record);
        
        return (<li key={record.id} data-id={record.id} onClick={onListItemClick}>
                <div>Gist ID: {record.id}</div>
                <div>File Types: {uniqueFileExtensions.toString()}</div>
            </li>)
       });
       return elements;
    }
    
    return(
        <>
            <h1>Public Gists Lists for user {username}</h1>
            <h4>Select one to continue</h4>
            {state.loading ? (<Loader />) : (
                isError ? (<Error message="An Error Occurred or no data present for the user" />) :
                <ul>{ renderData(state.data as Array<object>) }</ul>
            )}
        </>
    ) 
};

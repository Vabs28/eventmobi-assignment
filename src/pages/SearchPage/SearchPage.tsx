import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import TextInput from '../../components/TextInput/TextInput';


export default function SearchPage() {
    const navigate = useNavigate();
    const [username, setUsername] = useState<string>("");

    function onChangeInput(event:React.ChangeEvent<HTMLInputElement>) {
        setUsername(event.target.value)
    }
    function navigateToListPage() {
        navigate(`/users/${username}/gists`);
    }
    
    return(
        <>
            <h1>Search Gists by Username</h1>
            <TextInput placeholder="Enter username here" onChange={onChangeInput} inputType="text"></TextInput>
            <Button label="Search Gists" onClick={navigateToListPage} isDisabled={username ? false : true}></Button>
        </>
    )
};
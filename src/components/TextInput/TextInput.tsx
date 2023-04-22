import React from 'react';
import './TextInput.css';
interface TextInputProps {
    placeholder?: string,
    inputType: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>
}
const TextInput = (props: TextInputProps) => {
    return (
        <input type={props.inputType} placeholder={props.placeholder} onChange={props.onChange}></input>
    )
}
export default TextInput;
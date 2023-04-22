import React from 'react';
import './Button.css';

interface ButtonProps {
    label: string,
    isDisabled?: boolean,
    onClick: React.MouseEventHandler<HTMLButtonElement>
}
export default function Button(props: ButtonProps) {
    const status = true;
    return (
        <button onClick={props.onClick} disabled={props.isDisabled ? props.isDisabled : false}> 
        {props.label}
        </button>
    )
}
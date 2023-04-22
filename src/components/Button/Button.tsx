import React from 'react';
import './Button.css';

interface ButtonProps {
    label: string,
    onClick: React.MouseEventHandler<HTMLButtonElement>
}
export default function Button(props: ButtonProps) {
    const status = true;
    return (
        <button onClick={props.onClick}> 
        {props.label}
        </button>
    )
}
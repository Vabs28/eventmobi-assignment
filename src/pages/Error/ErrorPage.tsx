import React from 'react';

export default function ErrorPage({message = 'An error has occurred'}) {
    return(
        <div>{message}</div>
    )
};

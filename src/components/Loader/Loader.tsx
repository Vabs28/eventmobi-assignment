import React from 'react';

interface LoaderPropType {
    testId? : string,
    message?: string
}

export default function Loader({testId = "", message = 'Loading ...'} : LoaderPropType) {
    return (
        <div data-testid={testId}>{message}</div>
    )
}
import React from 'react';

interface ErrorPropType {
    testId? : string,
    message?: string
}

export default function Error({testId = "", message = 'An error has occurred'} : ErrorPropType) {
    return(
        <div data-testid={testId}>{message}</div>
    )
};

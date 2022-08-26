import React from 'react';
import { StyledDisplay } from './styles/StyledDisplay';

const Display = ({ title, value }) => {
    return (
        <StyledDisplay >
            <h1>{title}</h1>
            <p>{value}</p>
        </StyledDisplay>
    )
}

export default Display;
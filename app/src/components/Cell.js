import React from 'react';
import { StyledCell } from './styles/StyledCell';
import { TETROMINOES } from '../common/constants/tetrominoes';

const Cell = ({ type }) => {
    const typeTetrominoe = typeof type === 'string' ? type.charAt(0) : type;
    const borderTetrominoe = typeof type === 'string' ? type.substring(1, type.length) : type;

    return (
        <StyledCell type={typeTetrominoe} color={TETROMINOES[typeTetrominoe].color} border={borderTetrominoe.toString()} />
    )
}

export default Cell;
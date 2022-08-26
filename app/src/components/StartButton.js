
import React from 'react';
import { StyledStartButton } from './styles/StyledStartButton';

const StartButton = ({ onClick, isDisabled }) =>
    (<StyledStartButton disabled={isDisabled} onClick={onClick}>Start Game</StyledStartButton>)

export default StartButton;
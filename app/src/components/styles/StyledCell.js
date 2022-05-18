import styled from 'styled-components';

export const StyledCell = styled.div`
    width: auto;
    background: rgba(${props => props.color}, 0.8);
    border: ${props => (props.type === 0 ? '0px solid' : '4px solid')};
    border-bottom-color: rgba(${props => props.color}, 0.1);
    border-right-color: rgba(${props => props.color}, 1);
    border-top-color: rgba(${props => props.color}, 1);
    border-left-color: rgba(${props => props.color}, 0.3);
    border-top-left-radius: ${props => (props.border.includes('1') ? '15px' : '0px')};
    border-top-right-radius: ${props => (props.border.includes('2') ? '15px' : '0px')};
    border-bottom-right-radius: ${props => (props.border.includes('3') ? '15px' : '0px')};
    border-bottom-left-radius: ${props => (props.border.includes('4') ? '15px' : '0px')};
`
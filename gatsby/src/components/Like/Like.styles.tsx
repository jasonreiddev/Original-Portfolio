import styled from 'styled-components';

export const LikeStyles = styled.div`
    text-Align: center;
    user-select: none;
    width: 50px;
`;

export const LikeInnerStyles = styled.span`
    font-weight: bold;
    svg {
        font-size: 25px;
        transform: translateY(0%);
        cursor: pointer;     
    }
    div {
        margin: 0;
        height: 20px;
    }
`;

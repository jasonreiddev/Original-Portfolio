import styled from 'styled-components';

export const HoverColorStyles = styled.span`
  .highlight{
    display: block;
    width: fit-content;
    transition: background-position 1s, color 0.5s;
    background-size: 200% 100%;
  }
  &:hover {
    .highlight {
      background-position: -100% 0;
      background-image: linear-gradient(to right, transparent  50%, var(--sitePrimaryAccent) 50%);
      background-position: -100% 0;
    }
  }
`;

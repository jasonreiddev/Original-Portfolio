import styled from 'styled-components';

export const PaginationStyles = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-items: center;
  margin: 1rem 0 1rem 0;
  border-radius: 5px;
  text-align: center;
  & > * {
    font-weight: bold;
    font-size: 16pt;
    color: var(--sitePrimaryAccent);
    padding: 1rem;
    flex: 1;
    text-decoration: none;
    &[aria-current],
    &.current {
      color: var(--siteSecondary);
      cursor: default;
    }
    &[disabled] {
      pointer-events: none;
      color: var(--siteSecondary);
    }
  }
  @media (max-width: 800px) {
    .word {
      display: none;
    }
    font-size: 1.4rem;
  }
`;

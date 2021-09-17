import styled from 'styled-components';

export const HeaderStyles = styled.header`
  background: var(--sitePrimaryAccent);
  flex-Grow: 0;
  
  & .active{
    color: var(--siteMain);
  }
`;

export const ContainerStyles = styled.div`
  width: Calc(100% - 3rem);
  max-width: 1080px;
  margin: auto;
  font-size: 14pt;
  flex: 1;
  font-size: 1.2em;
`;

export const TitleLinkStyles = styled.div`
  text-decoration: none;
`;

export const UlStyles = styled.ul`
  display: flex;
  flex-flow: row wrap;
  padding: 0;
  margin-left: -1rem;

  li {
    padding: 1rem;
    list-style-type: none;
  }
`;

export const ThemeIconStyles = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

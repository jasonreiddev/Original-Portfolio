import styled from 'styled-components';

export const SiteBorderStyles = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const SVGStyles = styled.svg`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  transform: unset;
  svg {
    fill: var(--siteOffMain);
    font-size: 25px;
  }
`;

export const MainStyles = styled.main`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContentStyles = styled.div`
  max-width: 1080px;
  flex-grow: 2;
  width: 100%;
`;

export const AsideStyles = styled.aside`
  flex-grow: 0;
  @media only screen and (min-width: 1440px)  {
    flex-grow: 1;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  p {
    text-align: center;
  }
`;

export const BodyDivStyles = styled.div`
  width: Calc(100% - 3rem);
  max-width: 1080px;
  margin: auto;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  padding-left: 1rem;
  padding-right: 1rem;
  flex-grow: 1;
  flex-direction: column;
`;

export const FooterStyles = styled.footer`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  svg {
    fill: var(--sitePrimaryAccent);
  }
  .media-links {
    font-size: 30px;
  }
  p {
    letter-spacing: 0px;
  }
`;

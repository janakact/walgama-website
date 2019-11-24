import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  @media (min-width: ${props => props.theme.screen.xs}) {
    max-width: 540px;
  }

  @media (min-width: ${props => props.theme.screen.sm}) {
    max-width: 720px;
  }

  @media (min-width: ${props => props.theme.screen.md}) {
    max-width: 960px;
  }

  @media (min-width: ${props => props.theme.screen.lg}) {
    max-width: 1200px;
  }

  ${props =>
    props.fluid &&
    `
    max-width: 1200px !important;
  `};
`;

export const Section = styled.section`
  padding: 22px 0;
  overflow: hidden;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding: 96px 0;
  }

  ${props =>
    props.accent &&

    `
    background: #3C3B3F;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #605C3C, #3C3B3F);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #605C3C, #3C3B3F); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

`};
`;


export const Panel = styled.section`
  padding: 32px;
  background-color: ${ props => props.dark ? `rgba(0,0,0,0.04)` : `rgba(255,255,255,0.06)`};
  border-radius: 10px;
`
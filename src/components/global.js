import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;

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
  padding: 10px;
  margin: 5px;
  border-radius: 10px;
  background-color: ${props => props.background ? `rgba(255,255,255,0.1)` : ``}
`
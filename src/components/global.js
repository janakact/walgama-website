import styled, {css} from 'styled-components';

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


export const darkBackgroundGradient = css`
  background: #414345;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, #232526, #414345);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, #232526, #414345); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`

export const goldBorder = css`
color: white;
border-width: 3px;
border-style: solid;
border-image: 
    linear-gradient(
      to left, 
      yellow, 
      rgba(0, 0, 0, 0)
    ) 1 100%;
`

export const paperBackground = css`
      background-image: url('/background2.png');
`

export const SliderTitle = styled.h2`
  font-family: ${props => props.theme.font.secondary};
  font-size: 40px;
  color: white;
`
export const SliderContent = styled.p`
  font-family: ${props => props.theme.font.secondary};
  color: ${props => props.theme.color.white.dark};
  font-size: 20px;
`

export const BlackFrame = styled.div`
color: white;
border-width: 3px;
border-style: solid;
border-image: 
    linear-gradient(
      to bottom, 
      gray, 
      rgba(0, 0, 0, 0)
    ) 1 100%;
borderRadius: 10px;
`
import styled, { createGlobalStyle } from 'styled-components';

export const theme = {
  mainLayoutColor: '#E3E2DF',
  color: 'rgba(0, 0, 0, 0.8)',
  // topBarColor: '#BAB2B5',
  topBarColor: 'white',
  logoColor: '#123C69',
  logoColorHover: '#AC3B61',

};

const GlobalStyle = createGlobalStyle`
  body {
    font-family:'Roboto','Arial',sans-serif;
    background-color:${theme.mainLayoutColor};
    color:${(props) => props.theme.color};
    margin:0;
    padding:0;
    align-items:center;
    min-width:800px;
    user-select: none;

  }
`;

export const Container = styled.div`
display:block;
background-color:${(props) => (props.noBackColor ? theme.mainLayoutColor : 'whitesmoke')};
width:1050px;
position:relative;
top:40px;
bottom:0;
left:0;
right:0;
margin:auto;
height: auto;
transition:height 0.5s ease-in;
${({ hidden }) => hidden && `
height:300px;
`}
`;

export default GlobalStyle;

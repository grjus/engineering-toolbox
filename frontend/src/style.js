import styled, { createGlobalStyle } from 'styled-components';

export const theme = {
  mainLayoutColor: '#E3E2DF',
  color: 'rgba(0, 0, 0, 0.8)',
  topBarColor: '#BAB2B5',
  logoColor: '#123C69',
  logoColorHover: '#AC3B61',

};

const GlobalStyle = createGlobalStyle`
  body {
    font-family:'Roboto','Arial',sans-serif;
    background-color:${(props) => props.theme.mainLayoutColor};
    color:${(props) => props.theme.color};
    margin:0;
    padding:0;
    align-items:center;
    min-width:800px;

  }
`;

export const Container = styled.div`
background-color:whitesmoke;
width:80%;
position:relative;
top:40px;
bottom:0;
left:0;
right:0;
margin:auto;
border-radius:45px;
`;

export default GlobalStyle;

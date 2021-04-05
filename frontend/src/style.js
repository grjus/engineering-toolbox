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
*,*::before, *::after{
  box-sizing:border-box;
}
  body {
    font-family:'Roboto','Arial',sans-serif;
    background-color:${theme.mainLayoutColor};
    color:${(props) => props.theme.color};
    margin:0;
    padding:0;
    align-items:center;
    user-select: none;
    letter-spacing:0.5px;
    color:rgba(0,0,0,0.6);

  }
`;

export const Container = styled.div`
display: block;
box-sizing:border-box;
width:70vw;
overflow:auto;
min-width:500px;
@media(max-width:80em){
  width:100vw;
}
display:block;
background-color:${(props) => (props.noBackColor ? theme.mainLayoutColor : 'whitesmoke')};
position:absolute;
top:5rem;
bottom:1em;
left:0;
right:0;
margin:0 auto;
transition:height 0.5s ease-in;
${({ hidden }) => hidden && `
height:300px;
`}
`;

export default GlobalStyle;

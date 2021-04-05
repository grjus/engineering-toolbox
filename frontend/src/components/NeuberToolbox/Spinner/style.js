import styled from 'styled-components';

export const Container = styled.div`
display:flex;
justify-content:flex-start;
position:absolute;
top:7em;
right:10em;
opacity:0;
z-index:999;
transition:opacity 0.2s ease-in;
@media(max-width:80em){
    right:1em;
    top:-3em
}
@media(max-width:20em){
    display:none;
}
${({ isRunning }) => isRunning && `
opacity:1;
`}
`;

export const Message = styled.span`
@media(max-width:28em){
    display:none;
}
font-size:18px;
color:rgba(0,0,0,0.8);
letter-spacing:0.5px;
padding:10px;
word-wrap:break;
white-space: nowrap;

`;

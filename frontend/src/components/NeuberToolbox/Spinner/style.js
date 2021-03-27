import styled from 'styled-components';

export const Container = styled.div`
display:flex;
justify-content:flex-start;
position:absolute;
top:40px;
left:850px;
opacity:0;
z-index:999;
transition:opacity 0.2s ease-in;
${({ isRunning }) => isRunning && `
opacity:1;
`}
`;

export const Message = styled.span`
font-size:18px;
color:rgba(0,0,0,0.8);
letter-spacing:0.5px;
padding:10px;
word-wrap:break;
white-space: nowrap;

`;

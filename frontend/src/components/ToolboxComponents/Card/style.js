import styled from 'styled-components';

export const Container = styled.div`
position:relative;
display:block;
width:80%;
color:rgba(0,0,0,0.8)
`;

export const Title = styled.p`
font-size:16px;
letter-spacing:0.5px;
padding:0 5px 0 5px;
`;

export const FormContent = styled.div`
padding:5px 0px 0px 10px;
display:block;
${({ flex }) => flex && `
display:flex;
justify-content:flex-start;
`}
`;

export const ButtonContainer = styled.div`
position:relative;
top:20px;
display:grid;
grid-template-columns:repeat(2,150px);
grid-gap:20px;
`;

export const ErrorMessage = styled.p`
color:crimson;
font-size:16px;
font-weight:bold;
letter-spacing:0.2px;
`;

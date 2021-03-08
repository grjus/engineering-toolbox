import styled from 'styled-components';

export const FormContent = styled.div`
padding:10px 0px 10px 10px;
display:block;
${({ flex }) => flex && `
display:flex;
justify-content:space-around;
`}
`;

export const OutputContainer = styled.div`
margin-top:10px;
display:flex;
justify-content:space-around;
position:relative;
`;

export const TRContainer = styled.div`
display:flex;
flex-direction:column;
/* width:4000px; */
`;

export const InputBlock = styled.div`
margin-top:30px;
transition: opacity 0.2s ease-in;
opacity:1;
${({ disabled }) => disabled && `
opacity:0.4;
pointer-events: none;
`}
`;

export const TRHeader = styled.div`
display:block;
color:rgba(0,0,0,0.8);
letter-spacing:0.5px;
font-size:16px;
font-weight:bold;
padding:5px;
`;

export const THRow = styled.div`
display:flex;
padding:5px;
`;

export const THRowLabel = styled.div`
display:block;
color:rgba(0,0,0,0.6);
letter-spacing:0.5px;
font-size:14px;
width:120px;
`;
export const THRowContent = styled.div`
display:block;
color:rgba(0,0,0,0.8);
font-size:14px;
font-weight:bold;
`;

export const chartStyle = {
  width: '690px',
  height: '600',
};

export const Separator = styled.hr`
border:1px solid rgba(0,0,0,0.2);
`;

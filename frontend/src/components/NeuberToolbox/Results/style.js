import styled from 'styled-components';

export const StyledContainer = styled.div`
margin-top:10px;
display:flex;
justify-content:space-around;
position:relative;
height: ${(props) => (props.height ? props.height : '22rem')};
transition:height 0.3s ease-in;
overflow:hidden;
${({ hidden }) => hidden && `
height:0px;
`}
`;

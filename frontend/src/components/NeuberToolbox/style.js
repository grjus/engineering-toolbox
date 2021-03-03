import styled from 'styled-components';

export const FormContent = styled.div`
padding:10px 0px 10px 10px;
display:block;
${({ flex }) => flex && `
display:flex;
justify-content:flex-start;
`}
`;

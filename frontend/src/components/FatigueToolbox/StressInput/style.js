import styled from 'styled-components';

export const TableHeaderContainer = styled.div`
width:${(props) => (props.width && props.colWidth ? (props.width * props.colWidth) : props.colWidth)}px;
display:flex;
position:relative;
margin-top:10px;
bottom:10px;
justify-content:space-around;
`;

export const TableHeader = styled.div`
font-size:13px;
color:rgba(0,0,0,0.8);
letter-spacing:0.5px;
text-align:center;
width:${(props) => (props.colWidth ? props.colWidth : 100)};
`;

export const TableButtonContainer = styled.div`
display:flex;
position:relative;
width:70%;
justify-content:space-evenly;
bottom:10px;
`;

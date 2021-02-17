import styled from 'styled-components';
import { EXCEL_COLUMN_WIDTH } from './config';

export const TableHeaderContainer = styled.div`
display:flex;
position:relative;
margin-top:10px;
bottom:10px;
justify-content:space-around
`;

export const TableHeader = styled.div`
font-size:14px;
color:rgba(0,0,0,0.8);
letter-spacing:0.5px;
width:${() => EXCEL_COLUMN_WIDTH};
`;

export const TableButtonContainer = styled.div`
display:flex;
position:relative;
width:70%;
justify-content:space-evenly;
bottom:10px;
`;

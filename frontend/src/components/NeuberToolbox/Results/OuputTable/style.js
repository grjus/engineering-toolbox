import styled from 'styled-components';
import DetailsIcon from '@material-ui/icons/Details';
import { withStyles } from '@material-ui/core';
import { theme } from '../../../../style';

export const TableContainer = styled.div`
display:block;
`;

export const TableRow = styled.tr`
padding:10px;
font-size:16px;
:nth-child(even){
    background-color:rgba(0,0,0,0.05)
}
`;

export const TableItem = styled.td`
padding:10px;
`;

export const IconContainer = styled.div`
display:flex;
justify-content:flex-start;
cursor:pointer;
`;

const iconTheme = (icoTheme) => ({
  root: {
    transform: (props) => (props.show),
    transition: icoTheme.transitions.create(['transform'], {
      easing: icoTheme.transitions.easing.sharp,
      duration: icoTheme.transitions.duration.standard,

    }),
  },
  colorPrimary: {
    color: theme.logoColor,

  },
});
export const DetailIcon = withStyles(iconTheme)(DetailsIcon);

export const Title = styled.h3`
text-align:center;
color:${theme.logoColor}
`;

export const TableHeader = styled.th`
padding:10px;
font-weight:bold;
text-align:left;
`;

export const Table = styled.table`
padding:10px;
`;

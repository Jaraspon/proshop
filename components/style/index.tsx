import {
    alpha,
    Button,
    Drawer,
    Fade,
    IconButton,
    InputBase,
    Menu,
    MenuItem,
    styled,
    Divider, Tooltip
} from '@mui/material';


export const CButton = styled(Button)(({ theme }) => ({
    // border: '1px solid #e5e8ec',
    borderRadius: '9px',
    // color: '#7a7a7a',
    minWidth: '39px',
    minHeight: '39px',
    // background: '#fff',
    paddingLeft: '15px',
    paddingRight: '15px',
}));
import { styled, Tab } from "@mui/material";
import TabList from '@mui/lab/TabList';

export const CustomTabList = styled(TabList)(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
    "& .MuiTabs-indicator": {
        backgroundColor: '#00D483',
    },
}));

export const CustomTab = styled(Tab)(({ theme }) => ({
    borderRadius: '4px',
    padding: theme.spacing(1),
    minWidth: '100px',
    textTransform: 'capitalize',
    '&.Mui-selected': {
        color: theme.palette.textDark.main,
    //    backgroundColor: 'red',
    //    border:'none',
    //    outline:'none'
    },
    color: '#707298',
}));

export const CenteredTab = styled(Tab)(({ theme }) => ({
    borderRadius: '4px',
    padding: theme.spacing(1),
    minWidth: '100px',
    position: 'absolute',
    left: '40%',
    textTransform: 'capitalize',
    '&.Mui-selected': {
        color: theme.palette.textDark.main,
        borderBottom: `2px solid ${theme.palette.success.main}`,
    },
    color: '#707298',
}));
import { Box } from "@mui/material"
import { styled } from '@mui/material/styles';

export const MainContainer = styled(Box)(() => ({
    width: '100%',
    height: '100vh',
    backgroundImage: 'url(/images/auth-banner.jpeg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}));

export const FormContainer = styled(Box)(({ theme }) => ({
    position: 'relative',
    zIndex: 1,
    padding: '40px 30px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '450px',
    textAlign: 'center',
    backgroundColor: theme.palette.primary.main,
    border: '1px solid #575979',
    margin: '10px',

    [theme.breakpoints.down('sm')]: {
        padding: '40px 20px',
    }

}));


export const Overlay = styled('div')(() => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(#191C2F, #191C2F, #157760)',
    opacity: 0.9

}));
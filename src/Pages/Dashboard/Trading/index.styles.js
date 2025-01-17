import { Box, styled } from "@mui/material";

export const MenuBarWrapper = styled("div")(() => ({
    display: "flex",
    gap: "10px",
    justifyContent: "space-between",
}));

export const SideMenu = styled("div")(({theme}) => ({
    display: "flex",
    gap: "30px",
    width: "50%",
    color: theme.palette.textDark.main
}));

export const RightSide = styled("div")(({theme}) => ({
    display: "flex",
    gap: "30px",
    color: theme.palette.textDark.main,
    alignItems: "center",
    marginRight: "20px"
}));

export const ClickableImage = styled("img")(() => ({
    width: "20px",
    height: "20px",
    borderRadius: "50%", 
    transition: "all 0.3s ease",
    cursor: "pointer",
    "&:hover": {
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
      transform: "scale(1.1)", 
    },
  }));

export const PublishBtn = styled("button")(({theme}) => ({
    color: theme.palette.textDark.main,
    backgroundColor: theme.palette.outline.main,
    padding: "8px 16px",
    borderRadius: "8px",
    fontSize: "13px",
    border: "none",
    cursor: "pointer",
    "&:hover": {
        backgroundColor: theme.palette.primary.main,
    },
    outline: "none"
}));


export const ChartContainer = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    padding: '16px',
    borderRadius: '8px',
    width: '100%',
    minHeight: '100%',
  }));
  
  export const Header = styled(Box)({
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  });
  
  export const HeaderInner = styled(Box)({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  });
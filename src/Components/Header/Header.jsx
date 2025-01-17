import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Badge from "@mui/material/Badge";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import theme from "../../Utils/Theme";
import { FiSearch } from "react-icons/fi";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "12px",
  border: "1px solid #34395c",
  "&:hover": {
    backgroundColor: theme.palette.secondary.main,
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  fontWeight: 430,
  fontSize: "14px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "12px",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const pages = [
  { name: "Overview", link: "/" },
  { name: "BuySell", link: "/buy-sell" },
  { name: "Trading", link: "/trading" },
  { name: "Markets", link: "/markets" },
  { name: "Exchanges", link: "/exchange" },
  { name: "Wallet", link: "/widthdraw" },
  { name: "History", link: "/history" },
];

function TopBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const navigate = useNavigate();
  const location = useLocation();

  const settings = ["Profile", "Account", "Dashboard", "Logout"];

  const handleLogout = () => {
    localStorage.removeItem("user-visited");
    navigate("/login");
  };

  const isActivePath = (pageLink) => {
    if (pageLink === "/" && location.pathname === "/") return true;
    if (pageLink !== "/" && location.pathname.startsWith(pageLink)) return true;
    return false;
  };

  return (
    <AppBar position="fixed" sx={{ height: "70px", boxShadow: "none" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              fontSize: "2rem",
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                "& .MuiPaper-root": {
                  backgroundColor: "#1a2234",
                  color: "white",
                  minWidth: "200px",
                },
              }}
            >
              {pages.map((page) => {
                const isActive = isActivePath(page.link);

                return (
                  <MenuItem
                    key={page.name}
                    onClick={handleCloseNavMenu}
                    sx={{
                      px: 2,
                      py: 1.5,
                      mx: 1,
                      my: 0.5,
                      borderRadius: "8px",
                      position: "relative",
                      backgroundColor: isActive
                        ? "rgba(255, 255, 255, 0.1)"
                        : "transparent",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: "2px",
                        backgroundColor: "#3699FF",
                        opacity: isActive ? 1 : 0,
                        transition: "opacity 0.2s ease-in-out",
                      },
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        "&::after": {
                          opacity: 1,
                        },
                      },
                    }}
                  >
                    <NavLink
                      to={page.link}
                      isActive={isActive}
                      style={{
                        textDecoration: "none",
                        width: "100%",
                        color: "inherit",
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: isActive ? 600 : 400,
                          color: isActive ? "#3699FF" : "#a1a5b7",
                          transition: "all 0.2s ease-in-out",
                          "&:hover": {
                            // color: "#3699FF",
                          },
                        }}
                      >
                        {page.name}
                      </Typography>
                    </NavLink>
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              textTransform: "capitalize",
            }}
          >
            LOGO
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            {pages.map((page) => (
              <Link
                to={page.link}
                key={page?.name}
                style={{ textDecoration: "none" }}
              >
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    mx: 0.5,
                    color: isActivePath(page.link) ? "#00D483" : "#707298",
                    display: "block",
                    textTransform: "capitalize",
                    fontSize: "14px",
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      height: "2px",
                      backgroundColor: "#00D483",
                      transform: isActivePath(page.link)
                        ? "scaleX(1)"
                        : "scaleX(0)",
                      transition: "transform 0.2s ease-in-out",
                    },
                    "&:hover": {
                      color: "#00D483",
                      backgroundColor: "transparent",
                      "&::after": {
                        transform: "scaleX(1)",
                      },
                    },
                  }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}

            <Search>
              <SearchIconWrapper>
                <FiSearch style={{ color: "#707298", fontSize: "18px" }} />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search"
                inputProps={{ "aria-label": "search" }}
                sx={{
                  fontWeight: 400,
                }}
              />
            </Search>

            <IconButton
              size="large"
              sx={{
                p: 1,
                borderRadius: "12px",
                mx: 2,
                color: theme.palette.textDark.main,
                backgroundColor: theme.palette.secondary.main,
              }}
            >
              <Badge
                color="secondary"
                variant="dot"
                badgeContent={4}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <NotificationsNoneIcon fontSize="inherit" />
              </Badge>
            </IconButton>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0, borderRadius: "12px" }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="/images/man.jpeg"
                  sx={{ borderRadius: "12px" }}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={() => {
                    if (setting === "Logout") {
                      handleLogout();
                    } else {
                      handleCloseUserMenu();
                    }
                  }}
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default TopBar;

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import theme from "../../../Utils/Theme";
import {
  CloseChip,
  CustomTableCell,
  TradingCustomTableContainer,
} from "../../../Components/Charts/index.styles";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid2 as Grid,
  Menu,
  MenuItem,
} from "@mui/material";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

function createData(
  name,
  calories,
  fat,
  price,
  amount,
  margin,
  pips,
  rate,
  other
) {
  return { name, calories, fat, price, amount, margin, pips, rate, other };
}

const rows = [
  createData(
    <p style={{ color: theme.palette.textDark.main }}>2024-06-19 11:13:57</p>,
    <p style={{ color: theme.palette.textDark.main }}>ETH/BTC</p>,
    <p style={{ color: "#00D483" }}>Longs</p>,
    <p style={{ color: theme.palette.textDark.main }}>1.22191</p>,
    <p style={{ color: theme.palette.textDark.main }}>29</p>,
    <p style={{ color: theme.palette.textDark.main }}>0.04</p>,
    <p style={{ color: "#EE5253", fontSize: "14px", fontStyle: "bold" }}>
      -0.5
    </p>,
    <p style={{ color: "#EE5253", fontSize: "14px", fontStyle: "bold" }}>
      1.3%
    </p>,
    <CloseChip label="Close" icon={<IoClose color="#D1D3EB" size={16} />} />
  ),
  createData(
    <p style={{ color: theme.palette.textDark.main }}>2024-06-19 11:13:57</p>,
    <p style={{ color: theme.palette.textDark.main }}>ETH/BTC</p>,
    <p style={{ color: "#00D483" }}>Longs</p>,
    <p style={{ color: theme.palette.textDark.main }}>0.76927</p>,
    <p style={{ color: theme.palette.textDark.main }}>14</p>,
    <p style={{ color: theme.palette.textDark.main }}>0.1</p>,
    <p style={{ color: "#00D483", fontSize: "14px", fontStyle: "bold" }}>
      +3.6
    </p>,
    <p style={{ color: "#00D483", fontSize: "14px", fontStyle: "bold" }}>
      18.2%
    </p>,
    <CloseChip label="Close" icon={<IoClose color="#D1D3EB" size={16} />} />
  ),
  createData(
    <p style={{ color: theme.palette.textDark.main }}>2024-06-19 11:13:57</p>,
    <p style={{ color: theme.palette.textDark.main }}>ETH/BTC</p>,
    <p style={{ color: "#00D483" }}>Longs</p>,
    <p style={{ color: theme.palette.textDark.main }}>0.76927</p>,
    <p style={{ color: theme.palette.textDark.main }}>14</p>,
    <p style={{ color: theme.palette.textDark.main }}>0.1</p>,
    <p style={{ color: "#00D483", fontSize: "14px", fontStyle: "bold" }}>
      +3.6
    </p>,
    <p style={{ color: "#00D483", fontSize: "14px", fontStyle: "bold" }}>
      18.2%
    </p>,
    <CloseChip label="Close" icon={<IoClose color="#D1D3EB" size={16} />} />
  ),
];

const TradingBottomTable = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card
      sx={{
        backgroundColor: theme.palette.secondary.main,
        borderRadius: "14px",
        marginTop: "13px",
      }}
    >
      <CardContent>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography
              variant="h6"
              component="div"
              sx={{ color: theme.palette.textDark.main, fontSize: "17px" }}
            >
              Positions
            </Typography>
          </Grid>
          <Grid item>
            <Button onClick={handleMenuClick}>
              <img src="/images/line-menu.png" alt="" />
            </Button>

            <Menu
              id="long-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>Option 1</MenuItem>
              <MenuItem onClick={handleMenuClose}>Option 2</MenuItem>
              <MenuItem onClick={handleMenuClose}>Option 3</MenuItem>
            </Menu>
          </Grid>
        </Grid>
        <Typography variant="body2" color="text.secondary">
          <TradingCustomTableContainer component={"div"}>
            <Table sx={{ backgroundColor: theme.palette.secondary.main }}>
              <TableHead>
                <TableRow>
                  <CustomTableCell sx={{ color: "#707298" }}>
                    Open Time
                  </CustomTableCell>

                  <CustomTableCell
                    align="center"
                    sx={{ color: theme.palette.textLight.main }}
                  >
                    Symbol
                  </CustomTableCell>
                  <CustomTableCell
                    align="center"
                    sx={{ color: theme.palette.textLight.main }}
                  >
                    Position Type
                  </CustomTableCell>
                  <CustomTableCell
                    align="center"
                    sx={{ color: theme.palette.textLight.main }}
                  >
                    Price
                  </CustomTableCell>
                  <CustomTableCell
                    align="center"
                    sx={{ color: theme.palette.textLight.main }}
                  >
                    Amount
                  </CustomTableCell>
                  <CustomTableCell
                    align="center"
                    sx={{ color: theme.palette.textLight.main }}
                  >
                    Margin
                  </CustomTableCell>
                  <CustomTableCell
                    align="center"
                    sx={{ color: theme.palette.textLight.main }}
                  >
                    Pips
                  </CustomTableCell>
                  <CustomTableCell
                    align="center"
                    sx={{ color: theme.palette.textLight.main }}
                  >
                    Rate
                  </CustomTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <CustomTableCell component="th" scope="row">
                      {row.name}
                    </CustomTableCell>
                    <CustomTableCell align="center">
                      {row.calories}
                    </CustomTableCell>
                    <CustomTableCell align="center">{row.fat}</CustomTableCell>
                    <CustomTableCell align="center">
                      {row.price}
                    </CustomTableCell>
                    <CustomTableCell align="center">
                      {row.amount}
                    </CustomTableCell>
                    <CustomTableCell align="center">
                      {row.margin}
                    </CustomTableCell>
                    <CustomTableCell align="center">{row.pips}</CustomTableCell>
                    <CustomTableCell align="center">{row.rate}</CustomTableCell>
                    <CustomTableCell align="center">
                      {row.other}
                    </CustomTableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TradingCustomTableContainer>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TradingBottomTable;

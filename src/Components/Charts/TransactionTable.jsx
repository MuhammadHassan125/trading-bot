import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import theme from "../../Utils/Theme";
import {
  CustomTableCell,
  CustomTableContainer,
  GreenChip,
  OrangeChip,
  RedChip,
} from "./index.styles";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid2 as Grid,
} from "@mui/material";

function createData(name, calories, fat, carbs, money) {
  return { name, calories, fat, carbs, money };
}

const rows = [
  createData(
    <div style={{ display: "flex", alignItems: "center" }}>
      <img src="/images/ethereum.png" />
      <p
        style={{
          fontSize: "16px",
          fontStyle: "400",
          marginLeft: "8px",
          marginRight: "8px",
          color: theme.palette.textDark.main,
        }}
      >
        Ethereum
      </p>
      <p style={{ fontSize: "16px", color: theme.palette.textLight.main }}>
        ECT
      </p>
    </div>,
    <Typography variant="body2" sx={{ color: theme.palette.textDark.main }}>
      22/04/2024
    </Typography>,
    <Typography variant="body2" sx={{ color: theme.palette.textDark.main }}>
      0.00756
    </Typography>,
    <OrangeChip label="1.13%" />,
    <p style={{ color: "#F7CC5F", fontSize: "14px", fontStyle: "bold" }}>
      246.7385{" "}
    </p>
  ),
  createData(
    <div style={{ display: "flex", alignItems: "center" }}>
      <img src="/images/dollar-blue.png" />
      <p
        style={{
          fontSize: "16px",
          fontStyle: "bold",
          marginLeft: "8px",
          marginRight: "8px",
        }}
      >
        Dollar
      </p>
      <p style={{ fontSize: "16px", color: theme.palette.textLight.main }}>
        USD
      </p>
    </div>,
    <Typography variant="body2" sx={{ color: theme.palette.textDark.main }}>
      22/04/2024
    </Typography>,
    <Typography variant="body2" sx={{ color: theme.palette.textDark.main }}>
      0.00756
    </Typography>,
    <GreenChip label="3.78%" />,
    <p style={{ color: "#1DD1A1", fontSize: "14px", fontStyle: "bold" }}>
      246.7385{" "}
    </p>
  ),
  createData(
    <div style={{ display: "flex", alignItems: "center" }}>
      <img src="/images/dollar-blue.png" />
      <p
        style={{
          fontSize: "16px",
          fontStyle: "bold",
          marginLeft: "8px",
          marginRight: "8px",
        }}
      >
        Ethereum
      </p>
      <p style={{ fontSize: "16px", color: theme.palette.textLight.main }}>
        ECT
      </p>
    </div>,
    <Typography variant="body2" sx={{ color: theme.palette.textDark.main }}>
      22/04/2024
    </Typography>,
    <Typography variant="body2" sx={{ color: theme.palette.textDark.main }}>
      0.00756
    </Typography>,
    <RedChip label="3.78%" />,
    <p style={{ color: "#EE5253", fontSize: "14px", fontStyle: "bold" }}>
      246.7385{" "}
    </p>
  ),
  createData(
    <div style={{ display: "flex", alignItems: "center" }}>
      <img src="/images/dollar-blue.png" />
      <p
        style={{
          fontSize: "16px",
          fontStyle: "bold",
          marginLeft: "8px",
          marginRight: "8px",
        }}
      >
        Dollar
      </p>
      <p style={{ fontSize: "16px", color: theme.palette.textLight.main }}>
        USD
      </p>
    </div>,
    <Typography variant="body2" sx={{ color: theme.palette.textDark.main }}>
      22/04/2024
    </Typography>,
    <Typography variant="body2" sx={{ color: theme.palette.textDark.main }}>
      0.00756
    </Typography>,
    <GreenChip label="3.78%" />,
    <p style={{ color: "#1DD1A1", fontSize: "14px", fontStyle: "bold" }}>
      246.7385{" "}
    </p>
  ),
];

const TransactionsTable = () => {
  return (
    <Card
      sx={{
        backgroundColor: theme.palette.secondary.main,
        borderRadius: "14px",
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
              Recent Transactions
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant="transparent"
              endIcon={
                <ArrowForwardIcon
                  fontSize="10px"
                  sx={{ color: theme.palette.textLight.main }}
                />
              }
              sx={{
                color: theme.palette.textLight.main,
                fontSize: "14px",
                textTransform: "capitalize",
              }}
            >
              View all transactions
            </Button>
          </Grid>
        </Grid>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          <CustomTableContainer component={Paper}>
            <Table sx={{ backgroundColor: theme.palette.secondary.main }}>
              <TableHead>
                <TableRow
                  sx={{
                    borderBottom: `1px solid ${theme.palette.textLight.main}`,
                  }}
                >
                  <CustomTableCell sx={{ color: "#707298" }}>
                    Currency
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
                    Price in BTC
                  </CustomTableCell>
                  <CustomTableCell
                    align="center"
                    sx={{ color: theme.palette.textLight.main }}
                  >
                    24h
                  </CustomTableCell>
                  <CustomTableCell
                    align="center"
                    sx={{ color: theme.palette.textLight.main }}
                  >
                    Amount
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
                      {row.carbs}
                    </CustomTableCell>
                    <CustomTableCell align="center">
                      {row.money}
                    </CustomTableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CustomTableContainer>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TransactionsTable;

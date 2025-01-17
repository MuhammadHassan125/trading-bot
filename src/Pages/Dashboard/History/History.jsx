import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import theme from "../../../Utils/Theme";
import {
  CustomTableCell,
  CustomTableContainer,
  GreenChip,
  OrangeChip,
  RedChip,
} from "../../../Components/Charts/index.styles";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid2 as Grid,
  IconButton,
  Box,
} from "@mui/material";
import { HiDotsHorizontal } from "react-icons/hi";

function createData(name, calories, fat, carbs, money, option) {
  return { name, calories, fat, carbs, money, option };
}

const History = () => {
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
      <Typography
        variant="body2"
        sx={{
          color: theme.palette.textDark.main,
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        eyJhbGciOiJIUzI1NiIsInR5c
        <img src="/images/copy.png" />
      </Typography>,
      <Typography variant="body2" sx={{ color: theme.palette.textDark.main }}>
        22/04/2024
      </Typography>,
      <Typography variant="body2" sx={{ color: theme.palette.textDark.main }}>
        0.00756
      </Typography>,
      <OrangeChip label="Pending" />,
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
      >
        <HiDotsHorizontal style={{ color: theme.palette.textLight.main }} />
      </IconButton>
    ),
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
      <Typography
        variant="body2"
        sx={{
          color: theme.palette.textDark.main,
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        eyJhbGciOiJIUzI1NiIsInR5c
        <img src="/images/copy.png" />
      </Typography>,
      <Typography variant="body2" sx={{ color: theme.palette.textDark.main }}>
        22/04/2024
      </Typography>,
      <Typography variant="body2" sx={{ color: theme.palette.textDark.main }}>
        0.00756
      </Typography>,
      <GreenChip label="Success" />,
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
      >
        <HiDotsHorizontal style={{ color: theme.palette.textLight.main }} />
      </IconButton>
    ),
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
      <Typography
        variant="body2"
        sx={{
          color: theme.palette.textDark.main,
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        eyJhbGciOiJIUzI1NiIsInR5c
        <img src="/images/copy.png" />
      </Typography>,
      <Typography variant="body2" sx={{ color: theme.palette.textDark.main }}>
        22/04/2024
      </Typography>,
      <Typography variant="body2" sx={{ color: theme.palette.textDark.main }}>
        0.00756
      </Typography>,
      <RedChip label="Failed" />,
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
      >
        <HiDotsHorizontal style={{ color: theme.palette.textLight.main }} />
      </IconButton>
    ),
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
      <Typography
        variant="body2"
        sx={{
          color: theme.palette.textDark.main,
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        eyJhbGciOiJIUzI1NiIsInR5c
        <img src="/images/copy.png" />
      </Typography>,
      <Typography variant="body2" sx={{ color: theme.palette.textDark.main }}>
        22/04/2024
      </Typography>,
      <Typography variant="body2" sx={{ color: theme.palette.textDark.main }}>
        0.00756
      </Typography>,
      <OrangeChip label="Pending" />,
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
      >
        <HiDotsHorizontal style={{ color: theme.palette.textLight.main }} />
      </IconButton>
    ),
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
      <Typography
        variant="body2"
        sx={{
          color: theme.palette.textDark.main,
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        eyJhbGciOiJIUzI1NiIsInR5c
        <img src="/images/copy.png" />
      </Typography>,
      <Typography variant="body2" sx={{ color: theme.palette.textDark.main }}>
        22/04/2024
      </Typography>,
      <Typography variant="body2" sx={{ color: theme.palette.textDark.main }}>
        0.00756
      </Typography>,
      <GreenChip label="Success" />,
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
      >
        <HiDotsHorizontal style={{ color: theme.palette.textLight.main }} />
      </IconButton>
    ),
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
      <Typography
        variant="body2"
        sx={{
          color: theme.palette.textDark.main,
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        eyJhbGciOiJIUzI1NiIsInR5c
        <img src="/images/copy.png" />
      </Typography>,
      <Typography variant="body2" sx={{ color: theme.palette.textDark.main }}>
        22/04/2024
      </Typography>,
      <Typography variant="body2" sx={{ color: theme.palette.textDark.main }}>
        0.00756
      </Typography>,
      <RedChip label="Failed" />,
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
      >
        <HiDotsHorizontal style={{ color: theme.palette.textLight.main }} />
      </IconButton>
    ),
  ];

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
              Transactions History
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant="transparent"
              sx={{
                color: theme.palette.textLight.main,
                fontSize: "14px",
                textTransform: "capitalize",
              }}
            >
              10 of 378 Results
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
                    Address
                  </CustomTableCell>
                  <CustomTableCell
                    align="center"
                    sx={{ color: theme.palette.textLight.main }}
                  >
                    Date
                  </CustomTableCell>
                  <CustomTableCell
                    align="center"
                    sx={{ color: theme.palette.textLight.main }}
                  >
                    Status
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
                    Other
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
                    <CustomTableCell align="center">
                      {row.option}
                    </CustomTableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CustomTableContainer>
        </Typography>
      </CardContent>
        
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center",}}>

        <Button
              variant="contained"
              sx={{
                bgcolor: "#34395C",
                padding: "8px 0",
                width: "120px",
                borderRadius: "20px",
                textTransform: "capitalize",
                border: `1px solid ${theme.palette.outline.main}`,
                "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
                my: 3,
              }}
            >
              Load More
        </Button>
        </Box>
    </Card>
  );
};

export default History;

import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import theme from "../../Utils/Theme";

const CustomDatePicker = styled(DatePicker)({
  "& .MuiInputBase-root": {
    color: "white",
    width: "150px",
    borderRadius: "18px",
    height: "38px",
    padding: "10px 20px",
    fontSize: "12px", 
  },
  "& .MuiSvgIcon-root": {
    color: "#00D483",
  },
  "& .MuiInputLabel-root": {
    color: theme.palette.textDark.main,
    fontSize: "13px", 
    marginLeft: "10px",
    transform: 'translate(10px, 10px)',
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: theme.palette.outline.main,
    },
    "&:hover fieldset": {
      borderColor: theme.palette.outline.main,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.outline.main,
    },
  },
});

function DatePickerForTransaction() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <CustomDatePicker
        label={"March 2024"}
        views={["month", "year"]}
        renderInput={(params) => (
          <TextField
            {...params}
            InputLabelProps={{
              style: { fontSize: "13px" }, 
            }}
            inputProps={{
              style: { fontSize: "13px" },
            }}
          />
        )}
      />
    </LocalizationProvider>
  );
}

export default DatePickerForTransaction;

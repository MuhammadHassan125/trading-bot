import { useState } from "react";
import PrimaryAuthInput from "../../../Components/PrimaryAuthInput/Index";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoKeyOutline } from "react-icons/io5";
import { FormWrapper, GradientButton } from "./Login.styles";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Typography,
  useTheme,
} from "@mui/material";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    localStorage.setItem("user-visited", "true");
    navigate("/");
  };

  const theme = useTheme();

  return (
    <Box>
      <Typography variant="h2" sx={{ color: "white" }}>
        LOGO
      </Typography>

      <Typography variant="p" sx={{ color: "white" }}>
        Welcome
      </Typography>

      <FormWrapper onSubmit={handleSubmit}>
        <PrimaryAuthInput
          icon={
            <MdOutlineMailOutline
              size={20}
              color={theme.palette.textDark.main}
            />
          }
          type="email"
          bgColor={theme.palette.secondary.main}
          placeholder={"E-mail"}
          value={email}
          onChange={handleEmailChange}
        />

        <PrimaryAuthInput
          type="password"
          bgColor={theme.palette.secondary.main}
          placeholder={"Password"}
          icon={<IoKeyOutline size={20} color={theme.palette.textDark.main} />}
          value={password}
          onChange={handlePasswordChange}
        />

        {/* remember me  */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: theme.palette.textDark.main,
                  "&.Mui-checked": {
                    color: theme.palette.textDark.main,
                    borderRadius: "4px",
                  },
                }}
              />
            }
            label={
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: 400,
                  color: theme.palette.textDark.main,
                }}
              >
                Remember me
              </span>
            }
            sx={{
              color: theme.palette.textDark.main,
            }}
          />
          {/* forgot password  */}
          <Link to="/login" className="Link">
            <Typography
              variant="p"
              sx={{ color: theme.palette.textGreen.main }}
            >
              Forgot Password?
            </Typography>
          </Link>
        </Box>

        <GradientButton type="submit">Login</GradientButton>

        {/* bottom txt  */}
        <Typography variant="p" sx={{ color: theme.palette.textDark.main }}>
          Dont have an account?
          <Link
            to="/login"
            style={{
              textDecoration: "none",
              color: theme.palette.textGreen?.main || "green",
              marginLeft: "5px",
            }}
          >
            Register
          </Link>
        </Typography>
      </FormWrapper>
    </Box>
  );
};

export default Login;

import { Box, useTheme } from "@mui/material";
import React from "react";
import { GoEye, GoEyeClosed } from "react-icons/go";

const PrimaryAuthInput = ({
  type,
  icon,
  value,
  bgColor,
  placeholder,
  onChange,
  border,
  ...restProps
}) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "auto",
        background: "white",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "12px 15px",
        gap: "15px",
        borderRadius: "10px",
        bgcolor: bgColor,
        border: border,
      }}
    >
      {icon && <span style={{ width: "8%" }}>{icon}</span>}

      <input
        type={type === "password" && !showPassword ? "password" : "text"}
        placeholder={placeholder}
        style={{
          width: "100%",
          border: "none",
          outline: "none",
          padding: "2px",
          background: "transparent",
          color: "white",
        }}
        value={value}
        onChange={(e) => onChange(e)}
        {...restProps}
      />

      {type === "password" && (
        <div
          onClick={handleTogglePassword}
          style={{ cursor: "pointer", color: "white", width: "8%" }}
        >
          {showPassword ? (
            <GoEye size={18} color={theme.palette.textDark.main} />
          ) : (
            <GoEyeClosed size={18} color={theme.palette.textDark.main} />
          )}
        </div>
      )}
    </Box>
  );
};

export default PrimaryAuthInput;

import React from "react";
import { Box, Typography } from "@mui/material";
import { colors } from "../theme";

export default function BACard({
  variant,
  label,
  children,
  background = colors.darkBlue,
  color = colors.pink,
  borderColor = colors.pink,
}) {
  return (
    <Box
      sx={{
        borderRadius: "16px",
        p: "28px",
        background,
        border: `1.5px solid ${borderColor}`,
      }}
    >
      <Typography
        sx={{
          fontSize: "1.4rem",
          fontWeight: 700,
          mb: 2,
          color,
        }}
      >
        {label}
      </Typography>
      {children}
    </Box>
  );
}

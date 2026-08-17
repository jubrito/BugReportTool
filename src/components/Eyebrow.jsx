import React from "react";
import { Typography } from "@mui/material";
import { colors } from "../theme";

export default function Eyebrow({ children }) {
  return (
    <Typography
      variant="overline"
      sx={{
        fontSize: "1rem",
        fontWeight: 700,
        letterSpacing: "0.14em",
        mb: "10px",
        display: "block",
        fontWeight: 900,
      }}
    >
      {children}
    </Typography>
  );
}

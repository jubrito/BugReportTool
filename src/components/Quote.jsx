import React from "react";
import { Box, Typography } from "@mui/material";
import { colors } from "../theme";

export default function Quote({ by, children, width, color }) {
  return (
    <Box
      sx={{
        background: "rgba(0,0,0,0.3)",
        borderLeft: `5px solid ${color || colors.text}`,
        borderRadius: "12px",
        p: "22px 26px",
        mb: "18px",
        width: width || "100%",
      }}
    >
      <Typography
        component="blockquote"
        sx={{
          fontSize: "1.05rem",
          fontStyle: "italic",
          color: colors.textMuted,
          lineHeight: 1.65,
          mb: "10px",
        }}
      >
        {children}
      </Typography>
      <Typography
        sx={{
          fontSize: "0.8rem",
          fontWeight: 700,
          color: color || colors.text,
          letterSpacing: "0.04em",
        }}
      >
        {by}
      </Typography>
    </Box>
  );
}

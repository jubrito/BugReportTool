import React from "react";
import { Box, Typography } from "@mui/material";
import { colors } from "../theme";

const roleColors = {
  teal: colors.teal,
  pink: colors.pink,
  purple: "#9b82c4",
  amber: colors.amber,
  green: colors.green,
};

export default function PersonCard({ name, role, accent = "teal", children }) {
  return (
    <Box
      sx={{
        background: colors.cardBg,
        border: `1.5px solid ${colors.border}`,
        borderRadius: "16px",
        p: "22px 20px",
        width: "100%",
      }}
    >
      <Typography
        sx={{ fontSize: "1.05rem", fontWeight: 700, color: "#fff", mb: "4px" }}
      >
        {name}
      </Typography>
      <Typography
        sx={{
          fontSize: "0.78rem",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          mb: "12px",
          color: roleColors[accent],
        }}
      >
        {role}
      </Typography>
      <Typography
        sx={{ fontSize: "0.88rem", color: colors.textMuted, lineHeight: 1.65 }}
      >
        {children}
      </Typography>
    </Box>
  );
}

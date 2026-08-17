import React from "react";
import { Box, Typography } from "@mui/material";
import { colors } from "../theme";

const accentColors = {
  teal: colors.teal,
  green: colors.green,
  amber: colors.amber,
  purple: colors.purple,
  pink: colors.pink,
};

export default function ImpactCard({
  accent = "teal",
  icon,
  heading,
  children,
}) {
  return (
    <Box
      sx={{
        borderRadius: "16px",
        p: "26px",
        background: colors.cardBg,
        border: `1.5px solid ${colors.border}`,
        borderBottom: `3px solid ${accentColors[accent]}`,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 1,
        }}
      >
        {icon && (
          <Typography
            component="span"
            sx={{
              mb: "12px",

              "& svg": { width: 28, height: 28 },
            }}
          >
            {icon}
          </Typography>
        )}
        <Typography
          component="span"
          sx={{ fontSize: "1.05rem", fontWeight: 700, color: "#fff" }}
        >
          {heading}
        </Typography>
      </Box>
      <Typography
        sx={{ fontSize: "0.9rem", color: colors.textMuted, lineHeight: 1.65 }}
      >
        {children}
      </Typography>
    </Box>
  );
}

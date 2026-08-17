import React from "react";
import { Box, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { colors } from "../theme";

export function CheckItem({
  children,
  colorIcon = colors.teal,
  colorText = colors.textMuted,
}) {
  return (
    <Box
      component="li"
      sx={{
        display: "flex",
        gap: "14px",
        alignItems: "flex-start",
        py: "11px",
        borderBottom: `1px solid ${colors.border}`,
        "&:last-child": { borderBottom: "none" },
        fontSize: "0.95rem",
        color: colorText,
        lineHeight: 1.55,
        listStyle: "none",
      }}
    >
      <CheckCircleIcon
        sx={{
          flexShrink: 0,
          mt: "2px",
          width: 22,
          height: 22,
          color: colorIcon,
        }}
      />
      <Box>{children}</Box>
    </Box>
  );
}

export default function CheckList({ children }) {
  return (
    <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
      {children}
    </Box>
  );
}

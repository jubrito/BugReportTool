import React from "react";
import { Box, Typography } from "@mui/material";
import { colors } from "../theme";

export function IconListItem({ icon, children, muted = false }) {
  return (
    <Box
      component="li"
      sx={{
        display: "flex",
        gap: "12px",
        alignItems: "flex-start",
        py: "9px",
        borderBottom: `1px solid ${colors.border}`,
        "&:last-child": { borderBottom: "none" },
        fontSize: "0.95rem",
        color: muted ? colors.textMuted : colors.text,
        lineHeight: 1.55,
        listStyle: "none",
      }}
    >
      <Box
        sx={{
          flexShrink: 0,
          mt: "3px",
          width: 18,
          height: 18,
          display: "flex",
        }}
      >
        {icon}
      </Box>
      <Box>{children}</Box>
    </Box>
  );
}

export function SubText({ children }) {
  return (
    <Typography
      component="span"
      sx={{
        display: "block",
        fontSize: "0.8rem",
        color: colors.textMuted,
        mt: "3px",
        lineHeight: 1.45,
        fontSize: "0.9rem",
      }}
    >
      {children}
    </Typography>
  );
}

export default function IconList({ children, muted = false }) {
  return (
    <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
      {React.Children.map(children, (child) =>
        child ? React.cloneElement(child, { muted }) : null,
      )}
    </Box>
  );
}

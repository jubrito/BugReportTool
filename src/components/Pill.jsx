import React from "react";
import { Box } from "@mui/material";
import { colors } from "../theme";

export default function Pill({ dotColor, borderColor, textColor, children }) {
  return (
    <Box
      component="span"
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        background: "rgba(0,0,0,0.3)",
        border: `1.5px solid ${borderColor || dotColor}`,
        borderRadius: "999px",
        px: "18px",
        py: "8px",
        fontSize: "0.85rem",
        fontWeight: 600,
        color: textColor || dotColor,
      }}
    >
      {dotColor && (
        <Box
          component="span"
          sx={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: dotColor,
            flexShrink: 0,
          }}
        />
      )}
      {children}
    </Box>
  );
}

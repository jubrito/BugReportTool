import React from "react";
import { Box, Typography } from "@mui/material";
import SlideShell from "../components/SlideShell";
import SlideHeading from "../components/SlideHeading";
import Pill from "../components/Pill";
import { colors } from "../theme";

const pills = [
  { label: "On-call triage", dot: colors.green },
  { label: "Error handling", dot: colors.pink },
  { label: "AI-powered triage", dot: colors.lilac },
  { label: "Accessibility", dot: colors.amber },
];

export default function Slide10Closing() {
  return (
    <SlideShell center>
      <SlideHeading accentColor={colors.teal}>
        Richer input. Less friction.
        <br />
        Faster fixes. Better results.
        <br />
        <em>
          More efficient triage <br />
        </em>
        <span style={{ color: colors.lightTeal, fontStyle: "italic" }}>
          by humans and AIs
        </span>
      </SlideHeading>

      <Box
        sx={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          justifyContent: "center",
          mb: "32px",
        }}
      >
        {pills.map((p) => (
          <Pill key={p.label} dotColor={p.dot}>
            {p.label}
          </Pill>
        ))}
      </Box>

      <Typography sx={{ fontSize: "0.85rem", color: colors.textMuted }}>
        Juliana Witzke · Fabio Pinto · Paulo Calixto
      </Typography>
    </SlideShell>
  );
}

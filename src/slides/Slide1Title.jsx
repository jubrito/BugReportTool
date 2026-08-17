import React from "react";
import { Box, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SecurityIcon from "@mui/icons-material/Security";
import LightModeIcon from "@mui/icons-material/LightMode";
import InfoIcon from "@mui/icons-material/Info";
import PersonIcon from "@mui/icons-material/Person";
import SlideShell from "../components/SlideShell";
import SlideHeading from "../components/SlideHeading";
import ArticleIcon from "@mui/icons-material/Article";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import Eyebrow from "../components/Eyebrow";
import BugSvg from "../components/BugSvg";
import { colors } from "../theme";

const chips = [
  {
    label: "On-Call Triage",
    color: "teal",
    icon: <AccessTimeIcon sx={{ fontSize: 20 }} />,
    bg: colors.lighterTeal,
    borderColor: colors.lightTeal,
    textColor: colors.teal,
  },
  {
    label: "Documentation",
    color: "green",
    icon: <ArticleIcon sx={{ fontSize: 20 }} />,
    bg: colors.lighterGreen,
    borderColor: "rgba(107,158,120,0.5)",
    textColor: colors.green,
  },
  {
    label: "AI-Assisted Triage",
    color: "purple",
    icon: <SmartToyIcon sx={{ fontSize: 20 }} />,
    bg: colors.lighterPurple,
    borderColor: "rgba(99,79,125,0.55)",
    textColor: "#9b82c4",
  },
  {
    label: "Accessibility",
    color: "amber",
    icon: <InfoIcon sx={{ fontSize: 20 }} />,
    bg: colors.lighterAmber,
    borderColor: "rgba(204,133,10,0.5)",
    textColor: colors.amber,
  },
  {
    label: "User experience",
    color: "pink",
    icon: <PersonIcon sx={{ fontSize: 20 }} />,
    bg: colors.lighterPink,
    borderColor: "rgba(242,97,122,0.5)",
    textColor: colors.pink,
  },
];

export default function Slide1Title() {
  return (
    <SlideShell sx={{ alignItems: "center" }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "auto minmax(0,1fr)" },
          gap: 6,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* <BugSvg size={300} color={colors.textMuted} /> */}
        <Box
          component="img"
          src="/bot.png"
          alt="Bot"
          sx={{ width: 250, height: "auto", display: "block" }}
        />

        <Box>
          <Eyebrow>On-Call Experience</Eyebrow>
          <SlideHeading variant="h1">
            Bug Report <br />
            <em>Intake 2.5</em>
          </SlideHeading>
          <Typography
            sx={{
              fontSize: "1.15rem",
              maxWidth: 600,
              lineHeight: 1.65,
            }}
          >
            Structured bug report tool to speed-up on-call triage. Less
            back-and-forth, better human and AI-assisted investigations.
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              flexWrap: "wrap",
              mt: "14px",
            }}
          >
            <Typography
              sx={{
                fontSize: "1.15rem",
                fontStyle: "italic",
                color: colors.textMuted,
              }}
            >
              Juliana Witzke · Fabio Pinto · Paulo Calixto
            </Typography>
          </Box>
        </Box>

        {/* Chips + author — spans both columns */}
        <Box
          sx={{
            gridColumn: "1 / -1",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <Box sx={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {chips.map((c) => (
              <Box
                key={c.label}
                component="span"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "7px",
                  borderRadius: "999px",
                  px: "16px",
                  py: "6px",
                  fontSize: "15px",
                  fontWeight: 600,
                  letterSpacing: "0.03em",
                  border: `1.5px solid ${c.borderColor}`,
                  background: c.bg,
                  color: c.textColor,
                }}
              >
                {c.icon}
                {c.label}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </SlideShell>
  );
}

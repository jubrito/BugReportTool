import React from "react";
import { Box, Typography } from "@mui/material";
import ComputerIcon from "@mui/icons-material/Computer";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import AltRouteIcon from "@mui/icons-material/AltRoute";
import SlideShell from "../components/SlideShell";
import SlideHeading from "../components/SlideHeading";
import Eyebrow from "../components/Eyebrow";
import ImpactCard from "../components/ImpactCard";
import { colors } from "../theme";

const cards = [
  {
    accent: "teal",
    icon: <ComputerIcon sx={{ color: colors.teal }} />,
    heading: "Thread replies — not noise",
    body: "The original slack stays clean",
    description:
      "– Structured details post as a thread reply: detail is one click away. Only answered questions are included.",
  },
  {
    accent: "pink",
    icon: <CheckBoxIcon sx={{ color: colors.pink }} />,
    heading: "Loading state — No accidental double-submits",
    body: "Dialog locks while submitting",
    description:
      "— loading indicator on the button and modal can't be dismissed mid-flight. No duplicate Slack messages.",
  },
  {
    accent: "green",
    icon: <AccessibilityNewIcon sx={{ color: colors.green }} />,
    heading: "Accessible by design",
    body: "Form accessible for everyone",
    description:
      "– full support to keyboard-navigation while providing all meaningful information to screen readers.",
  },
  {
    accent: "amber",
    icon: <AltRouteIcon sx={{ color: colors.amber }} />,
    heading: "Forward reports to AI bot channel to enable automated triage",
    body: "Supports AI-powered triage",
    description:
      "– mirror new issues sent to the team's bug report channel to the AI Slack chatbot channel.",
  },
];

export default function Slide7Improvements() {
  return (
    <SlideShell>
      <Eyebrow>Additional Improvements</Eyebrow>
      <SlideHeading accentColor={colors.teal}>
        Other small details that
        <br />
        make a <em>big difference</em>
      </SlideHeading>

      <Box
        sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px" }}
      >
        {cards.map((c) => (
          <ImpactCard
            key={c.heading}
            accent={c.accent}
            icon={c.icon}
            heading={c.heading}
          >
            <Typography component="span" sx={{ fontWeight: "bold" }}>
              {c.body}
            </Typography>
            <Typography component="span" sx={{ ml: 1 }}>
              {c.description}
            </Typography>
          </ImpactCard>
        ))}
      </Box>
    </SlideShell>
  );
}

import React from "react";
import { Box, Typography } from "@mui/material";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LoopIcon from "@mui/icons-material/Loop";
import ArticleIcon from "@mui/icons-material/Article";
import SlideShell from "../components/SlideShell";
import SlideHeading from "../components/SlideHeading";
import Eyebrow from "../components/Eyebrow";
import ImpactCard from "../components/ImpactCard";
import Quote from "../components/Quote";
import { colors } from "../theme";

const cards = [
  {
    accent: "green",
    icon: <ShowChartIcon sx={{ color: colors.green }} />,
    heading: "Shorter Mean Time to Repair",
    body: "Faster triage → faster fix → shorter window",
    description:
      "where broken state drives user retry traffic and wasted compute.",
  },
  {
    accent: "teal",
    icon: <AccessTimeIcon sx={{ color: colors.teal }} />,
    heading: "Less context-switching",
    body: "Engineers stay in investigation mode faster ",
    body: "instead of stopping to chase context. Human attention is an energy cost too.",
  },
  {
    accent: "amber",
    icon: <LoopIcon sx={{ color: colors.amber }} />,
    heading: "Fewer messages",
    body: "Most friction elimination.",
    description:
      "Each saved follow-up round is a push notification and an interrupt on both sides.",
  },
  {
    accent: "purple",
    icon: <ArticleIcon sx={{ color: "#9b82c4" }} />,
    heading: "Leaner thread storage",
    body: "One structured reply instead of long threads",
    description:
      "that are hard to keep track of, displays the most useful information upfront.",
  },
];

export default function Slide5Green() {
  return (
    <SlideShell>
      <Eyebrow>Operational impact</Eyebrow>
      <SlideHeading accentColor={colors.green}>
        The <em>fastest path to resolution</em> <br />
        is having the right context from the start
      </SlideHeading>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr" },
          gap: "44px",
          alignItems: "start",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: "18px",
          }}
        >
          {cards.map((c) => (
            <ImpactCard
              key={c.heading}
              accent={c.accent}
              icon={c.icon}
              heading={c.heading}
              description={c.description}
            >
              <Typography component="span"></Typography>
              {c.body}
            </ImpactCard>
          ))}
        </Box>
      </Box>
    </SlideShell>
  );
}

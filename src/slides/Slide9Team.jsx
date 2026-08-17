import React from "react";
import { Box, List, ListItem, Typography } from "@mui/material";
import Pill from "../components/Pill";
import SlideShell from "../components/SlideShell";
import SlideHeading from "../components/SlideHeading";
import Eyebrow from "../components/Eyebrow";
import PersonCard from "../components/PersonCard";
import { colors } from "../theme";

export default function Slide9Team() {
  return (
    <SlideShell>
      <Eyebrow>Collaboration</Eyebrow>
      <SlideHeading accentColor={colors.green}>
        Built <em>together</em>
      </SlideHeading>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "14px",
        }}
      >
        <PersonCard
          name="Juliana Witzke"
          role="Software Engineer"
          accent="purple"
        >
          <List sx={{ listStyleType: "disc", pl: 2, mb: 0 }}>
            {[
              "Proposed and built the new frontend structured questionnaire",
              "Added slack thread replies backend support",
              "Improved form accessibility",
              "Routed reports to the bot channel for AI-assisted triage",
            ].map((item, i) => (
              <ListItem
                key={i}
                sx={{
                  pl: 1,
                  display: "list-item",
                  "&::marker": { color: "#9b82c4" },
                  fontWeight: i == 0 ? 700 : 0,
                }}
              >
                {item}
              </ListItem>
            ))}
          </List>
        </PersonCard>
        <PersonCard name="Fabio Pinto" role="Software Engineer" accent="pink">
          <List sx={{ listStyleType: "disc", pl: 2, mb: 0 }}>
            {[
              "Helped to make user expecience smoother while maximizing issue context retrival",
              "Introduced the form buttons layout",
              "Reviewed code to speed up feature delivery",
            ].map((item, i) => (
              <ListItem
                key={i}
                sx={{
                  pl: 1,
                  display: "list-item",
                  "&::marker": { color: colors.pink },
                  fontWeight: i == 0 ? 700 : 0,
                }}
              >
                {item}
              </ListItem>
            ))}
          </List>
        </PersonCard>
        <PersonCard
          name="Paulo Calixto"
          role="Software Engineer"
          accent="amber"
        >
          <List sx={{ listStyleType: "disc", pl: 2, mb: 0 }}>
            {[
              "Deep code review that helped to improve code quality and speed up feature delivery",
              "Identified and structured error tracking and security improvements",
            ].map((item, i) => (
              <ListItem
                key={i}
                sx={{
                  pl: 1,
                  display: "list-item",
                  "&::marker": { color: colors.amber },
                  fontWeight: i == 0 ? 700 : 0,
                }}
              >
                {item}
              </ListItem>
            ))}
          </List>
        </PersonCard>
      </Box>
      <Box sx={{ display: "flex", gap: "10px", flexWrap: "wrap", mt: "32px" }}>
        <Pill
          dotColor={colors.textMuted}
          borderColor={colors.textMuted}
          textColor={colors.textMuted}
        >
          +2955 lines added
        </Pill>
        <Pill
          dotColor={colors.textMuted}
          borderColor={colors.textMuted}
          textColor={colors.textMuted}
        >
          −334 removed
        </Pill>
        <Pill
          dotColor={colors.textMuted}
          borderColor={colors.textMuted}
          textColor={colors.textMuted}
        >
          Backend + Frontend
        </Pill>
      </Box>
    </SlideShell>
  );
}

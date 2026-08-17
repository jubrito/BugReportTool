import React from "react";
import { Box, List, ListItem, Typography } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import EastIcon from "@mui/icons-material/ArrowRight";
import CircleIcon from "@mui/icons-material/Circle";
import SlideShell from "../components/SlideShell";
import SlideHeading from "../components/SlideHeading";
import Eyebrow from "../components/Eyebrow";
import BACard from "../components/BACard";
import IconList, { IconListItem, SubText } from "../components/IconList";
import { colors } from "../theme";

const flowSteps = [
  { label: "User reports a problem using our tool\n", alert: false },
  { label: "Bug report submitted is incomplete", alert: true },
  { label: "On-call needs more\ncontext to triage", alert: true },
  { label: "Multiple follow-up\nquestions required", alert: true },
  { label: "Triage finally\nbegins", alert: false },
];

const missingInfo = [
  {
    main: "Who is affected?",
    sub: "Without scope, on-call can't prioritize the issue properly.",
  },
  {
    main: "Is it blocking anything time-sensitive?",
    sub: 'A live class incident is P0. "Just me" can wait. Unknown = treat everything as urgent.',
  },
  {
    main: "Is there a workaround?",
    sub: "Knowing this upfront can unblock users in seconds (before root cause is found).",
  },
  {
    main: "First time or recurring?",
    sub: "Recurrence points to a regression vs. an edge case → different investigation path.",
  },
  {
    main: "What are the steps to reproduce?",
    sub: "Without a causal chain, the team AI triage tool can only reflect the vagueness back.",
  },
];

const MinusIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <circle cx="9" cy="9" r="8" stroke="#f2617a" strokeWidth="1.5" />
    <path d="M6 9h6" stroke="#f2617a" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export default function Slide2Problem() {
  return (
    <SlideShell>
      <Eyebrow>The Problem</Eyebrow>
      <SlideHeading>
        Bug reports could trigger
        <br />
        multiple rounds of <em>back-and-forth</em>
      </SlideHeading>

      {/* Flow diagram */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          flexWrap: "wrap",
          my: "28px",
          width: "100%",
        }}
      >
        {flowSteps.map((step, i) => (
          <React.Fragment key={i}>
            <Box
              sx={{
                background: step.alert ? colors.lighterPink : colors.cardBg,
                border: `1.5px solid ${step.alert ? colors.lightPink : colors.border}`,
                borderRadius: "12px",
                px: "18px",
                py: "14px",
                fontSize: "0.9rem",
                fontWeight: 600,
                textAlign: "center",
                flex: 1,
                minWidth: "120px",
                minHeight: "100%",
                color: step.alert ? "#f7a0ae" : colors.text,
                whiteSpace: "pre-line",
              }}
            >
              {step.label}
            </Box>
            {i < flowSteps.length - 1 && (
              <Typography
                sx={{
                  color: colors.textMuted,
                  fontSize: "1.3rem",
                  flexShrink: 0,
                }}
              >
                →
              </Typography>
            )}
          </React.Fragment>
        ))}
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1.3fr",
          gap: "20px",
          mt: "4px",
        }}
      >
        <BACard variant="before" label='Incomplete "user report" are common'>
          <Box
            sx={{
              fontFamily: "monospace",
              fontSize: "0.88rem",
              background: "#000",
              borderRadius: "10px",
              p: 3,
              py: 4,
              lineHeight: 1.8,
              color: "#d1d2d3",
              background: colors.lightPink,
            }}
          >
            <Box component="span" sx={{ fontWeight: 700, color: "#fff" }}>
              User report:
            </Box>
            <br />
            The timings are incorrect
          </Box>
          <List sx={{ listStyleType: "disc", ml: 4 }}>
            <ListItem sx={{ display: "list-item", pl: 2 }}>
              <Typography>No scope</Typography>
            </ListItem>
            <ListItem sx={{ display: "list-item", pl: 2 }}>
              <Typography>No severity</Typography>
            </ListItem>
            <ListItem sx={{ display: "list-item", pl: 2 }}>
              <Typography>No workaround</Typography>
            </ListItem>
            <ListItem sx={{ display: "list-item", pl: 2 }}>
              <Typography>No recurrence information</Typography>
            </ListItem>
            <ListItem sx={{ display: "list-item", pl: 2 }}>
              <Typography>No reproduction steps</Typography>
            </ListItem>
            <ListItem sx={{ display: "list-item", pl: 2 }}>
              <Typography sx={{ fontWeight: "bold" }}>
                Not enough context for a fast and efficient triage
              </Typography>
            </ListItem>
          </List>
        </BACard>

        <BACard variant="after" label="Important context is often not shared">
          <IconList>
            {missingInfo.map((item, i) => (
              <IconListItem key={i} icon={<MinusIcon />}>
                <Typography sx={{ fontWeight: "bold", fontSize: "1.1rem" }}>
                  {item.main}
                </Typography>
                <SubText>{item.sub}</SubText>
              </IconListItem>
            ))}
          </IconList>
        </BACard>
      </Box>
    </SlideShell>
  );
}

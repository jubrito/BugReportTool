import React from "react";
import { Box, Typography } from "@mui/material";
import SlideShell from "../components/SlideShell";
import SlideHeading from "../components/SlideHeading";
import Eyebrow from "../components/Eyebrow";
import BACard from "../components/BACard";
import IconList, { IconListItem } from "../components/IconList";
import AddIcon from "@mui/icons-material/Add";
import { colors } from "../theme";

const WarningIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <circle cx="9" cy="9" r="7.5" stroke={colors.pink} strokeWidth="1.5" />
    <path
      d="M9 5v4.5"
      stroke={colors.pink}
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <circle cx="9" cy="13" r="1" fill={colors.pink} />
  </svg>
);

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 18 18" fill="none">
    <circle
      cx="9"
      cy="9"
      r="7.5"
      fill={colors.lighterTeal}
      stroke={colors.teal}
      strokeWidth="1.5"
    />
    <path
      d="M5.5 9l2.5 2.5 4.5-4.5"
      stroke={colors.teal}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const stats = [
  {
    value: "Slow",
    label: "triage when context had to be chased down",
    accent: "pink",
  },
  {
    value: "Unclear",
    label: "severity and scope before investigation",
    accent: "pink",
  },
];
const statsResult = [
  {
    value: "Fewer",
    label: "follow-ups needed when fields are filled",
    accent: "green",
  },
  {
    value: "Faster",
    label: "path from report to investigation start",
    accent: "teal",
  },
];

const accentColor = {
  pink: colors.pink,
  green: colors.green,
  teal: colors.teal,
};

const beforeItems = [
  "On-call had to pause and chase missing information → slow triage",
  "No way to gauge severity at a glance → inefficient prioritization",
  "Slack thread became a long Q&A chain before investigation started",
  "Context-switching cost: engineers interrupted investigation to ask questions, slowing down the work on the bug and other tickets",
];

const afterItems = [
  "Severity and scope visible before on-call even opens the thread",
  "Workaround status known upfront → visibility to how to get unblocked",
  "Stakeholders identified — quickly know who should be involved",
  "Reproduction steps available — on-call can immediately try to reproduce the bug and start investigating",
];

export default function Slide4Impact() {
  return (
    <SlideShell>
      <Eyebrow>On-Call Experience</Eyebrow>
      <SlideHeading accentColor={colors.teal}>
        From reactive back-and-forth
        <br />
        to a more <em>efficient triage</em>
      </SlideHeading>

      {/* grid: left col = Slow, auto col = arrow, right col = Fewer + Faster */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          gap: "20px",
          width: "100%",
          mb: "36px",
          alignItems: "stretch",
        }}
      >
        {/* Before: stats stacked with + between */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "12px",
            alignItems: "stretch",
          }}
        >
          {stats.map((s, index) => (
            <React.Fragment key={s.value}>
              <Box
                sx={{
                  flex: 1,
                  background: colors.darkBlue,
                  borderRadius: "14px",
                  borderTop: `1px solid ${accentColor[s.accent]}`,
                  p: "15px 20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "2.4rem",
                    fontWeight: 800,
                    lineHeight: 1,
                    mb: 1,
                    color: accentColor[s.accent],
                  }}
                >
                  {s.value}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.9rem",
                    color: colors.textMuted,
                    lineHeight: 1.45,
                    whiteSpace: "pre-line",
                  }}
                >
                  {s.label}
                </Typography>
              </Box>
              {index < stats.length - 1 && (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <AddIcon sx={{ color: colors.textMuted, fontSize: 40 }} />
                </Box>
              )}
            </React.Fragment>
          ))}
        </Box>

        {/* Arrow centered */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{ fontSize: 40, fontWeight: 700, color: colors.textMuted }}
          >
            →
          </Typography>
        </Box>

        {/* After: stats stacked with + between */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "12px",
            alignItems: "stretch",
          }}
        >
          {statsResult.map((s, index) => (
            <React.Fragment key={s.value}>
              <Box
                sx={{
                  flex: 1,
                  background: colors.darkBlue,
                  borderRadius: "14px",
                  borderTop: `1px solid ${accentColor[s.accent]}`,
                  p: "15px 20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "2.4rem",
                    fontWeight: 800,
                    lineHeight: 1,
                    mb: 1,
                    color: accentColor[s.accent],
                  }}
                >
                  {s.value}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.9rem",
                    color: colors.textMuted,
                    lineHeight: 1.45,
                    whiteSpace: "pre-line",
                  }}
                >
                  {s.label}
                </Typography>
              </Box>
              {index < statsResult.length - 1 && (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <AddIcon sx={{ color: colors.textMuted, fontSize: 40 }} />
                </Box>
              )}
            </React.Fragment>
          ))}
        </Box>
      </Box>

      <Box
        sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px" }}
      >
        <BACard
          variant="before"
          label="Before"
          background={colors.lighterPink}
          color={colors.pink}
          borderColor={"none"}
        >
          <IconList>
            {beforeItems.map((item, i) => (
              <IconListItem key={i} icon={<WarningIcon />}>
                {item}
              </IconListItem>
            ))}
          </IconList>
        </BACard>
        <BACard
          variant="after"
          label="After"
          color={colors.teal}
          borderColor={"none"}
          background={colors.lighterTeal}
        >
          <IconList>
            {afterItems.map((item, i) => (
              <IconListItem key={i} icon={<CheckIcon />}>
                {item}
              </IconListItem>
            ))}
          </IconList>
        </BACard>
      </Box>
    </SlideShell>
  );
}

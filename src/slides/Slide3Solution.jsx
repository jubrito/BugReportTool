import React from "react";
import { Box, Typography } from "@mui/material";
import SlideShell from "../components/SlideShell";
import SlideHeading from "../components/SlideHeading";
import Eyebrow from "../components/Eyebrow";
import CheckList, { CheckItem } from "../components/CheckList";
import SlackMock from "../components/SlackMock";
import { colors } from "../theme";

const checkItems = [
  <>
    <Box>
      <Typography sx={{ color: colors.text, display: "inline" }}>
        <strong>Current vs. expected</strong>
      </Typography>
      <Typography component="span" sx={{ color: colors.green, ml: 1 }}>
        (required)
      </Typography>
    </Box>
    What the user is trying to accomplish vs what is happening instead
  </>,
  <>
    <Typography sx={{ color: colors.text }}>
      <strong>What/who is impacted or blocked</strong> →
      <Typography
        component="span"
        sx={{ color: colors.green, ml: 1, fontStyle: "italic" }}
      >
         supports prioritization
      </Typography>
    </Typography>
    Is it only affecting the reporter? Is it blocking a live class in progress?
  </>,
  <>
    <Typography sx={{ color: colors.text }}>
      <strong>Known workaround</strong>
    </Typography>
    With details field if workaround exists
  </>,
  <>
    <Typography sx={{ color: colors.text }}>
      <strong>Stakeholders</strong>
    </Typography>
    Multi-select with all teams that should be involved
  </>,
  <>
    <Typography sx={{ color: colors.text }}>
      <strong>Recurrence</strong>
    </Typography>
    Is it the first time this happens? Does this issue happen frequently?
  </>,
  <>
    <Typography sx={{ color: colors.text }}>
      <strong>Additional details</strong>
    </Typography>
    Freeform text field for any other possible relevant information
  </>,
];

export default function Slide3Solution() {
  return (
    <SlideShell>
      <Eyebrow>The Solution</Eyebrow>
      <SlideHeading accentColor={colors.green}>
        The right questions,
        <br />
        <em>right in the form</em>
      </SlideHeading>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1.5fr 1fr" },
          gap: "44px",
          alignItems: "start",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: "1rem",
              color: colors.textMuted,
              mb: "24px",
              lineHeight: 1.7,
            }}
          >
            Structured questionnaire inside the Bug Report dialog to highlight
            which type of information helps the engineers on-call triage the
            bug.
            <Box component="strong" sx={{ ml: 1, color: colors.text }}>
              Reporters fill what they now know is the relevant information
            </Box>
            , and the questions and answers are posted as a Slack thread reply
            right below the original message.
          </Typography>

          <CheckList>
            {checkItems.map((item, i) => (
              <CheckItem key={i} colorIcon={colors.green}>
                {item}
              </CheckItem>
            ))}
          </CheckList>

          <Box
            sx={{
              background: colors.lighterGreen,
              border: "1.5px solid rgba(117, 173, 71, 0.45)",
              borderRadius: "12px",
              p: "27px",
              mt: "20px",
              fontSize: "0.95rem",
              color: colors.text,
              lineHeight: 1.6,
            }}
          >
            <span
              style={{
                color: colors.green,
                marginBottom: "8px",
                display: "inline-block",
                fontWeight: 700,
                fontSize: "1.2rem",
              }}
            >
              All fields optional except "current vs. expected"
            </span>
            <br />
            <span className="mr-1">
              → No friction for quick reports, but the right prompts are
              impossible to miss
            </span>
            <br />→{" "}
            <strong
              style={{
                marginTop: "8px",
                display: "inline-block",
              }}
            >
              Users know what info is most useful to provide if they want a
              faster resolution.
            </strong>
          </Box>
        </Box>

        <SlackMock />
      </Box>
    </SlideShell>
  );
}

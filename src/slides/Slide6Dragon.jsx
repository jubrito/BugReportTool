import React from "react";
import { Box, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import SlideShell from "../components/SlideShell";
import SlideHeading from "../components/SlideHeading";
import Eyebrow from "../components/Eyebrow";
import { colors } from "../theme";

const withoutItems = [
  "AI doesn't have enough information to start to prioritize bug",
  "AI needs to ask follow-up questions to get more context",
  "Tokens are spent unnecessarily → wasting money and impacting the environment negatively",
];

const withItems = [
  "AI has the info needed to determine the severity and scope",
  "Efficient triage: with context AI can find the root cause faster",
  "Fewer follow-up questions and resources wasted",
];

function IntakeList({ items, Icon, iconColor }) {
  return (
    <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
      {items.map((item, i) => (
        <Box
          key={i}
          component="li"
          sx={{
            display: "flex",
            gap: "10px",
            alignItems: "flex-start",
            py: "8px",
            fontSize: "0.9rem",
            color: colors.text,
            lineHeight: 1.55,
          }}
        >
          <Icon
            sx={{
              flexShrink: 0,
              mt: "2px",
              width: 20,
              height: 20,
              color: iconColor,
            }}
          />
          <Box>{item}</Box>
        </Box>
      ))}
    </Box>
  );
}

export default function Slide6Dragon() {
  return (
    <SlideShell>
      <Eyebrow>Maximizing the team AI-Assisted Triage</Eyebrow>
      <SlideHeading accentColor={colors.teal}>
        Better input.
        <br />
        <em>More efficient AI triage.</em>
      </SlideHeading>

      <Box sx={{ width: "100%" }}>
        <Typography
          sx={{
            fontSize: "1.3rem",
            fontWeight: "bold",
            lineHeight: 1.7,
            mb: 1,
          }}
        >
          The team's new AI triage tool can only be as good as the data it
          receives.
        </Typography>
        <Typography
          sx={{
            fontSize: "1rem",
            lineHeight: 1.7,
            mb: 2,
          }}
        >
          Agents succeed or fail depending on the quality of the context you
          give it. A single vague sentence gives it nothing to reason about, it
          can only reflect the vagueness back.
        </Typography>
        <Typography
          sx={{
            fontSize: "1.2rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            color: colors.teal,
            mb: "8px",
          }}
        >
          Supporting an industry shift
        </Typography>

        <Box
          sx={{
            borderLeft: `3px solid ${colors.teal}`,
            pl: "16px",
            mb: "28px",
          }}
        >
          <Typography
            sx={{
              fontSize: "1rem",
              fontStyle: "italic",
              lineHeight: 1.55,
              color: colors.text,
              mb: "6px",
            }}
          >
            <strong>"Context engineering over prompt engineering</strong> – the
            art of providing all the context for the task to be plausibly
            solvable by the LLM."
          </Typography>
          <Typography
            sx={{
              fontSize: "0.85rem",
              color: colors.textMuted,
            }}
          >
            — Tobi Lütke, Shopify co-founder & CEO (June 2025). Endorsed by
            Andrej Karpathy, co-founder of OpenAI.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: "20px",
            alignItems: "stretch",
          }}
        >
          <Box
            sx={{
              background: "#000",
              border: "1.5px solid rgba(242,97,122,0.4)",
              borderRadius: "12px",
              p: "20px",
            }}
          >
            <Typography
              sx={{
                fontSize: "0.9rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: colors.pink,
                mb: "12px",
              }}
            >
              Without structured intake
            </Typography>
            <Typography
              sx={{
                fontFamily: "monospace",
                fontSize: "0.84rem",
                color: "#d1d2d3",
                lineHeight: 1.6,
                mb: "14px",
              }}
            >
              Input: "Can't duplicate the class"
            </Typography>
            <IntakeList
              items={withoutItems}
              Icon={CancelIcon}
              iconColor={colors.pink}
            />
          </Box>

          <Box
            sx={{
              background: "#000",
              border: "1.5px solid rgba(71,161,173,0.4)",
              borderRadius: "12px",
              p: "20px",
            }}
          >
            <Typography
              sx={{
                fontSize: "0.9rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: colors.teal,
                mb: "12px",
              }}
            >
              With structured intake
            </Typography>
            <Typography
              sx={{
                fontFamily: "monospace",
                fontSize: "0.84rem",
                color: "#d1d2d3",
                lineHeight: 1.6,
                mb: "14px",
              }}
            >
              Input:{" "}
              <span style={{ fontStyle: "italic" }}>
                &lt;scope X, it's blocking Y, recurring, stakeholder Z etc&gt;
              </span>
            </Typography>
            <IntakeList
              items={withItems}
              Icon={CheckCircleIcon}
              iconColor={colors.teal}
            />
          </Box>
        </Box>
      </Box>
    </SlideShell>
  );
}

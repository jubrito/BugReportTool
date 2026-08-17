import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import { colors } from "../theme";
import SouthIcon from "@mui/icons-material/South";

function BotHeader() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "8px", mb: "12px" }}>
      <Box
        component="img"
        src="/leto.png"
        alt="Team Slack Bot"
        sx={{ width: 28, height: 28, borderRadius: "6px", flexShrink: 0 }}
      />
      <Box
        component="span"
        sx={{ fontWeight: 700, color: "#fff", fontSize: "0.9rem" }}
      >
        Team Slack bot
      </Box>
      <Box
        component="span"
        sx={{ fontSize: "0.72rem", color: "#9b9da0", fontWeight: 400 }}
      >
        11:32 AM
      </Box>
    </Box>
  );
}

export default function SlackMock() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "14px",
        height: "100%",
        minHeight: "100%",
      }}
    >
      <Box
        sx={{
          background: "#192023",
          border: "1.5px solid #3c3f44",
          borderRadius: "14px",
          p: "22px 26px",
          fontSize: "0.88rem",
          lineHeight: 1.75,
          fontFamily: "'Lato', 'Segoe UI', sans-serif",
          height: "100%",
        }}
      >
        <BotHeader />
        <Box sx={{ color: "#d1d2d3" }}>
          <Box
            component="span"
            sx={{
              fontWeight: 700,
              color: colors.green,
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Team Link
          </Box>
          <br />
          <Box
            component="span"
            sx={{
              fontWeight: 700,
              color: colors.green,
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Datadog RUM Link
          </Box>
          <br />
          <Box component="span" sx={{ fontWeight: 700, color: "#fff" }}>
            Environment:
          </Box>{" "}
          PRODUCTION
          <br />
          <Box component="span" sx={{ fontWeight: 700, color: "#fff" }}>
            Path:
          </Box>{" "}
          /programs
          <br />
          <Box component="span" sx={{ fontWeight: 700, color: "#fff" }}>
            User:
          </Box>{" "}
          reporter@onepeloton.com
          <br />
          <Box component="span" sx={{ fontWeight: 700, color: "#fff" }}>
            Current vs. expected behavior:
          </Box>{" "}
          The Segment Control Board should show all segments, but the list is
          empty.
          <br />
          <Box component="span" sx={{ fontWeight: 700, color: "#fff" }}>
            Business Hours On Call:
          </Box>{" "}
          @Juliana
        </Box>
      </Box>
      <Typography
        sx={{
          fontSize: "0.72rem",
          color: "#9b9da0",
          textTransform: "uppercase",
          letterSpacing: "0.07em",
          fontWeight: 700,
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "4px",
        }}
      >
        <SouthIcon sx={{ fontSize: "13px" }} /> 1 reply
      </Typography>
      <Box
        sx={{
          background: "#192023",
          border: "1.5px solid #3c3f44",
          borderRadius: "14px",
          p: "22px 26px",
          fontSize: "0.88rem",
          lineHeight: 1.75,
          fontFamily: "'Lato', 'Segoe UI', sans-serif",
          height: "100%",
        }}
      >
        <BotHeader />
        <Box sx={{ color: "#c8c9ca" }}>
          {[
            [
              "Blocked users, teams or operations",
              "Live class in progress. Affects all producers on the 6am shift",
            ],
            ["Known workarounds", "Yes. Re-importing the class plan"],
            ["Stakeholders", "Studio, Media Streaming"],
            ["Recurrence", "Is happening repeatedly"],
            [
              "Additional details",
              "Started after the deploy. Steps to reproduce: class library → SCB.",
            ],
          ].map(([label, value], i) => (
            <Box key={i} sx={{ mt: i === 0 ? 0 : "10px" }}>
              <Box
                component="span"
                sx={{ fontWeight: 700, color: "#ececed", display: "block" }}
              >
                {label}
              </Box>
              <Box
                component="span"
                sx={{ display: "block", color: "#c0c0c0", mb: "2px" }}
              >
                {value}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

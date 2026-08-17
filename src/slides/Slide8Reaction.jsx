import React from "react";
import { Box } from "@mui/material";
import SlideShell from "../components/SlideShell";
import SlideHeading from "../components/SlideHeading";
import Eyebrow from "../components/Eyebrow";
import Quote from "../components/Quote";
import Pill from "../components/Pill";
import { colors } from "../theme";

export default function Slide8Reaction() {
  return (
    <SlideShell>
      <Eyebrow>Recognition</Eyebrow>
      <SlideHeading accentColor={colors.green}>
        The team's <em>reaction</em>
      </SlideHeading>

      <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
        <Quote by="Engineering Manager" width="63%" color={colors.green}>
          "This is awesome!!! This is one of those features where you become
          shocked that we didn't think of it sooner. I love the
          blocking/impacting buttons!!! Very clear!!"
        </Quote>
        <Quote by="Technical Lead" width="37%" color={colors.green}>
          "This is awesome! Love all the dialogue as well."
        </Quote>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
        <Quote by="Anonymous (during retrospective)" width="31.5%">
          "Congrats on the Bug Report Tool improvements rollout! 🎉
        </Quote>
        <Quote by="Anonymous (during retrospective)" width="31.5%">
          "Shoutout to everyone involved in iterating on the bug report form"
        </Quote>
        <Quote by="Anonymous (during retrospective)" width="38%">
          "Congrats for brainstorming better approach for bug report mirroring
          in dragon
        </Quote>
      </Box>
    </SlideShell>
  );
}

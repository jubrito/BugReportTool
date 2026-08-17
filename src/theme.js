import { createTheme } from "@mui/material/styles";

export const colors = {
  bg: "#0a1a20",
  bgCard: "#0f2229",
  bgLight: "#edf1f3",
  white: "#ffffff",
  black: "#000000",
  pink: "#f2617a",
  amber: "#cc850a",
  green: "#6b9e78",
  teal: "#47a1ad",
  purple: "#634f7d",
  lilac: "#9164cb",
  text: "#edf1f3",
  textMuted: "#8cb8c2",
  border: "rgba(237, 241, 243, 0.12)",
  cardBg: "rgba(0, 61, 79, 0.45)",
  darkBlue: "rgba(10, 8, 8, 0.3)",
  lightPink: "rgba(242,97,122,0.45)",
  lighterPink: "rgba(242,97,122,0.10)",
  lightAmber: "rgba(204,133,10,0.45)",
  lighterAmber: "rgba(204,133,10,0.10)",
  lightPurple: "rgba(99,79,125,0.45)",
  lighterPurple: "rgba(99,79,125,0.10)",
  lightGreen: "rgba(107,158,120,0.45)",
  lighterGreen: "rgba(107,158,120,0.10)",
  lightTeal: "rgba(71,161,173,0.45)",
  lighterTeal: "rgba(71,161,173,0.10)",
};

export const theme = createTheme({
  palette: {
    mode: "dark",
    background: { default: colors.bg, paper: colors.bgCard },
    primary: { main: colors.teal },
    secondary: { main: colors.pink },
    text: { primary: colors.text, secondary: colors.textMuted },
  },
  typography: {
    fontFamily: "'Inter', system-ui, sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: { backgroundColor: colors.bg, color: colors.text },
      },
    },
  },
});

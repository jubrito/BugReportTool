import { useEffect } from "react";
import { usePresentation } from "./PresentationContext";

const TYPING_TARGETS = new Set(["INPUT", "TEXTAREA", "SELECT"]);

function toggleFullscreen() {
  if (typeof document === "undefined") return;
  if (document.fullscreenElement) {
    document.exitFullscreen?.().catch(() => {});
  } else {
    document.documentElement.requestFullscreen?.().catch(() => {});
  }
}

export default function useKeyboardControls() {
  const { isPresenting, enter, exit, next, prev } = usePresentation();

  useEffect(() => {
    const onKey = (e) => {
      const target = e.target;
      if (target?.tagName && TYPING_TARGETS.has(target.tagName)) return;
      if (target?.isContentEditable) return;

      if (!isPresenting) {
        if (e.key === "p" || e.key === "P") {
          e.preventDefault();
          enter();
        }
        return;
      }

      switch (e.key) {
        case "ArrowRight":
        case "ArrowDown":
        case "PageDown":
        case " ":
          e.preventDefault();
          next();
          break;
        case "ArrowLeft":
        case "ArrowUp":
        case "PageUp":
          e.preventDefault();
          prev();
          break;
        case "Escape":
          e.preventDefault();
          exit();
          break;
        case "f":
        case "F":
          e.preventDefault();
          toggleFullscreen();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isPresenting, enter, exit, next, prev]);
}

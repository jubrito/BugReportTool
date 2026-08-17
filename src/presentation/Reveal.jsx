import { usePresentation } from "./PresentationContext";
import { useSlideIndex } from "./SlideBoundary";

export default function Reveal({
  step,
  children,
  as: Tag = "div",
  className = "",
}) {
  const { isPresenting, slideIndex, stepIndex } = usePresentation();
  const mySlide = useSlideIndex();

  const isVisible =
    !isPresenting || (slideIndex === mySlide && stepIndex >= step);

  const visibilityClasses = isVisible
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-4 pointer-events-none";

  return (
    <Tag
      aria-hidden={!isVisible || undefined}
      className={`transition duration-300 ease-out ${visibilityClasses} ${className}`}
    >
      {children}
    </Tag>
  );
}

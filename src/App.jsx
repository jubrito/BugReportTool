import Slide1Title from "./slides/Slide1Title";
import Slide2Problem from "./slides/Slide2Problem";
import Slide3Solution from "./slides/Slide3Solution";
import Slide4Impact from "./slides/Slide4Impact";
import Slide5Green from "./slides/Slide5Green";
import Slide6Dragon from "./slides/Slide6Dragon";
import Slide7Improvements from "./slides/Slide7Improvements";
import Slide8Reaction from "./slides/Slide8Reaction";
import Slide9Team from "./slides/Slide9Team";
import Slide10Closing from "./slides/Slide10Closing";

const SLIDES = [
  Slide1Title,
  Slide2Problem,
  Slide3Solution,
  Slide4Impact,
  Slide5Green,
  Slide6Dragon,
  Slide7Improvements,
  Slide8Reaction,
  Slide9Team,
  Slide10Closing,
];

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <main
        id="main"
        aria-label="Bug Report Intake 2.5 presentation"
        aria-roledescription="carousel"
      >
        {SLIDES.map((Slide, i) => (
          <Slide key={i} />
        ))}
      </main>
    </>
  );
}

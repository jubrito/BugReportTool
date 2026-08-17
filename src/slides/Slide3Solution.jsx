import SlideShell from "../components/SlideShell";
import SlideHeading from "../components/SlideHeading";
import Eyebrow from "../components/Eyebrow";
import CheckList, { CheckItem } from "../components/CheckList";
import SlackMock from "../components/SlackMock";
import Reveal from "../presentation/Reveal";

const CHECK_ITEMS = [
  {
    title: "Current vs. expected",
    badge: "required",
    body: "What the user is trying to accomplish vs what is happening instead",
  },
  {
    title: "What/who is impacted or blocked",
    badge: "supports prioritization",
    body: "Is it only affecting the reporter? Is it blocking a live class in progress?",
  },
  {
    title: "Known workaround",
    body: "With details field if workaround exists",
  },
  {
    title: "Stakeholders",
    body: "Multi-select with all teams that should be involved",
  },
  {
    title: "Recurrence",
    body: "Is it the first time this happens? Does this issue happen frequently?",
  },
  {
    title: "Additional details",
    body: "Freeform text field for any other possible relevant information",
  },
];

export default function Slide3Solution() {
  return (
    <SlideShell ariaLabel="The solution">
      <Eyebrow>The Solution</Eyebrow>
      <SlideHeading accent="green">
        The right questions,
        <br />
        <em>right in the form</em>
      </SlideHeading>

      <div className="grid items-start gap-11 md:grid-cols-[1.5fr_1fr]">
        <div>
          <p className="mb-4 text-base leading-[1.7] text-text-muted">
            Structured questionnaire inside the Bug Report dialog to highlight
            which type of information helps the engineers on-call triage the
            bug.{" "}
            <strong className="ml-1 text-text">
              Reporters fill what they now know is the relevant information
            </strong>
            , and the questions and answers are posted as a Slack thread reply
            right below the original message.
          </p>

          <Reveal step={1}>
            <CheckList>
              {CHECK_ITEMS.map((item) => (
                <CheckItem key={item.title} iconClass="text-green">
                  <div>
                    <strong className="text-text">{item.title}</strong>
                    {item.badge && (
                      <span className="ml-1 italic text-green">
                        ({item.badge})
                      </span>
                    )}
                  </div>
                  <p>{item.body}</p>
                </CheckItem>
              ))}
            </CheckList>
          </Reveal>

          <Reveal step={2}>
            <aside className="mt-2 rounded-xl border-[1.5px] border-green-soft bg-green-softer p-5 text-[0.95rem] leading-[1.6] text-text">
              <p className="mb-2 text-[1.2rem] font-bold text-green">
                All fields optional except "current vs. expected"
              </p>
              <p>
                → No friction for quick reports, but the right prompts are
                impossible to miss.
              </p>
              <p className="mt-2">
                → Users know what info is most useful to provide if they want a
                faster resolution.
              </p>
            </aside>
          </Reveal>
        </div>

        <Reveal step={3}>
          <SlackMock />
        </Reveal>
      </div>
    </SlideShell>
  );
}

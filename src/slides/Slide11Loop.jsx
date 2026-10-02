import Eyebrow from "../components/Eyebrow";
import SlideHeading from "../components/SlideHeading";
import SlideShell from "../components/SlideShell";
import Reveal from "../presentation/Reveal";

function TicketBadge({ id, tone }) {
  const color = tone === "before" ? "text-pink bg-pink-softer" : "text-teal bg-teal-softer";
  return (
    <span
      className={`inline-block rounded px-2 py-0.5 text-[0.72rem] font-bold tracking-wide ${color}`}
    >
      {id}
    </span>
  );
}

function TicketPanel({ tone, ticketId, summary, children, labelId }) {
  const border = tone === "before" ? "border-pink" : "border-teal";
  const label = tone === "before" ? "text-pink" : "text-teal";
  const bg = tone === "before" ? "bg-pink-softer" : "bg-teal-softer";

  return (
    <article
      aria-labelledby={labelId}
      className={`flex h-full flex-col rounded-2xl border-[1.5px] bg-surface-dark p-5 ${border}`}
    >
      <h3 id={labelId} className={`mb-3 text-[0.85rem] font-bold uppercase tracking-[0.1em] ${label}`}>
        {tone === "before" ? "Before" : "After"}
      </h3>
      <div className={`mb-3 rounded-lg p-4 ${bg}`}>
        <div className="mb-1.5 flex items-center gap-2">
          <TicketBadge id={ticketId} tone={tone} />
          <span className="text-[0.72rem] text-text-muted">Bug · Dragon</span>
        </div>
        <p className="text-[0.9rem] font-semibold leading-[1.4] text-white">
          {summary}
        </p>
      </div>
      <div className="flex-1 overflow-auto rounded-lg border border-[#2a2d32] bg-[#12161a] p-4 font-mono text-[0.78rem] leading-[1.7] text-[#c0c0c0]">
        {children}
      </div>
    </article>
  );
}

export default function Slide11TicketQuality() {
  return (
    <SlideShell ariaLabel="Dragon ticket quality before and after">
      <Eyebrow>Dragon: Ticket Quality</Eyebrow>
      <SlideHeading accent="teal">
        Tickets on-call can
        <br />
        <em>actually parse</em>
      </SlideHeading>

      <div className="grid h-full grid-cols-1 gap-5 md:grid-cols-2">
        <Reveal step={1} className="h-full">
          <TicketPanel
            tone="before"
            ticketId="COSM-3437"
            summary="bug - segment control board shows empty list"
            labelId="s11-before"
          >
            <span className="text-[#888]">Description:</span>
            <br />
            <span className="text-[#c0c0c0]">
              *Current vs Expected* The SCB should show all segments but list
              is empty Expected all segments visible{" "}
              <span className="rounded bg-[#3a1a1a] px-1 text-pink">
                \n \n
              </span>{" "}
              *Blocked* Live class in progress. Affects all producers{" "}
              <span className="rounded bg-[#3a1a1a] px-1 text-pink">
                \n \n
              </span>{" "}
              Known Workaround Yes Re-importing class plan *Stakeholders*
              Studio Media Streaming *Steps* class library → SCB *Recurrence*
              happening repeatedly started after deploy
            </span>
            <br />
            <br />
            <span className="text-[#888]">Priority:</span>{" "}
            <span className="text-[#c0c0c0]">Medium</span>
            {"  "}
            <span className="text-[#888]">Labels:</span>{" "}
            <span className="italic text-[#666]">(none)</span>
          </TicketPanel>
        </Reveal>

        <Reveal step={2} className="h-full">
          <TicketPanel
            tone="after"
            ticketId="COSM-3585"
            summary="[BUG][PROD] Segment Control Board — empty segment list blocks live producers"
            labelId="s11-after"
          >
            <span className="text-[#888]">Current vs. expected behavior:</span>
            <br />
            <span>
              SCB shows an empty list. Expected: all segments visible.
            </span>
            <br />
            <br />
            <span className="text-[#888]">Impact:</span>
            <br />
            <span>• Blocking live class in progress</span>
            <br />
            <span>• Affects all producers on the 6am shift</span>
            <br />
            <br />
            <span className="text-[#888]">Known workaround:</span>
            <br />
            <span>Re-importing the class plan</span>
            <br />
            <br />
            <span className="text-[#888]">Stakeholders:</span>{" "}
            <span>Studio, Media Streaming</span>
            <br />
            <span className="text-[#888]">Recurrence:</span>{" "}
            <span>Repeatedly — started after latest deploy</span>
            <br />
            <br />
            <span className="text-[#888]">Priority:</span>{" "}
            <span className="text-teal font-bold">High</span>
            {"  "}
            <span className="text-[#888]">Labels:</span>{" "}
            <span className="text-teal">prod-incident</span>
          </TicketPanel>
        </Reveal>
      </div>
    </SlideShell>
  );
}

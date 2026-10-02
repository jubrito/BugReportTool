import Eyebrow from "../components/Eyebrow";
import SlideHeading from "../components/SlideHeading";
import SlideShell from "../components/SlideShell";
import Reveal from "../presentation/Reveal";

function JiraBugBadge() {
  return (
    <span
      aria-hidden="true"
      className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-[3px] bg-red-500 text-[0.5rem] font-bold text-white"
    >
      ✕
    </span>
  );
}

function JiraDetailRow({ label, value, valueClass = "text-[#172b4d]" }) {
  return (
    <div className="py-1.5 border-b border-[#ebecf0] last:border-0">
      <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-[#6b778c]">
        {label}
      </p>
      <p className={`mt-0.5 text-[0.72rem] leading-[1.4] ${valueClass}`}>
        {value}
      </p>
    </div>
  );
}

function JiraTicket({ issueKey, summary, descriptionRows, details, labelId }) {
  return (
    <article
      aria-labelledby={labelId}
      className="h-full overflow-hidden rounded bg-white text-[#172b4d]"
      style={{
        boxShadow: "0 1px 3px rgb(9 30 66/.12), 0 0 0 1px rgb(9 30 66/.1)",
      }}
    >
      {/* Breadcrumb header */}
      <div className="flex items-center gap-1.5 border-b border-[#ebecf0] bg-[#f4f5f7] px-3 py-1.5">
        <JiraBugBadge />
        <span className="text-[0.65rem] text-[#5e6c84]">Projects</span>
        <span className="text-[0.65rem] text-[#5e6c84]">/</span>
        <span className="text-[0.65rem] text-[#0052cc]">Bug Reports</span>
        <span className="text-[0.65rem] text-[#5e6c84]">/</span>
        <span className="text-[0.65rem] font-semibold text-[#5e6c84]">
          {issueKey}
        </span>
      </div>

      <div className="flex h-full">
        {/* Left: title + description */}
        <div className="flex-1 overflow-auto border-r border-[#ebecf0] px-3 py-2.5">
          <h3
            id={labelId}
            className="mb-2 text-[0.82rem] font-semibold leading-[1.35] text-[#172b4d]"
          >
            {summary}
          </h3>
          <p className="mb-1 text-[0.65rem] font-semibold text-[#6b778c] uppercase tracking-wide">
            Description
          </p>
          <div className="space-y-0.5 text-[0.7rem] leading-[1.55] text-[#172b4d]">
            {descriptionRows.map((row, i) => (
              <p
                key={i}
                className={
                  row.muted
                    ? "text-[#6b778c]"
                    : row.mono
                      ? "font-mono text-[0.65rem] text-[#888]"
                      : ""
                }
              >
                {row.text}
              </p>
            ))}
          </div>
        </div>

        {/* Right: details panel */}
        <div className="w-[140px] shrink-0 bg-[#f4f5f7] px-2.5 py-2">
          {details.map(({ label, value, valueClass }) => (
            <JiraDetailRow
              key={label}
              label={label}
              value={value}
              valueClass={valueClass}
            />
          ))}
        </div>
      </div>
    </article>
  );
}

const BEFORE_DESC = [
  { text: "**User:** juliana.brito@onepeloton.com", mono: true },
  { text: "**Platform:** COSMOS", mono: true },
  { text: "**Created:** 2026-08-25T19:59:40Z", mono: true },
  { text: "" },
  { text: "**AI Triage Reasoning:**", mono: true },
  { text: "Manually escalated by engineer <@U06SNC3UARZ>", mono: true },
  { text: "" },
  { text: "**Conversation Transcript:**", mono: true },
  { text: "[2026-08-25T19:59:40Z] BOT:", mono: true },
  { text: "<https://cosmos-stage.onepeloton.com/|*Cosmos Link*>", mono: true },
  { text: "*Current vs. expected:* Testing", mono: true },
  { text: "*On Call:* <@U06SNC3UARZ>", mono: true },
  { text: "" },
  {
    text: "**Slack Thread:** https://peloton.slack.com/archives/C0ALK2GKDB8/p1787...",
    mono: true,
  },
];

const BEFORE_DETAILS = [
  { label: "Status", value: "To Do" },
  {
    label: "Assignee",
    value: "Unassigned",
    valueClass: "text-[#6b778c] italic",
  },
  { label: "Reporter", value: "Dragon" },
  { label: "Priority", value: "Medium" },
  { label: "Labels", value: "(none)", valueClass: "text-[#6b778c] italic" },
  { label: "Parent", value: "(none)", valueClass: "text-[#6b778c] italic" },
];

const AFTER_DESC = [
  { text: "Bug report" },
  { text: "" },
  { text: "Report details", muted: true },
  { text: "Datadog RUM Link · Created Sep 10, 2026 11:41 am", muted: true },
  { text: "Original #cosmos-bug-reports report", muted: true },
  { text: "" },
  { text: "User: @Juliana Brito (juliana.brito@onepeloton.com)" },
  { text: "Engineer on-call: @Paulo Calixto (paulo.calixto@onepeloton.com)" },
  {
    text: "Manually escalated by: @Juliana Brito (juliana.brito@onepeloton.com)",
  },
  { text: "" },
  { text: "Issue reported", muted: true },
  { text: "Path: / · Environment: PRODUCTION" },
  { text: "Current vs. expected: TEST prod ignore" },
  { text: "Stakeholders: Media Streaming" },
  { text: "Recurrence: Is happening repeatedly" },
];

const AFTER_DETAILS = [
  { label: "Status", value: "To Do" },
  { label: "Assignee", value: "On-Call" },
  { label: "Reporter", value: "Dragon" },
  {
    label: "Priority",
    value: "High",
    valueClass: "font-semibold text-orange-600",
  },
  { label: "Labels", value: "dragon-escalation", valueClass: "text-[#0052cc]" },
  {
    label: "Parent",
    value: "🎯 Bug Reports EPIC",
    valueClass: "text-[#0052cc]",
  },
];

export default function Slide11TicketQuality() {
  return (
    <SlideShell ariaLabel="Dragon Jira ticket quality improvement">
      <Eyebrow>Dragon: Ticket Quality</Eyebrow>
      <SlideHeading accent="teal">
        From raw Slack markup
        <br />
        <em>to readable Jira tickets</em>
      </SlideHeading>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <p className="text-[0.78rem] font-bold uppercase tracking-[0.1em] text-pink">
            Before — JIRA-3437
          </p>
          <Reveal step={1} className="h-full">
            <JiraTicket
              issueKey="JIRA-3437"
              summary="[COSMOS] @U0AM4H9CEA1 bug"
              descriptionRows={BEFORE_DESC}
              details={BEFORE_DETAILS}
              labelId="s11-before"
            />
          </Reveal>
        </div>

        <div className="flex flex-col gap-1.5">
          <p className="text-[0.78rem] font-bold uppercase tracking-[0.1em] text-teal">
            After — JIRA-3508
          </p>
          <Reveal step={2} className="h-full">
            <JiraTicket
              issueKey="JIRA-3508"
              summary="[On-call] Segment Control Board — empty list blocking live class producers"
              descriptionRows={AFTER_DESC}
              details={AFTER_DETAILS}
              labelId="s11-after"
            />
          </Reveal>
        </div>
      </div>

      <Reveal step={2}>
        <ul className="mt-3 flex flex-wrap gap-x-8 gap-y-1 list-none p-0 m-0">
          {[
            {
              label: "Title",
              from: "[COSMOS] @SlackUserId bug",
              to: "[on-call] AI-generated summary",
            },
            { label: "Identities", from: "email only", to: "Name (email)" },
            {
              label: "Links",
              from: "peloton.slack.com (broken)",
              to: "enterprise URL (working)",
            },
            {
              label: "Metadata",
              from: "no parent, no labels",
              to: "Bug Reports EPIC + dragon label",
            },
          ].map(({ label, from, to }) => (
            <li
              key={label}
              className="flex items-center gap-1.5 text-[0.78rem]"
            >
              <span className="font-semibold text-text">{label}:</span>
              <span className="text-pink">{from}</span>
              <span aria-hidden="true" className="text-text-muted">
                →
              </span>
              <span className="text-teal">{to}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </SlideShell>
  );
}

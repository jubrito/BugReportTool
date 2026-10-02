import Eyebrow from "../components/Eyebrow";
import SlideHeading from "../components/SlideHeading";
import SlideShell from "../components/SlideShell";
import {
  SlackBotHeader,
  SlackCardShell,
  SlackThreadDivider,
} from "../components/SlackCard";
import Reveal from "../presentation/Reveal";

function DragonRow({ label, value, valueClass = "text-[#c0c0c0]" }) {
  return (
    <div className="flex items-baseline gap-1.5">
      <span className="shrink-0 text-[0.8rem] text-[#888]">{label}</span>
      <span className={`text-[0.85rem] ${valueClass}`}>{value}</span>
    </div>
  );
}

function TicketCreatedCard() {
  return (
    <SlackCardShell>
      <SlackBotHeader name="Dragon" time="11:33 AM" />
      <div className="text-[#d1d2d3]">
        <p className="mb-2 text-[0.9rem] font-bold text-white">
          🎟️ Jira ticket created
        </p>
        <div className="rounded-lg border border-[#2f3338] bg-[#0f1316] p-3">
          <p className="mb-2 text-[0.82rem] font-semibold leading-[1.4] text-white">
            <span className="mr-1.5 font-bold text-teal">COSM-3585</span>
            [BUG][PROD] Segment Control Board — empty segment list
          </p>
          <div className="space-y-0.5">
            <DragonRow label="Priority:" value="High" valueClass="font-bold text-teal" />
            <DragonRow label="Component:" value="Platform" />
            <DragonRow label="Assigned:" value="On-Call" />
          </div>
        </div>
      </div>
    </SlackCardShell>
  );
}

function BugResolvedCard() {
  return (
    <SlackCardShell>
      <SlackBotHeader name="Dragon" time="4:16 PM" />
      <div className="text-[#d1d2d3]">
        <p className="mb-2 text-[0.9rem] font-bold text-white">
          ✅ COSM-3585 resolved
        </p>
        <div className="rounded-lg border border-[#2f3338] bg-[#0f1316] p-3">
          <p className="mb-2 text-[0.82rem] leading-[1.4] text-[#aaa]">
            Segment Control Board — empty segment list
          </p>
          <div className="space-y-0.5">
            <DragonRow label="Status:" value="In Progress → Done" />
            <DragonRow label="Resolved by:" value="@engineer" />
          </div>
          <p className="mt-2.5 text-[0.8rem] text-[#9b9da0]">
            ✉️ Original reporter has been notified
          </p>
        </div>
      </div>
    </SlackCardShell>
  );
}

export default function Slide12Notifications() {
  return (
    <SlideShell ariaLabel="Dragon Slack notifications">
      <Eyebrow>Dragon: Slack Notifications</Eyebrow>
      <SlideHeading accent="amber">
        Dragon keeps everyone
        <br />
        <em>in the loop</em>
      </SlideHeading>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-[1fr_auto_1fr]">
        <Reveal step={1}>
          <SlackCardShell>
            <SlackBotHeader time="11:32 AM" />
            <div className="text-[#d1d2d3]">
              <span className="font-bold text-green underline">Team Link</span>
              <br />
              <span className="font-bold text-green underline">
                Datadog RUM Link
              </span>
              <br />
              <span className="font-bold text-white">Environment:</span>{" "}
              PRODUCTION
              <br />
              <span className="font-bold text-white">Path:</span> /programs
              <br />
              <span className="font-bold text-white">User:</span>{" "}
              reporter@onepeloton.com
              <br />
              <span className="font-bold text-white">
                Current vs. expected:
              </span>{" "}
              SCB shows empty list; all segments should be visible.
              <br />
              <span className="font-bold text-white">On Call:</span> @Juliana
            </div>
          </SlackCardShell>
        </Reveal>

        <div className="flex items-center justify-center">
          <SlackThreadDivider replyCount={2} />
        </div>

        <div className="flex flex-col gap-3.5">
          <Reveal step={2}>
            <TicketCreatedCard />
          </Reveal>
          <Reveal step={3}>
            <BugResolvedCard />
          </Reveal>
        </div>
      </div>
    </SlideShell>
  );
}

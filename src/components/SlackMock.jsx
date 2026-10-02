import { SlackBotHeader, SlackCardShell, SlackThreadDivider } from "./SlackCard";

const REPLY_ROWS = [
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
];

export default function SlackMock() {
  return (
    <div className="flex h-full min-h-full flex-col gap-3.5">
      <SlackCardShell>
        <SlackBotHeader time="11:32 AM" />
        <div className="text-[#d1d2d3]">
          <span className="font-bold text-green underline">Team Link</span>
          <br />
          <span className="font-bold text-green underline">Datadog RUM Link</span>
          <br />
          <span className="font-bold text-white">Environment:</span> PRODUCTION
          <br />
          <span className="font-bold text-white">Path:</span> /programs
          <br />
          <span className="font-bold text-white">User:</span>{" "}
          reporter@onepeloton.com
          <br />
          <span className="font-bold text-white">
            Current vs. expected behavior:
          </span>{" "}
          The Segment Control Board should show all segments, but the list is
          empty.
          <br />
          <span className="font-bold text-white">Business Hours On Call:</span>{" "}
          @Juliana
        </div>
      </SlackCardShell>

      <SlackThreadDivider replyCount={1} />

      <SlackCardShell>
        <SlackBotHeader time="11:32 AM" />
        <dl className="text-[#c8c9ca]">
          {REPLY_ROWS.map(([label, value], i) => (
            <div key={label} className={i === 0 ? "" : "mt-2.5"}>
              <dt className="block font-bold text-[#ececed]">{label}</dt>
              <dd className="mb-0.5 block text-[#c0c0c0]">{value}</dd>
            </div>
          ))}
        </dl>
      </SlackCardShell>
    </div>
  );
}

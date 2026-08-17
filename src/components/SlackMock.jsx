import { ArrowDown } from "lucide-react";

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

function BotHeader() {
  return (
    <div className="mb-3 flex items-center gap-2">
      <img
        src={`${import.meta.env.BASE_URL}leto.png`}
        alt=""
        aria-hidden="true"
        width={28}
        height={28}
        className="h-7 w-7 shrink-0 rounded-md"
        loading="lazy"
        decoding="async"
      />
      <span className="text-[0.9rem] font-bold text-white">Team Slack bot</span>
      <time
        dateTime="11:32"
        className="text-[0.72rem] font-normal text-[#9b9da0]"
      >
        11:32 AM
      </time>
    </div>
  );
}

function Card({ children }) {
  return (
    <div className="h-full rounded-2xl border-[1.5px] border-[#3c3f44] bg-[#192023] p-6 font-[Lato,'Segoe_UI',sans-serif] text-[0.88rem] leading-[1.75]">
      {children}
    </div>
  );
}

export default function SlackMock() {
  return (
    <div className="flex h-full min-h-full flex-col gap-3.5">
      <Card>
        <BotHeader />
        <div className="text-[#d1d2d3]">
          <span className="font-bold text-green underline">Team Link</span>
          <br />
          <span className="font-bold text-green underline">
            Datadog RUM Link
          </span>
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
      </Card>

      <p className="flex items-center justify-center gap-1 text-center text-[0.72rem] font-bold uppercase tracking-[0.07em] text-[#9b9da0]">
        <ArrowDown aria-hidden="true" className="h-3 w-3" /> 1 reply
      </p>

      <Card>
        <BotHeader />
        <dl className="text-[#c8c9ca]">
          {REPLY_ROWS.map(([label, value], i) => (
            <div key={label} className={i === 0 ? "" : "mt-2.5"}>
              <dt className="block font-bold text-[#ececed]">{label}</dt>
              <dd className="mb-0.5 block text-[#c0c0c0]">{value}</dd>
            </div>
          ))}
        </dl>
      </Card>
    </div>
  );
}

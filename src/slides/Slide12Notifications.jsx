import Eyebrow from "../components/Eyebrow";
import SlideHeading from "../components/SlideHeading";
import SlideShell from "../components/SlideShell";
import {
  SlackBotHeader,
  SlackCardShell,
  SlackThreadDivider,
} from "../components/SlackCard";
import Reveal from "../presentation/Reveal";

function EscalationRequestLabel() {
  return (
    <span className="inline-block rounded bg-amber-softer px-1.5 py-0.5 text-sm font-bold uppercase tracking-wide text-amber">
      Escalation Request
    </span>
  );
}

function DragonEscalationPostLabel() {
  return (
    <span className="inline-block rounded bg-amber-softer px-1.5 py-0.5 text-sm font-bold uppercase tracking-wide text-amber">
      Dragon escalation post
    </span>
  );
}

function SectionLabel({ children }) {
  return (
    <p className="mb-1 text-[0.68rem] font-bold uppercase tracking-[0.1em] text-[#9b9da0]">
      {children}
    </p>
  );
}

function DragonHeader() {
  return (
    <SlackBotHeader
      name="Dragon AI Bot"
      time="11:33 AM"
      src="dragon-slack-icon.jpg"
    />
  );
}

export default function Slide12Notifications() {
  return (
    <SlideShell ariaLabel="Dragon Slack notification improvements">
      <Eyebrow>Dragon Slack Messages</Eyebrow>
      <SlideHeading accent="amber">
        Improving Slack notifications during
        <br />
        <em>bug report escalation</em>
      </SlideHeading>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Thread messages column */}
        <div className="flex flex-col gap-3">
          <SectionLabel>
            <EscalationRequestLabel /> Reply to Dragon AI Channel post
          </SectionLabel>

          {/* After thread */}
          <Reveal step={2}>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-2">
                {/* Ack (new) */}
                <SlackCardShell>
                  <DragonHeader />
                  <div className="text-[#d1d2d3]">
                    <p className="text-white mb-2 flex items-start">
                      <img
                        src={`${import.meta.env.BASE_URL}dragon-fire-icon.gif`}
                        alt=""
                        aria-hidden="true"
                        width={20}
                        height={20}
                        className="h-5 w-5 mr-1 shrink-0 rounded-md inline"
                        loading="lazy"
                        decoding="async"
                      />
                      <span className="font-bold text-md">
                        Ticket creation request received! [prod]
                      </span>
                    </p>
                    <ul className="list-disc flex flex-col gap-2">
                      <li className="ml-4">
                        <p className="text-[0.8rem]">
                          <span className="font-semibold text-[#ececed]">
                            Assessment:
                          </span>{" "}
                          <span>Bug report detected 🐛</span>
                          <span className="block">
                            Creating a Jira ticket with the data reported. The
                            ticket will be shared when it's ready.
                          </span>
                        </p>
                      </li>
                      <li className="ml-4">
                        <p className="text-[0.8rem]">
                          <span className="font-semibold text-[#ececed]">
                            Reasoning:
                          </span>{" "}
                          Studio team is blocked because users can't change ride
                          images. When uploading an image with the correct
                          requirements, they still encounter an error that
                          prevents the class thumbnail upload.
                        </p>
                      </li>
                      <li className="ml-4">
                        <p className="text-[0.8rem]">
                          <span className="font-semibold text-[#ececed]">
                            Confidence:
                          </span>{" "}
                          80%
                        </p>
                      </li>
                    </ul>
                  </div>
                </SlackCardShell>

                <SlackThreadDivider replyCount={1} />

                {/* Success reply */}
                <SlackCardShell>
                  <DragonHeader />
                  <div className="text-[#d1d2d3] flex flex-col gap-1">
                    <p className="text-white flex items-start">
                      <img
                        src={`${import.meta.env.BASE_URL}dragon-fire-icon.gif`}
                        alt=""
                        aria-hidden="true"
                        width={20}
                        height={20}
                        className="h-5 w-5 mr-1 shrink-0 rounded-md inline"
                        loading="lazy"
                        decoding="async"
                      />
                      <span className="font-bold">
                        Ticket creation request succeeded ✅ [prod]
                      </span>
                    </p>
                    <ul className="list-disc flex flex-col gap-2">
                      <li className="ml-4">
                        <p className="text-[0.8rem]">
                          New ticket:{" "}
                          <span className="font-bold text-teal underline">
                            JIRA-3585
                          </span>
                        </p>
                      </li>
                      <li className="ml-4">
                        <p className="text-[0.8rem]">
                          <span className="font-bold text-teal underline">
                            Dragon escalation post
                          </span>
                        </p>
                      </li>
                    </ul>
                  </div>
                </SlackCardShell>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Eng channel post column */}
        <div className="flex flex-col gap-3">
          <SectionLabel>
            <DragonEscalationPostLabel /> Post to Dragon AI Channel
          </SectionLabel>

          {/* After eng post */}
          <Reveal step={2}>
            <div className="flex flex-col gap-2">
              <SlackCardShell>
                <DragonHeader />
                <div className="text-[#d1d2d3]">
                  <p className="mb-2 font-bold text-white flex items-start">
                    <img
                      src={`${import.meta.env.BASE_URL}dragon-icon.png`}
                      alt=""
                      aria-hidden="true"
                      width={20}
                      height={20}
                      className="h-5 w-5 mr-1 shrink-0 rounded-md inline"
                      loading="lazy"
                      decoding="async"
                    />
                    New Escalation:{" "}
                    <span className="text-teal underline">JIRA-3585</span>
                    <span className="ml-1">[prod]</span>
                  </p>
                  <ul className="list-disc flex flex-col gap-2">
                    <li className="ml-4">
                      <p className="text-[0.82rem]">
                        <span className="font-bold text-[#ececed]">
                          Reporter:
                        </span>{" "}
                        Reporter Name (reporter@onepeloton.com)
                      </p>
                    </li>
                    <li className="ml-4">
                      <p className="text-[0.82rem]">
                        <span className="font-bold text-[#ececed]">
                          Dragon slack thread:
                        </span>{" "}
                        <span className="text-teal underline">
                          Bug report details
                        </span>
                      </p>
                    </li>
                    <li className="ml-4">
                      <p className="text-[0.82rem]">
                        <span className="font-bold text-[#ececed]">
                          AI assessment:
                        </span>{" "}
                        Ride details page is possibly checking the image size
                        instead of the image requirements and throwing an error
                        notification that don't align with the actual
                        requirements.
                      </p>
                    </li>
                    <li className="ml-4">
                      <p className="mt-1 text-[0.78rem]">
                        <span className="font-bold">Manually escalated </span>by
                        @Engineer
                      </p>
                    </li>
                  </ul>
                </div>
              </SlackCardShell>
            </div>
          </Reveal>
        </div>
      </div>
    </SlideShell>
  );
}

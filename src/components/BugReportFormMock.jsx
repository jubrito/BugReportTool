import { useRef, useState } from "react";
import { createPortal } from "react-dom";

const NORMAL_DATA = {
  currentVsExpected:
    "The Segment Control Board shows an empty list; all segments should be visible and selectable.",
  isBlocker: "block",
  impactScope: "Live class in progress",
  hasWorkaround: "Yes",
  workarounds: "Re-importing the class plan",
  stakeholders: ["Studio", "Media Streaming"],
  recurrence: "First time for me",
  additionalDetails:
    "Started after the latest deploy. Steps to reproduce: class library → open SCB.",
};

const TEST_DATA = {
  currentVsExpected: "TEST current vs. expected behavior",
  isBlocker: "impact",
  impactScope: "Just me",
  hasWorkaround: "Yes",
  workarounds: "TEST workarounds",
  stakeholders: ["Studio", "Other"],
  stakeholdersDetails: "TEST stakeholders",
  recurrence: "First time for me",
  additionalDetails: "TEST additional details",
};

const IMPACT_SCOPE_OPTIONS = [
  "Just me",
  "Upcoming deadline",
  "Class drop/publish/update",
  "Live class in progress",
  "Not sure",
  "Other",
];

const IMPACT_SCOPE_WEIGHTS = {
  "Just me": "low",
  "Upcoming deadline": "medium",
  "Class drop/publish/update": "high",
  Studio: "high",
  "Live class in progress": "critical",
};

const STAKEHOLDER_OPTIONS = [
  "Media",
  "Media Streaming",
  "Programming",
  "Music",
  "Studio",
  "Other",
];

const RECURRENCE_OPTIONS = [
  "First time for me",
  "Has happened occasionally",
  "Is happening repeatedly",
];

const RECURRENCE_WEIGHTS = {
  "First time for me": "low",
  "Has happened occasionally": "medium",
  "Is happening repeatedly": "critical",
};

const WORKAROUND_WEIGHTS = {
  Yes: "low",
  No: "critical",
};

// MUI ToggleButton weight-based selected colours
const WEIGHT_SELECTED_STYLE = {
  low: {
    color: "#2e7d32",
    borderColor: "#2e7d32",
    backgroundColor: "rgba(46,125,50,0.12)",
  },
  medium: {
    color: "#e65100",
    borderColor: "#ff9800",
    backgroundColor: "rgba(255,152,0,0.12)",
  },
  high: {
    color: "#e65100",
    borderColor: "#f57c00",
    backgroundColor: "rgba(230,81,0,0.12)",
  },
  critical: {
    color: "#c62828",
    borderColor: "#c62828",
    backgroundColor: "rgba(198,40,40,0.12)",
  },
};

const SELECTED_STYLE = {
  color: "#1565c0",
  borderColor: "#1976d2",
  backgroundColor: "rgba(25,118,210,0.12)",
};
const UNSELECTED_STYLE = {
  color: "rgba(0,0,0,0.87)",
  borderColor: "rgba(0,0,0,0.12)",
  backgroundColor: "transparent",
};

// MUI ToggleButton – used for wrapping option groups (stakeholders, impact scope, recurrence)
function ToggleChip({ label, selected, weight, onClick, isFirst, isLast }) {
  const style = selected
    ? weight
      ? (WEIGHT_SELECTED_STYLE[weight] ?? SELECTED_STYLE)
      : SELECTED_STYLE
    : UNSELECTED_STYLE;
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        padding: "4px 15px",
        fontSize: "0.8125rem",
        lineHeight: 1.75,
        fontWeight: selected ? 500 : 400,
        border: `1px solid ${style.borderColor}`,
        borderLeft: isFirst ? `1px solid ${style.borderColor}` : "none",
        borderRadius: isFirst ? "4px 0 0 4px" : isLast ? "0 4px 4px 0" : 0,
        boxShadow: !isLast ? "inset -1px 0 0 0 rgba(0,0,0,0.12)" : "none",
        color: style.color,
        backgroundColor: style.backgroundColor,
        cursor: "pointer",
        transition: "background-color 0.15s, color 0.15s, border-color 0.15s",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </button>
  );
}

// MUI ToggleButtonGroup – connected inline group (mode toggle, yes/no)
function ToggleGroup({ options, value, onChange, labelFn, thin }) {
  return (
    <div
      style={{ display: "inline-flex", borderRadius: 4, overflow: "hidden" }}
    >
      {options.map((opt, i) => {
        const selected = value === opt;
        const style = selected ? SELECTED_STYLE : UNSELECTED_STYLE;
        const isFirst = i === 0;
        const isLast = i === options.length - 1;
        return (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            style={{
              padding: !thin ? "4px 15px" : "0px 10px",
              fontSize: "0.8125rem",
              lineHeight: !thin ? 1.75 : 1.5,
              fontWeight: selected ? 500 : 400,
              color: style.color,
              backgroundColor: style.backgroundColor,
              cursor: "pointer",
              transition: "background-color 0.15s, color 0.15s",
              border: `1px solid ${style.borderColor}`,
              borderLeft: isFirst ? `1px solid ${style.borderColor}` : "none",
              borderRadius: isFirst
                ? "4px 0 0 4px"
                : isLast
                  ? "0 4px 4px 0"
                  : 0,
              boxShadow: !isLast ? "inset -1px 0 0 0 rgba(0,0,0,0.12)" : "none",
            }}
          >
            {labelFn ? labelFn(opt) : opt}
          </button>
        );
      })}
    </div>
  );
}

// Blue info tooltip icon matching CosmosToolTip.
// Uses a portal so the tooltip renders at document root, escaping any overflow:hidden container.
function HintIcon({ title }) {
  const iconRef = useRef(null);
  const [tooltipPos, setTooltipPos] = useState(null);

  const show = () => {
    if (!iconRef.current) return;
    const r = iconRef.current.getBoundingClientRect();
    setTooltipPos({ x: r.left + r.width / 2, y: r.bottom + 8 });
  };
  const hide = () => setTooltipPos(null);

  return (
    <span
      style={{
        display: "inline-flex",
        verticalAlign: "middle",
        pointerEvents: "auto",
        flexShrink: 0,
      }}
    >
      <span
        ref={iconRef}
        tabIndex={0}
        aria-label={title}
        onMouseEnter={show}
        onMouseLeave={hide}
        onFocus={show}
        onBlur={hide}
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 16,
          height: 16,
          borderRadius: "50%",
          backgroundColor: "#1976d2",
          color: "#fff",
          fontSize: "0.6rem",
          fontWeight: 700,
          cursor: "help",
          lineHeight: 1,
        }}
      >
        ?
      </span>
      {tooltipPos &&
        createPortal(
          <span
            role="tooltip"
            style={{
              position: "fixed",
              top: tooltipPos.y,
              left: tooltipPos.x,
              transform: "translateX(-50%)",
              width: 220,
              padding: "6px 10px",
              borderRadius: 4,
              backgroundColor: "rgba(97,97,97,0.92)",
              color: "#fff",
              fontSize: "0.7rem",
              lineHeight: 1.4,
              pointerEvents: "none",
              zIndex: 9999,
              whiteSpace: "normal",
            }}
          >
            {title}
          </span>,
          document.body
        )}
    </span>
  );
}

// MUI outlined TextField with floating label
function FormTextField({
  label,
  value,
  onChange,
  multiline = false,
  rows = 2,
  hint,
  required = false,
}) {
  const [focused, setFocused] = useState(false);
  const floated = focused || !!value;

  return (
    <div style={{ position: "relative", marginTop: 8 }}>
      {/* Floating label */}
      <label
        style={{
          position: "absolute",
          left: 12,
          top: floated ? 0 : "50%",
          transform: floated
            ? "translateY(-50%) scale(0.75)"
            : "translateY(-50%)",
          transformOrigin: "top left",
          color: focused ? "#1976d2" : "rgba(0,0,0,0.6)",
          fontSize: "1rem",
          lineHeight: 1,
          pointerEvents: "none",
          transition: "top 0.15s, transform 0.15s, color 0.15s",
          backgroundColor: "#fff",
          paddingLeft: 4,
          paddingRight: 4,
          display: "flex",
          alignItems: "center",
          gap: 4,
          zIndex: 1,
          whiteSpace: "nowrap",
        }}
      >
        {label}
        {required && <span style={{ color: "#d32f2f" }}> *</span>}
        {hint && (
          <HintIcon
            title={
              label.includes("current vs. expected")
                ? "What action are you trying to accomplish and what is happening instead?"
                : "e.g. when it started, steps to reproduce, recent changes that may be related."
            }
          />
        )}
      </label>

      {multiline ? (
        <textarea
          value={value}
          onChange={onChange}
          rows={rows}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            width: "100%",
            resize: "none",
            padding: "14px 12px 8px",
            border: `1px solid ${focused ? "#1976d2" : "rgba(0,0,0,0.23)"}`,
            borderRadius: 4,
            outline: "none",
            fontSize: "0.9375rem",
            lineHeight: 1.5,
            color: "rgba(0,0,0,0.87)",
            backgroundColor: "transparent",
            boxSizing: "border-box",
            boxShadow: focused ? "0 0 0 1px #1976d2" : "none",
            fontFamily: "inherit",
          }}
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            width: "100%",
            padding: "8.5px 12px",
            border: `1px solid ${focused ? "#1976d2" : "rgba(0,0,0,0.23)"}`,
            borderRadius: 4,
            outline: "none",
            fontSize: "0.9375rem",
            color: "rgba(0,0,0,0.87)",
            backgroundColor: "transparent",
            boxSizing: "border-box",
            boxShadow: focused ? "0 0 0 1px #1976d2" : "none",
            fontFamily: "inherit",
          }}
        />
      )}
    </div>
  );
}

function InfoAlert({ children }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: 8,
        padding: "8px 12px",
        borderRadius: 4,
        border: "1px solid #90caf9",
        backgroundColor: "#e3f2fd",
        color: "#0d47a1",
        fontSize: "0.8125rem",
        lineHeight: 1.43,
        marginBottom: 12,
      }}
    >
      <span
        style={{
          color: "white",
          background: "#1565c0",
          fontSize: "0.7rem",
          flexShrink: 0,
          marginTop: 1,
          padding: "0px 5px",
          borderRadius: 12,
        }}
      >
        ℹ
      </span>
      <span style={{ fontWeight: 500 }}>{children}</span>
    </div>
  );
}

function FormSection({ title, children }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <h3
        style={{
          margin: "0 0 12px",
          fontSize: "1.125rem",
          fontWeight: 700,
          color: "rgba(0,0,0,0.87)",
        }}
      >
        {title}
      </h3>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {children}
      </div>
    </div>
  );
}

// MUI Switch – size small, warning colour
function MuiSwitch({ checked, onToggle }) {
  return (
    <label
      style={{
        display: "flex",
        alignItems: "center",
        gap: 6,
        padding: "4px 8px",
        border: "1px solid rgba(0,0,0,0.12)",
        borderRadius: 4,
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      {/* Track + thumb */}
      <span
        onClick={onToggle}
        role="switch"
        aria-checked={checked}
        tabIndex={0}
        onKeyDown={(e) => e.key === " " && onToggle()}
        style={{
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
          width: 34,
          height: 14,
          borderRadius: 7,
          backgroundColor: checked ? "rgba(237,108,2,0.5)" : "rgba(0,0,0,0.38)",
          transition: "background-color 0.2s",
          flexShrink: 0,
        }}
      >
        <span
          style={{
            position: "absolute",
            top: "50%",
            left: checked ? 14 : 0,
            transform: "translateY(-50%)",
            width: 20,
            height: 20,
            borderRadius: "50%",
            backgroundColor: checked ? "#ed6c02" : "#fafafa",
            boxShadow:
              "0 2px 1px -1px rgba(0,0,0,0.2),0 1px 1px 0 rgba(0,0,0,0.14),0 1px 3px 0 rgba(0,0,0,0.12)",
            transition: "left 0.15s, background-color 0.15s",
          }}
        />
      </span>
      <span style={{ fontSize: "0.875rem", color: "rgba(0,0,0,0.87)" }}>
        Test mode
      </span>
      <HintIcon title="Enabling test mode will replace all fields with test data which can be modified when needed. If you send the report with this option enabled, it will skip the main bug reports channel and post to the Dragon channel directly." />
    </label>
  );
}

function BugReportFormOriginalMock() {
  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "#fff",
        color: "rgba(0,0,0,0.87)",
        textAlign: "left",
        fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
        boxShadow:
          "0 11px 15px -7px rgba(0,0,0,0.2),0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12)",
      }}
    >
      {/* Dialog title */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 24px",
          borderBottom: "1px solid rgba(0,0,0,0.12)",
        }}
      >
        <span style={{ fontSize: "1.25rem", fontWeight: 500, lineHeight: 1.6 }}>
          Bug Reporting
        </span>
      </div>

      {/* Content */}
      <div
        style={{
          overflowY: "auto",
          padding: "16px 24px 20px",
          maxHeight: "calc(100vh - 220px)",
        }}
      >
        {/* Additional details */}
        <h3
          style={{
            fontSize: "0.9rem",
            color: "rgba(0,0,0,0.87)",
          }}
        >
          Please write a brief description of the bug you've experienced.
        </h3>
        <FormTextField label="" value={""} multiline rows={9} />
      </div>

      {/* Footer */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 6,
          padding: "0 24px 16px",
          borderTop: "1px solid rgba(0,0,0,0.12)",
        }}
      >
        <p
          style={{
            margin: "8px 0 0",
            fontSize: "0.75rem",
            color: "rgba(0,0,0,0.6)",
          }}
        >
          By clicking "Send Report", your report will be sent to the appropriate
          slack channel including a screen recording link.
        </p>
        <div style={{ display: "flex", justifyContent: "flex-end", gap: 8 }}>
          <button
            type="button"
            style={{
              padding: "6px 16px",
              fontSize: "0.875rem",
              fontWeight: 500,
              borderRadius: 4,
              border: "1px solid rgba(25,118,210,0.5)",
              color: "#1976d2",
              backgroundColor: "transparent",
              cursor: "pointer",
              fontFamily: "inherit",
              transition: "background-color 0.15s",
            }}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor = "rgba(25,118,210,0.04)")
            }
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = "transparent")
            }
          >
            Cancel
          </button>
          <button
            type="button"
            style={{
              padding: "6px 16px",
              fontSize: "0.875rem",
              fontWeight: 500,
              borderRadius: 4,
              border: "none",
              color: "#fff",
              backgroundColor: "#1976d2",
              cursor: "pointer",
              fontFamily: "inherit",
              transition: "background-color 0.15s",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#1565c0")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#1976d2")}
          >
            Send Report
          </button>
        </div>
      </div>
    </div>
  );
}

export default function BugReportFormMock({
  showTestMode = false,
  isDryRun: initialDryRun = false,
  original = false,
}) {
  const [isDryRun, setIsDryRun] = useState(initialDryRun);
  const initial = initialDryRun ? TEST_DATA : NORMAL_DATA;

  const [currentVsExpected, setCurrentVsExpected] = useState(
    initial.currentVsExpected,
  );
  const [isBlocker, setIsBlocker] = useState(initial.isBlocker);
  const [impactScope, setImpactScope] = useState(initial.impactScope);
  const [hasWorkaround, setHasWorkaround] = useState(initial.hasWorkaround);
  const [workarounds, setWorkarounds] = useState(initial.workarounds ?? "");
  const [stakeholders, setStakeholders] = useState(initial.stakeholders);
  const [stakeholdersDetails, setStakeholdersDetails] = useState(
    initial.stakeholdersDetails ?? "",
  );
  const [recurrence, setRecurrence] = useState(initial.recurrence);
  const [additionalDetails, setAdditionalDetails] = useState(
    initial.additionalDetails,
  );

  const handleTestModeToggle = () => {
    const next = !isDryRun;
    setIsDryRun(next);
    const d = next ? TEST_DATA : NORMAL_DATA;
    setCurrentVsExpected(d.currentVsExpected);
    setIsBlocker(d.isBlocker);
    setImpactScope(d.impactScope);
    setHasWorkaround(d.hasWorkaround);
    setWorkarounds(d.workarounds ?? "");
    setStakeholders(d.stakeholders);
    setStakeholdersDetails(d.stakeholdersDetails ?? "");
    setRecurrence(d.recurrence);
    setAdditionalDetails(d.additionalDetails);
  };

  const toggleStakeholder = (opt) =>
    setStakeholders((prev) =>
      prev.includes(opt) ? prev.filter((s) => s !== opt) : [...prev, opt],
    );

  if (original) return <BugReportFormOriginalMock />;

  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "#fff",
        color: "rgba(0,0,0,0.87)",
        textAlign: "left",
        fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
        boxShadow:
          "0 11px 15px -7px rgba(0,0,0,0.2),0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12)",
      }}
    >
      {/* Dialog title */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 24px",
          borderBottom: "1px solid rgba(0,0,0,0.12)",
        }}
      >
        <span style={{ fontSize: "1.25rem", fontWeight: 500, lineHeight: 1.6 }}>
          Bug Reporting
        </span>
        {showTestMode && (
          <MuiSwitch checked={isDryRun} onToggle={handleTestModeToggle} />
        )}
      </div>

      {/* Content */}
      <div
        style={{
          overflowY: "auto",
          padding: "16px 24px 0",
          maxHeight: "calc(100vh - 220px)",
        }}
      >
        <FormSection title="What's broken">
          <FormTextField
            label="What is the current vs. expected behavior?"
            required
            value={currentVsExpected}
            onChange={(e) => setCurrentVsExpected(e.target.value)}
            hint
          />
        </FormSection>

        <FormSection title="Help us triage">
          <InfoAlert>
            The more relevant information you share, the faster we fix it.
            Please fill in as many fields as you can.
          </InfoAlert>

          {/* Impact scope */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 8,
                marginBottom: 8,
              }}
            >
              <span style={{ fontSize: "0.875rem", fontWeight: 700 }}>
                What/who does this issue
              </span>
              <ToggleGroup
                options={["impact", "block"]}
                value={isBlocker}
                onChange={setIsBlocker}
                labelFn={(m) => (m === "impact" ? "Impacting" : "Blocking")}
                thin
              />
              <span style={{ fontSize: "0.875rem" }}>?</span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 0 }}>
              {IMPACT_SCOPE_OPTIONS.map((opt, i) => (
                <ToggleChip
                  key={opt}
                  label={opt}
                  selected={impactScope === opt}
                  weight={IMPACT_SCOPE_WEIGHTS[opt]}
                  onClick={() =>
                    setImpactScope((prev) => (prev === opt ? "" : opt))
                  }
                  isFirst={i === 0}
                  isLast={i === IMPACT_SCOPE_OPTIONS.length - 1}
                />
              ))}
            </div>
          </div>

          {/* Workaround */}
          <div>
            <p
              style={{
                margin: "0 0 8px",
                fontSize: "0.875rem",
                fontWeight: 700,
              }}
            >
              Is there a known workaround?
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              <div style={{ display: "flex", flexWrap: "wrap", gap: 0 }}>
                {["Yes", "No"].map((opt, i) => (
                  <ToggleChip
                    key={opt}
                    label={opt}
                    selected={hasWorkaround === opt}
                    onClick={() => setHasWorkaround(opt)}
                    weight={WORKAROUND_WEIGHTS[opt]}
                    isFirst={i === 0}
                    isLast={i === 1}
                  />
                ))}
              </div>
              {hasWorkaround === "Yes" && (
                <input
                  type="text"
                  value={workarounds}
                  onChange={(e) => setWorkarounds(e.target.value)}
                  placeholder="Describe the workaround"
                  style={{
                    flex: 1,
                    minWidth: 0,
                    border: "none",
                    borderBottom: "1px solid rgba(0,0,0,0.42)",
                    outline: "none",
                    fontSize: "0.9375rem",
                    color: "rgba(0,0,0,0.87)",
                    backgroundColor: "transparent",
                    padding: "2px 0",
                    fontFamily: "inherit",
                  }}
                />
              )}
            </div>
          </div>

          {/* Stakeholders */}
          <div>
            <p
              style={{
                margin: "0 0 8px",
                fontSize: "0.875rem",
                fontWeight: 700,
              }}
            >
              Primary stakeholders
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 0 }}>
              {STAKEHOLDER_OPTIONS.map((opt, i) => (
                <ToggleChip
                  key={opt}
                  label={opt}
                  selected={stakeholders.includes(opt)}
                  onClick={() => toggleStakeholder(opt)}
                  isFirst={i === 0}
                  isLast={i === STAKEHOLDER_OPTIONS.length - 1}
                />
              ))}
            </div>
            {stakeholders.includes("Other") && (
              <input
                type="text"
                value={stakeholdersDetails}
                onChange={(e) => setStakeholdersDetails(e.target.value)}
                placeholder="Stakeholder names, users, channels, emails, etc"
                style={{
                  marginTop: 8,
                  width: "100%",
                  border: "none",
                  borderBottom: "1px solid rgba(0,0,0,0.42)",
                  outline: "none",
                  fontSize: "0.9375rem",
                  color: "rgba(0,0,0,0.87)",
                  backgroundColor: "transparent",
                  padding: "2px 0",
                  boxSizing: "border-box",
                  fontFamily: "inherit",
                }}
              />
            )}
          </div>

          {/* Recurrence */}
          <div>
            <p
              style={{
                margin: "0 0 8px",
                fontSize: "0.875rem",
                fontWeight: 700,
              }}
            >
              Issue recurrence
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 0 }}>
              {RECURRENCE_OPTIONS.map((opt, i) => (
                <ToggleChip
                  key={opt}
                  label={opt}
                  selected={recurrence === opt}
                  weight={RECURRENCE_WEIGHTS[opt]}
                  onClick={() =>
                    setRecurrence((prev) => (prev === opt ? "" : opt))
                  }
                  isFirst={i === 0}
                  isLast={i === RECURRENCE_OPTIONS.length - 1}
                />
              ))}
            </div>
          </div>

          {/* Additional details */}
          <FormTextField
            label="Anything else the on-call engineer should know?"
            value={additionalDetails}
            onChange={(e) => setAdditionalDetails(e.target.value)}
            hint
          />
        </FormSection>
      </div>

      {/* Footer */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 6,
          padding: "0 24px 16px",
          borderTop: "1px solid rgba(0,0,0,0.12)",
        }}
      >
        <p
          style={{
            margin: "8px 0 0",
            fontSize: "0.75rem",
            color: "rgba(0,0,0,0.6)",
          }}
        >
          {isDryRun
            ? "[Test mode] Report not sent to #cosmos-bug-reports — sent to #cosmos-dragon-eng only."
            : 'By clicking "Send Report", your report will be sent to the appropriate slack channel including a screen recording link.'}
        </p>
        <div style={{ display: "flex", justifyContent: "flex-end", gap: 8 }}>
          <button
            type="button"
            style={{
              padding: "6px 16px",
              fontSize: "0.875rem",
              fontWeight: 500,
              borderRadius: 4,
              border: "1px solid rgba(25,118,210,0.5)",
              color: "#1976d2",
              backgroundColor: "transparent",
              cursor: "pointer",
              fontFamily: "inherit",
              transition: "background-color 0.15s",
            }}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor = "rgba(25,118,210,0.04)")
            }
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = "transparent")
            }
          >
            Cancel
          </button>
          <button
            type="button"
            style={{
              padding: "6px 16px",
              fontSize: "0.875rem",
              fontWeight: 500,
              borderRadius: 4,
              border: "none",
              color: "#fff",
              backgroundColor: "#1976d2",
              cursor: "pointer",
              fontFamily: "inherit",
              transition: "background-color 0.15s",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#1565c0")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#1976d2")}
          >
            Send Report{isDryRun ? " to the Dragon channel" : ""}
          </button>
        </div>
      </div>
    </div>
  );
}

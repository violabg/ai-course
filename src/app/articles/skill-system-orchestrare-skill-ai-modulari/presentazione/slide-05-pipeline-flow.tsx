import * as motion from "motion/react-client";
import { SlideFrame, SlideHeading } from "./slide-shared";

const nodes = [
  { id: "input", x: 70, y: 70, label: "Video URL", color: "var(--pres-muted)" },
  {
    id: "orchestrator",
    x: 310,
    y: 70,
    label: "Orchestratore",
    color: "var(--pres-accent)",
  },
  {
    id: "t",
    x: 550,
    y: 70,
    label: "Trascrizione",
    color: "var(--pres-blue)",
  },
  {
    id: "s",
    x: 790,
    y: 70,
    label: "Selezione",
    color: "var(--pres-success)",
  },
  { id: "r", x: 70, y: 250, label: "Reframe", color: "var(--pres-warning)" },
  { id: "e", x: 310, y: 250, label: "Editing", color: "var(--pres-danger)" },
  {
    id: "p",
    x: 550,
    y: 250,
    label: "Publishing",
    color: "var(--pres-accent)",
  },
  {
    id: "out",
    x: 790,
    y: 250,
    label: "5 clip",
    color: "var(--pres-success)",
  },
];

const links = [
  ["input", "orchestrator"],
  ["orchestrator", "t"],
  ["t", "s"],
  ["s", "out"],
  ["out", "p"],
  ["p", "e"],
  ["e", "r"],
] as const;

const flowOrder = [
  "input",
  "orchestrator",
  "t",
  "s",
  "out",
  "p",
  "e",
  "r",
] as const;

const flowIndex: Record<string, number> = Object.fromEntries(
  flowOrder.map((id, index) => [id, index]),
) as Record<string, number>;

function byId(id: (typeof nodes)[number]["id"]) {
  const node = nodes.find((n) => n.id === id);
  if (!node) throw new Error(`Missing node ${id}`);
  return node;
}

export function PipelineFlowSlide() {
  const nodeWidth = 170;
  const nodeHeight = 64;

  return (
    <SlideFrame>
      <SlideHeading
        eyebrow="Case pratico"
        title="Pipeline video: orchestrazione sequenziale"
        description="L'orchestratore non fa i task specialistici: li chiama nel punto giusto."
      />

      <div className="flex-1 mx-auto w-full max-w-6xl">
        <svg viewBox="0 0 1010 420" className="w-full">
          <defs>
            <marker
              id="arrow-accent-flow"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--pres-accent)" />
            </marker>
          </defs>

          {links.map(([a, b], i) => {
            const from = byId(a);
            const to = byId(b);
            const stepIndex = flowIndex[a];
            const dx = to.x - from.x;
            const dy = to.y - from.y;

            const isVertical = dx === 0;
            const x1 = isVertical
              ? from.x + nodeWidth / 2
              : from.x + (dx >= 0 ? nodeWidth + 8 : -8);
            const y1 = isVertical
              ? from.y + (dy > 0 ? nodeHeight + 8 : -8)
              : from.y + nodeHeight / 2;
            const x2 = isVertical
              ? to.x + nodeWidth / 2
              : to.x + (dx >= 0 ? -12 : nodeWidth + 12);
            const y2 = isVertical
              ? to.y + (dy > 0 ? -12 : nodeHeight + 12)
              : to.y + nodeHeight / 2;
            const midX = (x1 + x2) / 2;
            const path =
              dy === 0 || isVertical
                ? `M ${x1} ${y1} L ${x2} ${y2}`
                : `M ${x1} ${y1} L ${midX} ${y1} L ${midX} ${y2} L ${x2} ${y2}`;
            return (
              <motion.path
                key={`${a}-${b}`}
                d={path}
                fill="none"
                stroke="var(--pres-accent)"
                strokeWidth="3"
                markerEnd="url(#arrow-accent-flow)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.22,
                  delay: 0.24 + stepIndex * 0.14 + i * 0.01,
                }}
              />
            );
          })}

          {nodes.map((node, i) => (
            <g key={node.id}>
              {(() => {
                const stepIndex = flowIndex[node.id] ?? i;
                return (
                  <motion.rect
                    x={node.x}
                    y={node.y}
                    width="170"
                    height="64"
                    rx="16"
                    fill="var(--pres-bg-node)"
                    stroke={node.color}
                    strokeWidth="2"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.26,
                      delay: 0.08 + stepIndex * 0.14,
                    }}
                  />
                );
              })()}
              {(() => {
                const stepIndex = flowIndex[node.id] ?? i;
                return (
                  <motion.text
                    x={node.x + 85}
                    y={node.y + 39}
                    textAnchor="middle"
                    fill={node.color}
                    fontSize="22"
                    fontWeight="700"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.22,
                      delay: 0.14 + stepIndex * 0.14,
                    }}
                  >
                    {node.label}
                  </motion.text>
                );
              })()}
            </g>
          ))}
        </svg>
      </div>
    </SlideFrame>
  );
}

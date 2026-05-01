import * as motion from "motion/react-client";
import { SlideFrame, SlideHeading } from "./slide-shared";

const systems = [
  { x: 500, y: 80, label: "Shorts System", color: "var(--pres-success)" },
  { x: 500, y: 190, label: "Newsletter System", color: "var(--pres-blue)" },
  { x: 500, y: 300, label: "SEO Blog System", color: "var(--pres-warning)" },
];

export function ContextRoutingSlide() {
  return (
    <SlideFrame>
      <SlideHeading
        eyebrow="Contesto"
        title="Carica solo i moduli necessari"
        description="Meno contesto inutile = meno rumore = decisioni migliori nello step corrente."
      />

      <div className="flex flex-1 justify-center items-center">
        <div className="w-full max-w-5xl">
          <svg viewBox="0 0 860 430" className="w-full">
            <motion.rect
              x="70"
              y="145"
              width="250"
              height="140"
              rx="26"
              fill="var(--pres-bg-node)"
              stroke="var(--pres-accent)"
              strokeWidth="2.5"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            />
            <text
              x="195"
              y="203"
              textAnchor="middle"
              fill="var(--pres-text)"
              fontSize="30"
              fontWeight="700"
            >
              Skill
            </text>
            <text
              x="195"
              y="241"
              textAnchor="middle"
              fill="var(--pres-text)"
              fontSize="30"
              fontWeight="700"
            >
              Library
            </text>

            {systems.map((system, i) => (
              <g key={system.label}>
                <motion.path
                  d={`M 328 215 L 420 215 L 420 ${system.y + 30} L ${system.x - 8} ${system.y + 30}`}
                  fill="none"
                  stroke={system.color}
                  strokeWidth="3"
                  strokeDasharray="7 5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.28, delay: 0.15 + i * 0.14 }}
                />
                <motion.rect
                  x={system.x}
                  y={system.y}
                  width="270"
                  height="60"
                  rx="16"
                  fill="var(--pres-bg-node)"
                  stroke={system.color}
                  strokeWidth="2"
                  initial={{ opacity: 0, x: 18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.34, delay: 0.22 + i * 0.12 }}
                />
                <motion.text
                  x={system.x + 135}
                  y={system.y + 37}
                  textAnchor="middle"
                  fill={system.color}
                  fontSize="24"
                  fontWeight="700"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.25, delay: 0.3 + i * 0.12 }}
                >
                  {system.label}
                </motion.text>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </SlideFrame>
  );
}

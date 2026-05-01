import * as motion from "motion/react-client";
import { PILLAR_COLORS, SlideFrame, SlideHeading } from "./slide-shared";

const pillars = [
  { label: "Architettura skill", x: 70, color: PILLAR_COLORS[0] },
  { label: "Input dichiarati", x: 280, color: PILLAR_COLORS[1] },
  { label: "Handoff output", x: 490, color: PILLAR_COLORS[2] },
  { label: "Checkpoint umani", x: 700, color: PILLAR_COLORS[3] },
  { label: "Display risultati", x: 910, color: PILLAR_COLORS[4] },
] as const;

const VIEWBOX_WIDTH = 1100;
const TOP_BOX_WIDTH = 260;
const CENTER_X = VIEWBOX_WIDTH / 2;
const TOP_BOX_X = CENTER_X - TOP_BOX_WIDTH / 2;

export function FivePillarsSlide() {
  return (
    <SlideFrame>
      <SlideHeading
        eyebrow="Metodo"
        title="Cinque pilastri dell'orchestrazione"
        description="Se uno manca, il workflow perde affidabilita."
      />

      <div className="flex flex-1 justify-center items-center">
        <div className="w-full max-w-6xl">
          <svg viewBox={`0 0 ${VIEWBOX_WIDTH} 430`} className="w-full">
            <motion.rect
              x={TOP_BOX_X}
              y="70"
              width={TOP_BOX_WIDTH}
              height="74"
              rx="18"
              fill="var(--pres-bg-node)"
              stroke="var(--pres-accent)"
              strokeWidth="2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            />
            <motion.text
              x={CENTER_X}
              y="116"
              textAnchor="middle"
              fill="var(--pres-accent)"
              fontSize="33"
              fontWeight="700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              Skill System
            </motion.text>

            {pillars.map((pillar, i) => {
              const cardCenterX = pillar.x + 95;
              const cardTopY = 270;
              const sourceX = CENTER_X;
              const sourceY = 152;
              const midY = 210;
              const color = pillar.color;

              const path =
                cardCenterX === sourceX
                  ? `M ${sourceX} ${sourceY} L ${cardCenterX} ${cardTopY - 12}`
                  : `M ${sourceX} ${sourceY} L ${sourceX} ${midY} L ${cardCenterX} ${midY} L ${cardCenterX} ${cardTopY - 12}`;

              return (
                <g key={pillar.label}>
                  <motion.path
                    d={path}
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeDasharray="6 4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.25, delay: 0.18 + i * 0.12 }}
                  />
                  <motion.rect
                    x={pillar.x}
                    y={cardTopY}
                    width="190"
                    height="64"
                    rx="16"
                    fill="var(--pres-bg-node)"
                    stroke={color}
                    strokeWidth="2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.24 + i * 0.12 }}
                  />
                  <motion.text
                    x={cardCenterX}
                    y={311}
                    textAnchor="middle"
                    fill={color}
                    fontSize="18"
                    fontWeight="600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.22, delay: 0.3 + i * 0.12 }}
                  >
                    {pillar.label}
                  </motion.text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </SlideFrame>
  );
}

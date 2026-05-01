import * as motion from "motion/react-client";
import { SlideFrame, SlideHeading } from "./slide-shared";

const steps = [
  { line1: "Raccogli", line2: "input" },
  { line1: "Copia", line2: "output" },
  { line1: "Pulisci", line2: "testo" },
  { line1: "Decidi", line2: "step" },
  { line1: "Valida", line2: "qualita" },
];

export function ManualLoadSlide() {
  return (
    <SlideFrame>
      <SlideHeading
        eyebrow="Costo nascosto"
        title="Senza orchestrazione, utente diventa il connettore"
        description="Il lavoro non sparisce: si sposta sulle operazioni manuali tra una skill e l'altra."
      />

      <div className="flex-1">
        <div className="mx-auto w-full max-w-6xl">
          <svg viewBox="0 0 1320 380" className="w-full">
            <defs>
              <marker
                id="arrow-danger"
                viewBox="0 0 10 10"
                refX="9"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--pres-danger)" />
              </marker>
            </defs>

            {steps.map((step, i) => {
              const x = 40 + i * 250;
              const y = 106;
              return (
                <g key={`${step.line1}-${step.line2}`}>
                  <motion.rect
                    x={x}
                    y={y}
                    rx="18"
                    width="210"
                    height="132"
                    fill="var(--pres-bg-node)"
                    stroke="var(--pres-border)"
                    strokeWidth="2"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.08 + i * 0.1 }}
                  />
                  <motion.text
                    x={x + 105}
                    y={y + 58}
                    textAnchor="middle"
                    fill="var(--pres-text)"
                    fontSize="20"
                    fontWeight="600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.18 + i * 0.1 }}
                  >
                    <tspan x={x + 105} dy="0">
                      {step.line1}
                    </tspan>
                    <tspan x={x + 105} dy="30">
                      {step.line2}
                    </tspan>
                  </motion.text>

                  {i < steps.length - 1 ? (
                    <motion.path
                      d={`M ${x + 218} ${y + 66} L ${x + 242} ${y + 66}`}
                      stroke="var(--pres-danger)"
                      strokeWidth="3"
                      markerEnd="url(#arrow-danger)"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.25, delay: 0.25 + i * 0.1 }}
                    />
                  ) : null}
                </g>
              );
            })}
          </svg>
        </div>

        <p className="mt-5 text-(--pres-warning) text-lg sm:text-xl text-center">
          Risultato: chatbot potenziato, non workflow autonomo.
        </p>
      </div>
    </SlideFrame>
  );
}

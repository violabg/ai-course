import * as motion from "motion/react-client";
import { GlowCard, SlideFrame, SlideHeading } from "./slide-shared";

const layers = [
  {
    title: "Orchestratore",
    text: "Legge obiettivo, sceglie skill, governa ordine e checkpoint.",
    color: "var(--pres-accent)",
  },
  {
    title: "Skill specialistiche",
    text: "Task stretti: trascrizione, selezione, editing, publishing.",
    color: "var(--pres-blue)",
  },
  {
    title: "Output intermedi",
    text: "Dati puliti e strutturati, pronti per step successivo.",
    color: "var(--pres-success)",
  },
  {
    title: "Human-in-the-loop",
    text: "Stop controllati dove serve giudizio umano.",
    color: "var(--pres-warning)",
  },
];

export function SystemDefinitionSlide() {
  return (
    <SlideFrame>
      <SlideHeading
        eyebrow="Definizione"
        title="Skill System = ruoli separati, confini chiari"
        description="Un sistema modulare coordina competenze diverse senza confondere responsabilita."
      />

      <div className="flex-1 gap-4 grid sm:grid-cols-2">
        {layers.map((layer, i) => (
          <motion.div
            key={layer.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
          >
            <GlowCard className="p-5 h-full">
              <div
                className="inline-flex items-center mb-3 px-3 py-1 rounded-full font-mono text-sm uppercase tracking-[0.14em]"
                style={{
                  color: layer.color,
                  backgroundColor:
                    "color-mix(in srgb, var(--pres-bg-card) 70%, transparent)",
                  border: `1px solid color-mix(in srgb, ${layer.color} 40%, transparent)`,
                }}
              >
                Layer {i + 1}
              </div>
              <h3 className="font-display text-2xl sm:text-3xl">
                {layer.title}
              </h3>
              <p className="mt-3 text-(--pres-text-sub) text-base sm:text-lg leading-relaxed">
                {layer.text}
              </p>
            </GlowCard>
          </motion.div>
        ))}
      </div>
    </SlideFrame>
  );
}

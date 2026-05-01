import * as motion from "motion/react-client";
import { SlideFrame, SlideHeading } from "./slide-shared";

const modules = [
  {
    name: "Transcript",
    detail: "Word-level timestamp",
    value: "Sincronizza tagli e sottotitoli",
    color: "var(--pres-blue)",
  },
  {
    name: "Selection",
    detail: "Hook scoring",
    value: "Massimizza impatto clip",
    color: "var(--pres-success)",
  },
  {
    name: "Reframe",
    detail: "Face tracking",
    value: "Da 16:9 a 9:16",
    color: "var(--pres-warning)",
  },
  {
    name: "Editing",
    detail: "Compositing visual",
    value: "Aggiunge chiarezza narrativa",
    color: "var(--pres-danger)",
  },
  {
    name: "Packaging",
    detail: "Metadata + scheduling",
    value: "Pronto per pubblicazione",
    color: "var(--pres-accent)",
  },
];

export function CaseStudyGridSlide() {
  return (
    <SlideFrame>
      <SlideHeading
        eyebrow="Case study"
        title="Pipeline modulare: cinque skill, cinque responsabilita"
        description="Ogni modulo ha confini netti e puo essere riusato in altri sistemi."
      />

      <div className="flex-1 gap-4 grid sm:grid-cols-2 lg:grid-cols-3">
        {modules.map((module, i) => (
          <motion.article
            key={module.name}
            className="rounded-2xl border border-(--pres-border) bg-(--pres-bg-card) p-5"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.34, delay: 0.08 + i * 0.08 }}
          >
            <div
              className="inline-flex mb-3 px-2.5 py-1 rounded-full font-mono text-sm uppercase tracking-[0.12em]"
              style={{
                color: module.color,
                backgroundColor:
                  "color-mix(in srgb, var(--pres-bg-card) 65%, transparent)",
                border: `1px solid color-mix(in srgb, ${module.color} 45%, transparent)`,
              }}
            >
              {module.detail}
            </div>
            <h3 className="font-display text-2xl">{module.name}</h3>
            <p className="mt-3 text-(--pres-text-sub) text-base sm:text-lg leading-relaxed">
              {module.value}
            </p>
          </motion.article>
        ))}
      </div>
    </SlideFrame>
  );
}

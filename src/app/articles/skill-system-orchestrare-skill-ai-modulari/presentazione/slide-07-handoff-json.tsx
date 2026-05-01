import * as motion from "motion/react-client";
import { GlowCard, SlideFrame, SlideHeading } from "./slide-shared";

const jsonPreview = `{
  "clipCandidates": [
    {
      "start": "00:03:12.400",
      "end": "00:03:48.900",
      "hook": "Perche le mega-skill peggiorano l'output",
      "score": 87,
      "reason": "Apertura chiara, promessa forte"
    }
  ]
}`;

const callouts = [
  "Campi minimi, schema stabile",
  "Zero ragionamenti rumorosi",
  "Parsing diretto nello step successivo",
];

export function HandoffJsonSlide() {
  return (
    <SlideFrame>
      <SlideHeading
        eyebrow="Handoff"
        title="Output strutturato, non testo libero"
        description="La skill successiva deve leggere dati pronti, non interpretare prosa."
      />

      <div className="flex-1 gap-5 grid lg:grid-cols-[1.3fr_1fr]">
        <GlowCard className="p-4 sm:p-6 overflow-auto">
          <motion.pre
            className="font-mono text-(--pres-text) text-sm sm:text-base leading-7"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <code>{jsonPreview}</code>
          </motion.pre>
        </GlowCard>

        <div className="space-y-4">
          {callouts.map((item, i) => (
            <motion.div
              key={item}
              className="rounded-2xl border border-(--pres-border) bg-(--pres-bg-card) px-4 py-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: 0.14 + i * 0.12 }}
            >
              <p className="text-base sm:text-lg">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideFrame>
  );
}

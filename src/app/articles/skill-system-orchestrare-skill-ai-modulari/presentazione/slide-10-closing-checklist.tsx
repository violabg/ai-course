import { FadeIn, SlideFrame } from "./slide-shared";

const principles = [
  "Responsabilita singola per skill",
  "Input richiesti dichiarati prima di partire",
  "Output intermedi strutturati e machine-readable",
  "Checkpoint umani nei passaggi critici",
  "Display chiaro dello stato workflow",
];

export function ClosingChecklistSlide() {
  return (
    <SlideFrame>
      <div className="flex flex-col flex-1 justify-center items-center text-center">
        <FadeIn delay={0.06}>
          <p className="font-mono text-(--pres-muted) text-sm uppercase tracking-[0.24em]">
            Conclusione
          </p>
        </FadeIn>

        <FadeIn delay={0.14}>
          <h2 className="mt-4 max-w-5xl font-display text-4xl sm:text-6xl text-balance leading-[1.06]">
            Non costruire endpoint.
            <span className="block mt-2 text-(--pres-accent)">
              Costruisci sistemi.
            </span>
          </h2>
        </FadeIn>

        <div className="space-y-3 mt-10 w-full max-w-4xl text-left">
          {principles.map((principle, i) => (
            <FadeIn key={principle} delay={0.26 + i * 0.08}>
              <div className="flex items-start gap-3 px-4 py-3 border border-(--pres-border) rounded-xl bg-(--pres-bg-card)">
                <span className="mt-2 rounded-full w-2 h-2 bg-(--pres-success) shrink-0" />
                <p className="text-base sm:text-lg">{principle}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </SlideFrame>
  );
}

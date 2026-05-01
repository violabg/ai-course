import { FadeInLeft, SlideFrame, SlideHeading } from "./slide-shared";

const isolatedProblems = [
  "Utente collega a mano gli step",
  "Output copiati e ripuliti manualmente",
  "Qualita dipende da verifiche ad hoc",
];

const monolithProblems = [
  "Riutilizzo quasi nullo",
  "Manutenzione fragile",
  "Troppo contesto, output degradato",
];

export function AntiPatternComparisonSlide() {
  return (
    <SlideFrame>
      <SlideHeading
        eyebrow="Errori comuni"
        title="Isolamento e monolite creano attrito"
        description="Due strategie opposte, stesso risultato: workflow lento e fragile."
      />

      <div className="flex-1 gap-6 grid md:grid-cols-2">
        <FadeInLeft delay={0.1} className="h-full">
          <div className="flex flex-col bg-[color-mix(in_srgb,var(--pres-warning)_12%,transparent)] p-6 border border-[color-mix(in_srgb,var(--pres-warning)_45%,transparent)] rounded-2xl h-full">
            <h3 className="font-display text-(--pres-warning) text-2xl sm:text-3xl">
              Skill isolate
            </h3>
            <p className="mt-2 text-(--pres-text-sub) text-base sm:text-lg">
              Ogni skill funziona, ma non esiste un sistema che coordina i
              passaggi.
            </p>
            <ul className="space-y-3 mt-6">
              {isolatedProblems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-base sm:text-lg"
                >
                  <span className="mt-2 rounded-full w-2 h-2 bg-(--pres-warning) shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeInLeft>

        <FadeInLeft delay={0.26} className="h-full">
          <div className="flex flex-col bg-[color-mix(in_srgb,var(--pres-danger)_10%,transparent)] p-6 border border-[color-mix(in_srgb,var(--pres-danger)_45%,transparent)] rounded-2xl h-full">
            <h3 className="font-display text-(--pres-danger) text-2xl sm:text-3xl">
              Mega-skill monolitica
            </h3>
            <p className="mt-2 text-(--pres-text-sub) text-base sm:text-lg">
              Tutto in un file: sembra comodo, diventa rigido e rumoroso.
            </p>
            <ul className="space-y-3 mt-6">
              {monolithProblems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-base sm:text-lg"
                >
                  <span className="mt-2 rounded-full w-2 h-2 bg-(--pres-danger) shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeInLeft>
      </div>
    </SlideFrame>
  );
}

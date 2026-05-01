import { ARTICLE_TAGS, FadeIn, SlideFrame } from "./slide-shared";

export function IntroTitleSlide() {
  return (
    <SlideFrame>
      <div className="flex flex-col flex-1 justify-center items-center text-center">
        <FadeIn delay={0.05}>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {ARTICLE_TAGS.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full border border-(--pres-border) bg-(--pres-bg-surface) font-mono text-(--pres-muted) text-sm uppercase tracking-[0.14em]"
              >
                {tag}
              </span>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.16}>
          <h1 className="max-w-5xl font-display text-4xl sm:text-6xl lg:text-7xl text-balance leading-[1.04] tracking-tight">
            Skill System
            <span className="block mt-3 text-(--pres-accent)">
              orchestrare skill AI modulari
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="mt-7 max-w-4xl text-(--pres-text-sub) text-lg sm:text-2xl leading-relaxed text-balance">
            Da endpoint isolati a workflow end-to-end con orchestratore, handoff
            puliti e checkpoint umani.
          </p>
        </FadeIn>
      </div>
    </SlideFrame>
  );
}

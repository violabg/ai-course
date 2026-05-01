"use client";

import { PresentationShell } from "@/components/presentation/presentation-shell";
import { Loader2 } from "lucide-react";
import { Suspense } from "react";
import { IntroTitleSlide } from "./slide-01-title";
import { AntiPatternComparisonSlide } from "./slide-02-anti-patterns";
import { ManualLoadSlide } from "./slide-03-manual-load";
import { SystemDefinitionSlide } from "./slide-04-system-definition";
import { PipelineFlowSlide } from "./slide-05-pipeline-flow";
import { FivePillarsSlide } from "./slide-06-five-pillars";
import { HandoffJsonSlide } from "./slide-07-handoff-json";
import { CaseStudyGridSlide } from "./slide-08-case-study-grid";
import { ContextRoutingSlide } from "./slide-09-context-routing";
import { ClosingChecklistSlide } from "./slide-10-closing-checklist";

export function PresentationSlides({ slug }: { slug: string }) {
  const slides = [
    { key: "title", component: <IntroTitleSlide key="title" /> },
    {
      key: "anti-patterns",
      component: <AntiPatternComparisonSlide key="anti-patterns" />,
    },
    { key: "manual-load", component: <ManualLoadSlide key="manual-load" /> },
    {
      key: "system-definition",
      component: <SystemDefinitionSlide key="system-definition" />,
    },
    {
      key: "pipeline-flow",
      component: <PipelineFlowSlide key="pipeline-flow" />,
    },
    { key: "five-pillars", component: <FivePillarsSlide key="five-pillars" /> },
    { key: "handoff-json", component: <HandoffJsonSlide key="handoff-json" /> },
    {
      key: "case-study-grid",
      component: <CaseStudyGridSlide key="case-study-grid" />,
    },
    {
      key: "context-routing",
      component: <ContextRoutingSlide key="context-routing" />,
    },
    {
      key: "closing-checklist",
      component: <ClosingChecklistSlide key="closing-checklist" />,
    },
  ];

  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center w-full h-screen">
          <Loader2 className="w-8 h-8 text-[var(--pres-accent)] animate-spin" />
        </div>
      }
    >
      <PresentationShell slug={slug} speechData={null} slides={slides} />
    </Suspense>
  );
}

import type { Metadata } from "next";
import { PresentationSlides } from "./slides";

const SLUG = "skill-system-orchestrare-skill-ai-modulari";

export async function generateStaticParams() {
  return [{}];
}

export const dynamicParams = false;

export const metadata: Metadata = {
  title: "Presentazione - Skill System: orchestrare skill AI modulari",
  description:
    "Presentazione visuale su come progettare e orchestrare skill AI modulari con workflow end-to-end.",
};

export default function PresentazionePage() {
  return <PresentationSlides slug={SLUG} />;
}

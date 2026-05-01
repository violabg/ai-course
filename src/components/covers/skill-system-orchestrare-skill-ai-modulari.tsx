export function SkillSystemOrchestrareSkillAiModulari() {
  return (
    <pre className="mx-auto w-fit whitespace-pre">
      <span className="text-primary">{"╭──────────────┬──────────────╮"}</span>
      {"\n"}
      <span className="text-chart-4">{"│ orchestrator │ skill-mods   │"}</span>
      {"\n"}
      <span className="text-primary">{"├──────────────┼──────────────┤"}</span>
      {"\n"}
      <span className="text-primary">{"│ "}</span>
      <span className="text-chart-3">{"route+input"}</span>
      <span className="text-primary">{"  │ "}</span>
      <span className="text-chart-3">{"S1>S2>S3>S4"}</span>
      <span className="text-primary">{"  │"}</span>
      {"\n"}
      <span className="text-muted-foreground">
        {"│ handoff json │ checkpoint   │"}
      </span>
      {"\n"}
      <span className="text-primary">{"╰───────┬──────┴──────┬───────╯"}</span>
      {"\n"}
      <span className="text-primary/60">
        {"        ▼             ▼       "}
      </span>
      {"\n"}
      <span className="text-chart-1">{"   ┌──────────┐  ┌──────────┐ "}</span>
      {"\n"}
      <span className="text-chart-1">{"   │ approved │->│  output  │ "}</span>
      {"\n"}
      <span className="text-chart-1">{"   └──────────┘  └──────────┘ "}</span>
      {"\n"}
      <span className="text-muted-foreground">
        {"     technical skill flow      "}
      </span>
    </pre>
  );
}

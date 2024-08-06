import { useOrchestratorStore } from "./Orchestrator.store";

import { ORCHESTRATION_STEPS } from "./Orchestrator.config";

import type { OrchestratorStageT } from "./Orchestrator.types";

export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const executeOrchestratorStage = async (step: OrchestratorStageT) => {
  if (!step?.actions?.length) return;

  for (const [action, duration] of step.actions) {
    action();
    await sleep(duration);
  }

  if (step.autoplayNext) {
    nextOrchestratorStage();
  }
};

export const nextOrchestratorStage = () => {
  const { orchestratorStage, setOrchestratorStage } =
    useOrchestratorStore.getState();

  const targetStage = orchestratorStage + 1;

  setOrchestratorStage(targetStage);
  executeOrchestratorStage(ORCHESTRATION_STEPS[targetStage]);
};

export const goToOrchestratorStage = (stage: number) => {
  const { setOrchestratorStage } = useOrchestratorStore.getState();

  setOrchestratorStage(stage);
  executeOrchestratorStage(ORCHESTRATION_STEPS[stage]);
};

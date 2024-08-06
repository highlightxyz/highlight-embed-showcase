export type OrchestratorStageT = {
  name: number;
  actions: OrchestratorStageActionT[];
  autoplayNext?: boolean;
};

export type OrchestratorStageActionT = [() => void, number];

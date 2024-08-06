import { create } from "zustand";

type OrchestratorStoreT = {
  orchestratorStage: number;
  setOrchestratorStage: (value: number) => void;
};

export const useOrchestratorStore = create<OrchestratorStoreT>((set) => ({
  orchestratorStage: 0,
  setOrchestratorStage: (value) => set({ orchestratorStage: value }),
}));

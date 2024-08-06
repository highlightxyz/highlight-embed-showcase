import { create } from "zustand";

type RevealControlsStoreT = {
  isRevealControlsVisible: boolean;
  setIsRevealControlsVisible: (value: boolean) => void;
};

export const useRevealControlsStore = create<RevealControlsStoreT>((set) => ({
  isRevealControlsVisible: false,
  setIsRevealControlsVisible: (value) =>
    set({ isRevealControlsVisible: value }),
}));

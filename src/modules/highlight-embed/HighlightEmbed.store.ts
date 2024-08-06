import { create } from "zustand";

type HighlightEmbedStoreT = {
  isEmbedVisible: boolean;
  setIsEmbedVisible: (value: boolean) => void;
};

export const useHighlightEmbedStore = create<HighlightEmbedStoreT>((set) => ({
  isEmbedVisible: true,
  setIsEmbedVisible: (value) => set({ isEmbedVisible: value }),
}));

import { create } from "zustand";

type IceCubeStoreT = {
  isIceCubeVisible: boolean;
  setIsIceCubeVisible: (value: boolean) => void;
  iceCubeWipeStage: number;
  setIceCubeWipeStage: (value: number) => void;
  iceCubeBreakStage: number;
  setIceCubeBreakStage: (value: number) => void;
};

export const useIceCubeStore = create<IceCubeStoreT>((set) => ({
  isIceCubeVisible: false,
  setIsIceCubeVisible: (value) => set({ isIceCubeVisible: value }),
  iceCubeWipeStage: 0,
  setIceCubeWipeStage: (value) => set({ iceCubeWipeStage: value }),
  iceCubeBreakStage: 0,
  setIceCubeBreakStage: (value) => set({ iceCubeBreakStage: value }),
}));

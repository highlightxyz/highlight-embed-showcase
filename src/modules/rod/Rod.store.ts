import { create } from "zustand";

type RodStoreT = {
  isRodVisible: boolean;
  setIsRodVisible: (value: boolean) => void;
  isBaitVisible: boolean;
  setIsBaitVisible: (value: boolean) => void;
  lineLoweredPercent: number;
  setLineLoweredPercent: (value: number) => void;
  lineAngleDegrees: number;
  setLineAngleDegrees: (value: number) => void;
};

export const useRodStore = create<RodStoreT>((set) => ({
  isRodVisible: false,
  setIsRodVisible: (value) => set({ isRodVisible: value }),
  isBaitVisible: false,
  setIsBaitVisible: (value) => set({ isBaitVisible: value }),
  lineLoweredPercent: 15,
  setLineLoweredPercent: (value) => set({ lineLoweredPercent: value }),
  lineAngleDegrees: 0,
  setLineAngleDegrees: (value) => set({ lineAngleDegrees: value }),
}));

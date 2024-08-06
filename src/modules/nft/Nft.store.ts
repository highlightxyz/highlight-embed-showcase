import { create } from "zustand";

export type TokenT = {
  collectionId?: string;
  contractAddress?: string;
  chainId?: number;
  tokenId: string;
  metadata: TokenMetadataT;
};

type TokenMetadataT = {
  image: string;
  animation_url?: string;
  attributes?: { trait_type: string; value: string }[];
  name?: string;
  description?: string;
};

type NftStoreT = {
  tokens: TokenT[];
  addToken: (value: TokenT) => void;
  removeToken: () => void;
  isTokenVisible: boolean;
  setIsTokenVisible: (value: boolean) => void;
  isAuraVisible: boolean;
  setIsAuraVisible: (value: boolean) => void;
};

export const useNftStore = create<NftStoreT>((set) => ({
  tokens: [],
  addToken: (value) => set((state) => ({ tokens: [...state.tokens, value] })),
  removeToken: () => set((state) => ({ tokens: state.tokens?.slice(1) })),
  isTokenVisible: false,
  setIsTokenVisible: (value) => set({ isTokenVisible: value }),
  isAuraVisible: false,
  setIsAuraVisible: (value) => set({ isAuraVisible: value }),
}));

import { useHighlightEmbedStore } from "../highlight-embed/HighlightEmbed.store";
import { useRevealControlsStore } from "../reveal-controls/RevealControls.store";
import { useRodStore } from "../rod/Rod.store";
import { useIceCubeStore } from "../ice-cube/IceCube.store";
import { useNftStore } from "../nft/Nft.store";

import { playSound, SOUNDS } from "../../lib/sound";

import type { OrchestratorStageT } from "./Orchestrator.types";

export const ORCHESTRATOR_STEP_NAMES = {
  MINT_READY: 0,
  ROD_LOWERING: 1,
  ROD_SHAKING: 2,
  ROD_RAISING: 3,
  ICECUBE_WIPING: 4,
  ICECUBE_BREAKING: 5,
  REVEAL_FADING: 6,
};

export const ORCHESTRATION_STEPS: OrchestratorStageT[] = [
  {
    name: ORCHESTRATOR_STEP_NAMES.MINT_READY,
    actions: [
      [() => useHighlightEmbedStore.setState({ isEmbedVisible: true }), 0],
      [
        () =>
          useRevealControlsStore.setState({ isRevealControlsVisible: false }),
        0,
      ],
      [
        () =>
          useRodStore.setState({ isRodVisible: false, isBaitVisible: false }),
        0,
      ],
      [() => useIceCubeStore.setState({ isIceCubeVisible: false }), 0],
      [
        () =>
          useNftStore.setState({ isTokenVisible: false, isAuraVisible: false }),
        330,
      ],
      [() => useNftStore.setState({ tokens: [] }), 0],
    ],
  },
  {
    name: ORCHESTRATOR_STEP_NAMES.ROD_LOWERING,
    actions: [
      [() => useHighlightEmbedStore.setState({ isEmbedVisible: false }), 0],
      [() => useRodStore.setState({ lineLoweredPercent: 15 }), 0],
      [
        () => useRodStore.setState({ isRodVisible: true, isBaitVisible: true }),
        500,
      ],
      [() => useRodStore.setState({ lineLoweredPercent: 100 }), 125],
      [() => playSound(SOUNDS.waterSplashIn), 625],
    ],
    autoplayNext: true, // @TODO: Remove later
  },
  {
    name: ORCHESTRATOR_STEP_NAMES.ROD_SHAKING,
    actions: [
      [() => playSound(SOUNDS.waterSplash), 0],
      [() => useRodStore.setState({ lineAngleDegrees: 3 }), 330],
      [() => useRodStore.setState({ lineAngleDegrees: -3 }), 660],
      [() => useRodStore.setState({ lineAngleDegrees: 0 }), 1500],
      [() => playSound(SOUNDS.waterSplash), 0],
      [() => useRodStore.setState({ lineAngleDegrees: 3 }), 330],
      [() => useRodStore.setState({ lineAngleDegrees: -3 }), 660],
      [() => useRodStore.setState({ lineAngleDegrees: 0 }), 1500],
      [() => useRodStore.setState({ isBaitVisible: false }), 0],
      [() => useIceCubeStore.setState({ isIceCubeVisible: true }), 0],
      [() => useNftStore.setState({ isTokenVisible: true }), 0],
    ],
    autoplayNext: true,
  },
  {
    name: ORCHESTRATOR_STEP_NAMES.ROD_RAISING,
    actions: [
      [
        () =>
          useIceCubeStore.setState({
            iceCubeWipeStage: 0,
            iceCubeBreakStage: 0,
          }),
        0,
      ],
      [() => useRodStore.setState({ lineLoweredPercent: 15 }), 0],
      [() => playSound(SOUNDS.waterSplashOut), 1000],
    ],
    autoplayNext: true,
  },
  {
    name: ORCHESTRATOR_STEP_NAMES.ICECUBE_WIPING,
    actions: [
      [() => useIceCubeStore.setState({ iceCubeWipeStage: 1 }), 50],
      [() => playSound(SOUNDS.icecubeWipe), 0],
      [() => {}, 500],
      [() => useIceCubeStore.setState({ iceCubeWipeStage: 2 }), 50],
      [() => playSound(SOUNDS.icecubeWipe), 0],
      [() => {}, 500],
      [() => useIceCubeStore.setState({ iceCubeWipeStage: 3 }), 50],
      [() => playSound(SOUNDS.icecubeWipe), 0],
      [() => {}, 500],
      [() => useIceCubeStore.setState({ iceCubeWipeStage: 4 }), 50],
      [() => playSound(SOUNDS.icecubeWipe), 0],
      [() => {}, 500],
      [() => useIceCubeStore.setState({ iceCubeWipeStage: 5 }), 50],
      [() => playSound(SOUNDS.icecubeWipe), 0],
      [() => {}, 500],
    ],
    autoplayNext: true,
  },
  {
    name: ORCHESTRATOR_STEP_NAMES.ICECUBE_BREAKING,
    actions: [
      [() => {}, 750],
      [() => useIceCubeStore.setState({ iceCubeWipeStage: 6 }), 0],
      [() => useIceCubeStore.setState({ iceCubeBreakStage: 1 }), 0],
      [() => playSound(SOUNDS.icecubeBreak1), 1500],
      [
        () =>
          useRodStore.setState({ isRodVisible: false, lineLoweredPercent: 0 }),
        0,
      ],
      [
        () =>
          useRevealControlsStore.setState({ isRevealControlsVisible: true }),
        0,
      ],
      [() => useNftStore.setState({ isAuraVisible: true }), 0],
      [() => playSound(SOUNDS.revealAura), 0],
      [() => useIceCubeStore.setState({ iceCubeBreakStage: 2 }), 0],
      [() => playSound(SOUNDS.icecubeBreak2), 660],
      [() => useIceCubeStore.setState({ iceCubeBreakStage: 3 }), 100],
    ],
  },
  {
    name: ORCHESTRATOR_STEP_NAMES.REVEAL_FADING,
    actions: [
      [() => useIceCubeStore.setState({ isIceCubeVisible: false }), 0],
      [
        () =>
          useNftStore.setState({ isTokenVisible: false, isAuraVisible: false }),
        0,
      ],
      [
        () =>
          useRevealControlsStore.setState({ isRevealControlsVisible: false }),
        0,
      ],
    ],
  },
];

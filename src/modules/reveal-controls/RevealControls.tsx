import Button from "../../lib/button/Button";

import { useRevealControlsStore } from "./RevealControls.store";
import { useNftStore } from "../nft/Nft.store";

import {
  goToOrchestratorStage,
  sleep,
} from "../orchestrator/Orchestrator.helpers";

import { ORCHESTRATOR_STEP_NAMES } from "../orchestrator/Orchestrator.config";

import styles from "./RevealControls.module.scss";

const RevealControls = () => {
  const { isRevealControlsVisible } = useRevealControlsStore();
  const { tokens, removeToken } = useNftStore();

  const handleRevealNext = async () => {
    goToOrchestratorStage(ORCHESTRATOR_STEP_NAMES.REVEAL_FADING);
    await sleep(500);
    removeToken();
    goToOrchestratorStage(ORCHESTRATOR_STEP_NAMES.ROD_LOWERING);
  };

  const handleMintMore = () => {
    goToOrchestratorStage(ORCHESTRATOR_STEP_NAMES.MINT_READY);
  };

  return (
    <div
      className={styles.revealControls}
      style={{
        opacity: Number(isRevealControlsVisible),
        pointerEvents: isRevealControlsVisible ? "auto" : "none",
      }}
    >
      {tokens.length > 1 && (
        <Button onClick={() => handleRevealNext()}>
          Reveal next ({tokens.length - 1})
        </Button>
      )}
      <Button onClick={() => handleMintMore()}>Mint more</Button>
    </div>
  );
};

export default RevealControls;

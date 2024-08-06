import { useEffect } from "react";

import { useHighlightEmbedStore } from "./HighlightEmbed.store";
import { useNftStore } from "../nft/Nft.store";
import { useOrchestratorStore } from "../orchestrator/Orchestrator.store";
import {
  goToOrchestratorStage,
  nextOrchestratorStage,
} from "../orchestrator/Orchestrator.helpers";

import { ORCHESTRATOR_STEP_NAMES } from "../orchestrator/Orchestrator.config";

import styles from "./HighlightEmbed.module.scss";

import type { TokenT } from "../nft/Nft.store";

const HighlightEmbed = () => {
  const { isEmbedVisible } = useHighlightEmbedStore();
  const { addToken, tokens } = useNftStore();
  const { orchestratorStage } = useOrchestratorStore();

  useEffect(() => {
    const handleMintEvent = () => {
      if (orchestratorStage === ORCHESTRATOR_STEP_NAMES.MINT_READY) {
        goToOrchestratorStage(ORCHESTRATOR_STEP_NAMES.ROD_LOWERING);
      }
    };

    const handleRevealEvent = (e: Event) => {
      const targetButton = document?.getElementsByClassName(
        "highlight-Modal-close"
      )[0] as HTMLButtonElement;
      if (targetButton) targetButton.click();

      const { detail } = e as unknown as { detail: TokenT };
      addToken(detail);
    };

    window.addEventListener("highlight:minted", handleMintEvent);
    window.addEventListener("highlight:token-revealed", handleRevealEvent);

    return () => {
      window.removeEventListener("highlight:minted", handleMintEvent);
      window.removeEventListener("highlight:token-revealed", handleRevealEvent);
    };
  }, [addToken, orchestratorStage]);

  useEffect(() => {
    if (
      tokens.length &&
      orchestratorStage === ORCHESTRATOR_STEP_NAMES.ROD_LOWERING
    ) {
      nextOrchestratorStage();
    }
  }, [tokens, orchestratorStage]);

  return (
    <div
      className={styles.highlightEmbed}
      style={{
        opacity: Number(isEmbedVisible),
        pointerEvents: isEmbedVisible ? "auto" : "none",
      }}
    >
      <div
        data-widget="highlight-mint-card"
        data-mint-collection-id="<YOUR-COLLECTION-ID-HERE>"
        data-template="no-art"
        data-theme={`{"bgColor":"#2B62F2","textColor":"#ffffff","accentColor":"#d1e2f6", "fontFamily":"Mansalva"}`}
      ></div>
    </div>
  );
};

export default HighlightEmbed;

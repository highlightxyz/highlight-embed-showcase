import Button from "../../lib/button/Button";

import { useHighlightEmbedStore } from "./HighlightEmbed.store";
import { useNftStore } from "../nft/Nft.store";

import { nextOrchestratorStage } from "../orchestrator/Orchestrator.helpers";

import styles from "./HighlightEmbed.module.scss";

const HighlightEmbed = () => {
  const { isEmbedVisible } = useHighlightEmbedStore();
  const { addToken } = useNftStore();

  // @DEBUG
  const addDebugTokens = () => {
    Array.from({ length: 3 }).forEach((_, index) => {
      addToken({
        tokenId: String(index),
        metadata: {
          image: `/images/nft_example${index + 1}.png`,
        },
      });
    });
    nextOrchestratorStage();
  };

  return (
    <div
      className={styles.highlightEmbed}
      style={{
        opacity: Number(isEmbedVisible),
        pointerEvents: isEmbedVisible ? "auto" : "none",
      }}
    >
      <Button onClick={() => addDebugTokens()}>Demo mint</Button>
    </div>
  );
};

export default HighlightEmbed;

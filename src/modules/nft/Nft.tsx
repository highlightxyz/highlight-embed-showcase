import { useNftStore } from "./Nft.store";

import styles from "./Nft.module.scss";

const Nft = () => {
  const { tokens, isTokenVisible, isAuraVisible } = useNftStore();

  return (
    <div className={styles.nft} style={{ opacity: Number(isTokenVisible) }}>
      <img src={tokens[0]?.metadata?.image} alt="" />
      <div
        className={styles.revealAura}
        style={{ opacity: Number(isAuraVisible) }}
      >
        <div className={styles.aura} />
        <div className={styles.flare} />
        <div className={styles.flare} />
      </div>
    </div>
  );
};

export default Nft;

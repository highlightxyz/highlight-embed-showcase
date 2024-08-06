import styles from "./Nft.module.scss";

const Nft = () => {
  return (
    <div className={styles.nft}>
      <img src="/images/nft_example1.png" alt="" />
      <div className={styles.revealAura}>
        <div className={styles.aura} />
        <div className={styles.flare} />
        <div className={styles.flare} />
      </div>
    </div>
  );
};

export default Nft;

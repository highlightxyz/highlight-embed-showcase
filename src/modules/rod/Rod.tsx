import styles from "./Rod.module.scss";

type RodPropsT = {
  children?: React.ReactNode;
};

const Rod = ({ children }: RodPropsT) => {
  return (
    <div className={styles.rod}>
      <img src="/images/rod.png" alt="" />
      <div className={`environment foreground ${styles.mask}`}>
        <img src="/images/foreground_mask.png" alt="" />
      </div>
      <div className={styles.line}>
        <div className={styles.string} />
        <div className={styles.bait}>
          <img src="/images/bait.png" alt="" />
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default Rod;

import { useRodStore } from "./Rod.store";
import { useNftStore } from "../nft/Nft.store";

import styles from "./Rod.module.scss";

type RodPropsT = {
  children?: React.ReactNode;
};

const Rod = ({ children }: RodPropsT) => {
  const { isRodVisible, isBaitVisible, lineLoweredPercent, lineAngleDegrees } =
    useRodStore();
  const { isAuraVisible } = useNftStore();

  return (
    <div className={styles.rod}>
      <img
        src="/images/rod.png"
        alt=""
        style={{ opacity: Number(isRodVisible) }}
      />
      <div
        className={`environment foreground ${styles.mask}`}
        style={{ zIndex: isAuraVisible ? "-1" : "inherit" }}
      >
        <img src="/images/foreground_mask.png" alt="" />
      </div>
      <div
        className={styles.line}
        style={{ transform: `rotate(${lineAngleDegrees}deg)` }}
      >
        <div
          className={styles.string}
          style={{
            transform: `scale3d(1, ${lineLoweredPercent}%, 1)`,
            opacity: Number(isRodVisible),
          }}
        />
        <div
          className={styles.bait}
          style={{
            transform: `translate3d(-50%, ${lineLoweredPercent}%, 0)`,
            opacity: Number(isBaitVisible),
          }}
        >
          <img src="/images/bait.png" alt="" />
        </div>
        <div
          className={styles.content}
          style={{ transform: `translate3d(0, ${lineLoweredPercent}%, 0)` }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Rod;

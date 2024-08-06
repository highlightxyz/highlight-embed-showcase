import { useIceCubeStore } from "./IceCube.store";

import styles from "./IceCube.module.scss";

type IceCubePropsT = {
  children?: React.ReactNode;
};

const IceCube = ({ children }: IceCubePropsT) => {
  const { isIceCubeVisible, iceCubeWipeStage, iceCubeBreakStage } =
    useIceCubeStore();

  return (
    <div className={styles.iceCube}>
      <div
        className={styles.mask}
        style={{ opacity: Number(isIceCubeVisible) }}
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <img
            key={`wipe_${index}`}
            src={`/images/ice-cube_wipe${index + 1}.png`}
            alt=""
            style={{
              opacity: Number([index - 1, index].includes(iceCubeWipeStage)),
            }}
          />
        ))}
        {Array.from({ length: 7 }).map((_, index) => (
          <img
            key={`break_${index}`}
            src={`/images/ice-cube_break${index + 1}.png`}
            alt=""
            className={iceCubeBreakStage >= 2 ? styles.broken : ""}
            data-break={index + 1}
            style={{ opacity: Number([1, 2].includes(iceCubeBreakStage)) }}
          />
        ))}
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default IceCube;

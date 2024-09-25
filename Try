import styles from "./IceCube.module.scss";

type IceCubePropsT = {
  children?: React.ReactNode;
};

const IceCube = ({ children }: IceCubePropsT) => {
  return (
    <div className={styles.iceCube}>
      <div className={styles.mask}>
        {Array.from({ length: 6 }).map((_, index) => (
          <img
            key={`wipe_${index}`}
            src={`/images/ice-cube_wipe${index + 1}.png`}
            alt=""
          />
        ))}
        {Array.from({ length: 7 }).map((_, index) => (
          <img
            key={`break_${index}`}
            src={`/images/ice-cube_break${index + 1}.png`}
            alt=""
            data-break={index + 1}
          />
        ))}
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default IceCube;

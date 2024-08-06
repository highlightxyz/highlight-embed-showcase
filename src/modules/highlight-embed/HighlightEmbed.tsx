import { useHighlightEmbedStore } from "./HighlightEmbed.store";

import styles from "./HighlightEmbed.module.scss";

const HighlightEmbed = () => {
  const { isEmbedVisible } = useHighlightEmbedStore();

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

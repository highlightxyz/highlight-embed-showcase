import Button from "../../lib/button/Button";

import { useHighlightEmbedStore } from "../highlight-embed/HighlightEmbed.store";

import styles from "./Footer.module.scss";

const Footer = () => {
  const { isEmbedVisible } = useHighlightEmbedStore();

  return (
    <div
      className={styles.footer}
      style={{
        opacity: Number(isEmbedVisible),
        pointerEvents: isEmbedVisible ? "auto" : "none",
      }}
    >
      <Button href="https://github.com/highlightxyz/highlight-embed-showcase" target="_blank">
        Read the guide
      </Button>
    </div>
  );
};

export default Footer;

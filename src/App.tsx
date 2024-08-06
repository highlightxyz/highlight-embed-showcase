import Environment from "./modules/environment/Environment";
import Rod from "./modules/rod/Rod";
import IceCube from "./modules/ice-cube/IceCube";
import Nft from "./modules/nft/Nft";
import HighlightEmbed from "./modules/highlight-embed/HighlightEmbed";
import RevealControls from "./modules/reveal-controls/RevealControls";

import "./styles/reset.scss";
import "./styles/general.scss";

const App = () => {
  return (
    <>
      <Environment />
      <Rod>
        <IceCube>
          <Nft />
        </IceCube>
      </Rod>
      <HighlightEmbed />
      <RevealControls />
    </>
  );
};

export default App;

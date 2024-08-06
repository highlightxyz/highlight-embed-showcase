import Environment from "./modules/environment/Environment";
import Rod from "./modules/rod/Rod";
import IceCube from "./modules/ice-cube/IceCube";
import Nft from "./modules/nft/Nft";

import "./styles/reset.scss";
import "./styles/general.scss";

function App() {
  return (
    <>
      <Environment />
      <Rod>
        <IceCube>
          <Nft />
        </IceCube>
      </Rod>
    </>
  );
}

export default App;

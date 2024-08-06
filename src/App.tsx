import Environment from "./modules/environment/Environment";
import Rod from "./modules/rod/Rod";
import IceCube from "./modules/ice-cube/IceCube";

import "./styles/reset.scss";
import "./styles/general.scss";

function App() {
  return (
    <>
      <Environment />
      <Rod>
        <IceCube />
      </Rod>
    </>
  );
}

export default App;

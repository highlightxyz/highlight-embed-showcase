import "./Environment.scss";

const Environment = () => (
  <>
    <div className="environment background">
      <img className="filler left" src="/images/background_left.png" alt="" />
      <img src="/images/background.png" alt="" />
      <img className="filler right" src="/images/background_right.png" alt="" />
    </div>
    <div className="environment foreground">
      <img className="filler left" src="/images/foreground_left.png" alt="" />
      <img src="/images/foreground.png" alt="" />
      <img className="filler right" src="/images/foreground_right.png" alt="" />
    </div>
  </>
);

export default Environment;

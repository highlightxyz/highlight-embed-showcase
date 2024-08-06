import { Howl } from "howler";

export const playSound = (soundSrc: string[]) => {
  const sound = new Howl({
    src: soundSrc,
  });

  sound.play();
};

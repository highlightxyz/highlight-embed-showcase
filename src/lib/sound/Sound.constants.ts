export const SOUNDS_BASE_PATH = "/sounds";

export type SoundT = [string, string];

export const SOUNDS: { [name: string]: SoundT } = {
  waterSplashIn: [
    `${SOUNDS_BASE_PATH}/water-splash-in.webm`,
    `${SOUNDS_BASE_PATH}/water-splash-in.mp3`,
  ],
  waterSplash: [
    `${SOUNDS_BASE_PATH}/water-splash.webm`,
    `${SOUNDS_BASE_PATH}/water-splash.mp3`,
  ],
  waterSplashOut: [
    `${SOUNDS_BASE_PATH}/water-splash-out.webm`,
    `${SOUNDS_BASE_PATH}/water-splash-out.mp3`,
  ],
  icecubeWipe: [
    `${SOUNDS_BASE_PATH}/ice-cube_wipe.webm`,
    `${SOUNDS_BASE_PATH}/ice-cube_wipe.mp3`,
  ],
  icecubeShake: [
    `${SOUNDS_BASE_PATH}/ice-cube_shake.webm`,
    `${SOUNDS_BASE_PATH}/ice-cube_shake.mp3`,
  ],
  icecubeBreak1: [
    `${SOUNDS_BASE_PATH}/ice-cube_break1.webm`,
    `${SOUNDS_BASE_PATH}/ice-cube_break1.mp3`,
  ],
  icecubeBreak2: [
    `${SOUNDS_BASE_PATH}/ice-cube_break2.webm`,
    `${SOUNDS_BASE_PATH}/ice-cube_break2.mp3`,
  ],
  revealAura: [
    `${SOUNDS_BASE_PATH}/reveal-aura.webm`,
    `${SOUNDS_BASE_PATH}/reveal-aura.mp3`,
  ],
};

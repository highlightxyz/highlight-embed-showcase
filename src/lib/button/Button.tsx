import React, { useState, useEffect } from "react";

import { playSound, SOUNDS } from "../sound";

import styles from "./Button.module.scss";

type ButtonPropsT = {
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

const MAX_ROTATION = 4;
const MAX_SCALE = 1.1;
const SOUND_DELAY = 150;

const Button = ({ href, className, children, ...restProps }: ButtonPropsT) => {
  const [rotation, setRotation] = useState(
    (Math.random() - 0.5) * (MAX_ROTATION * 2)
  );
  const [scale, setScale] = useState<number>(1);
  const [soundPlayed, setSoundPlayed] = useState(false);
  const [hoverInterval, setHoverInterval] = useState<number | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<number | null>(null);

  const animateButton = () => {
    setRotation((Math.random() - 0.5) * (MAX_ROTATION * 2));
    setScale(Math.random() * (MAX_SCALE - 1) + 1);
  };

  const handleMouseEnter = () => {
    const intervalId = window.setInterval(() => {
      animateButton();
    }, 150);
    setHoverInterval(intervalId);

    const timeoutId = window.setTimeout(() => {
      if (!soundPlayed) {
        playSound(SOUNDS.icecubeShake);
        setSoundPlayed(true);
      }
    }, SOUND_DELAY);
    setHoverTimeout(timeoutId);
  };

  const handleMouseLeave = () => {
    if (hoverInterval) {
      clearInterval(hoverInterval);
      setHoverInterval(null);
    }
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setScale(1);
    setSoundPlayed(false);
  };

  useEffect(() => {
    return () => {
      if (hoverInterval) {
        clearInterval(hoverInterval);
      }
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverInterval, hoverTimeout]);

  const Component = href ? "a" : "button";

  return (
    <Component
      href={href}
      {...restProps}
      className={`${styles.button} ${className}`}
      style={{ transform: `rotate(${rotation}deg) scale(${scale})` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="button"
      tabIndex={0}
    >
      {children && <span>{children}</span>}
    </Component>
  );
};

export default Button;

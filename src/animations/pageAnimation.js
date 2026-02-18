// src/animations/pageAnimation.js
export const pageAnimation = {
  initial: {
    opacity: 0,
    x: 80,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    x: -80,
    transition: { duration: 0.4, ease: "easeIn" },
  },
};

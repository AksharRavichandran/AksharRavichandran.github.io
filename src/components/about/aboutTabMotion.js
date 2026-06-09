export const ABOUT_TAB_ENTRY_EASE = [0.22, 1, 0.36, 1];
export const ABOUT_TAB_STAGGER = 0.16;
export const ABOUT_TAB_DURATION = 0.35;

export const aboutTabContainerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: ABOUT_TAB_STAGGER },
  },
};

export const aboutTabItemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: ABOUT_TAB_DURATION, ease: ABOUT_TAB_ENTRY_EASE },
  },
};

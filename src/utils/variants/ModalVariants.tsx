export const overlayVariants = {
  open: {
    display: "flex",
    opacity: 1,
  },
  closed: {
    opacity: 0,
    transitionEnd: {
      display: "none",
    },
  },
};

export const modalVariants = {
  open: {
    initial: {
      y: -50,
      opacity: 0,
    },
    y: 0,
    opacity: 1,
  },
  closed: {
    y: -50,
  },
};

export const selectorVariants = {
  open: {
    display: "flex",
    height: "auto",
  },
  closed: {
    height: "0px",
    transitionEnd: {
      display: "none",
    },
  },
};

export const optionsVariants = {
  open: {
    display: "flex",
    height: "auto",
  },
  closed: {
    height: "0px",
    transitionEnd: {
      display: "none",
    },
  },
};

export const themeButtonVariants = {
  dark: {
    x: 10,
  },
  light: {
    x: -10,
  },
};

export const ticketOptionsVariants = {
  open: {
    display: "flex",
    height: "auto",
  },
  closed: {
    height: "0px",
    transitionEnd: {
      display: "none",
    },
  },
};

export const showNotifVariants = {
  open: {
    display: "flex",
    height: "150px",
    width: "350px",
    opacity: 1,
  },
  closed: {
    opacity: 0,
    height: "0px",
    width: "0px",
    transitionEnd: {
      display: "none",
    },
  },
};

export const showRemoveVariants = {
  open: {
    display: "flex",
    height: "auto",
  },
  closed: {
    height: "0px",
    transitionEnd: {
      display: "none",
    },
  },
};

export const showUserTicketsVariants = {
  open: {
    height: "max-content",
  },
  closed: {
    height: 0,
  },
};

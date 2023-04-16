export const cn = (...classes: (boolean | null | undefined | string)[]) =>
  classes.filter(Boolean).join(" ");

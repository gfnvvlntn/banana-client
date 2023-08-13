export const icons = [
  'logo',
  'chevron-circle-right',
  'close',

] as const;

export type Variant = typeof icons[number];

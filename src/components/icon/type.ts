export const icons = [
  'logo',
  'emoji-inspiration',
  'emoji-disappointment',
  'emoji-confusion',
  'emoji-confidence',
  'emoji-anxiety',
  'emoji-satisfaction',
  'chevron-circle-right',
  'close',

] as const;

export type Variant = typeof icons[number];

const classNames = (
  styles: any,
  component: string,
  modifier?: string | string[],
  className: string = '',
  addition?: string | string[],
): string => {
  let classes = [styles[component]];

  if (modifier) {
    classes = [
      ...classes,
      ...(Array.isArray(modifier)
        ? // eslint-disable-next-line @typescript-eslint/no-unsafe-return
          modifier.map((item) => styles[`--${item}`])
        : [styles[`--${modifier}`]]),
    ];
  }

  if (addition) {
    classes = [
      ...classes,
      ...(Array.isArray(addition)
        ? // eslint-disable-next-line @typescript-eslint/no-unsafe-return
          addition.map((item) => styles[`--${item}`])
        : [styles[`--${addition}`]]),
    ];
  }

  return `${classes.join(' ')} ${className}`;
};

export default classNames;

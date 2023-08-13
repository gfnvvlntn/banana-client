import React from 'react';

import styles from './styles.module.scss';
import type ModifierType from './modifierType';
import classNames from "../../../utils/classNames";

interface Props {
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  modifier?: ModifierType | ModifierType[];
  children?: JSX.Element[] | JSX.Element | string | (JSX.Element | string)[];
  className?: string;
}

const Button = ({
  onClick,
  disabled,
  modifier,
  children,
  className,
}: Props): JSX.Element => {

  return  (
      <button
          onClick={onClick}
          className={classNames(styles, 'Button', modifier, className)}
          disabled={disabled}
      >
        {children}
      </button>
  )
};

export default Button;

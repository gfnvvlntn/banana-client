
import React from 'react';

import type ModifierType from './modifierType';
import styles from './styles.module.scss';
import classNames from "../../../utils/classNames";
import {Variant} from "./type";

interface Props {
  variant: Variant;
  modifier?: ModifierType | ModifierType[];
  className?: string;
  onClick?: () => void
}

const Icon = ({ variant, modifier, className, onClick }: Props): React.ReactElement => (
  <img
      onClick={onClick}
    alt={` `}
    src={require(`../../../assets/icons/${variant}.svg`)}
    className={classNames(styles, 'Icon', modifier, className, [onClick ? 'pointer': ''])}
  />
);

export default Icon;

import React from 'react';

import styles from './styles.module.scss';
import type ModifierType from './modifierType';
import classNames from "../../utils/classNames";
import Icon from "../icon/Icon";
import {Variant} from "../icon/type";
import Typography from "../typography/Typography";

interface Props {
  onClick?: () => void;
  modifier?: ModifierType | ModifierType[];
  children?: JSX.Element[] | JSX.Element | string | (JSX.Element | string)[];
  className?: string;
  iconVariant: Variant;
  isSelected: boolean
}

const Selector = ({
  onClick,
  modifier,
  children,
  className,
    iconVariant,
                    isSelected
}: Props): JSX.Element => {

  return  (
      <div
          onClick={onClick}
          className={classNames(styles, 'Selector', modifier, className, [isSelected ? 'selected' : ''])}
      >
        <Icon variant={iconVariant} />
        <Typography modifier={'Text2'}>{children}</Typography>
      </div>
  )
};

export default Selector;


import React, {JSX} from 'react';
import styles from './styles.module.scss';
import classNames from "../../utils/classNames";
import ModifierType from "./modifierType";

interface Props {
  modifier: ModifierType | ModifierType[];
  children?: JSX.Element[] | JSX.Element | string | (JSX.Element | string)[] | number;
  className?: string;
}

const Typography = ({ modifier, children, className }: Props): React.ReactElement => (
  <p className={classNames(styles, 'Typography', modifier, className)}>
    {children}
  </p>
);

export default Typography;

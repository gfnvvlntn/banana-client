import React, { forwardRef, useCallback, useEffect, useState } from 'react';


import classNames from '../../../utils/classNames';
import styles from './Input.module.scss';

export type ModifierType = 'default'

interface Props {
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  modifier?: ModifierType | ModifierType[];
  value?: string;
  type?: 'password';
  hasError?: boolean | string;
  errorText?: string;
  placeholder?: string;
}


type InputProps = Props ;

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      name,
      onChange = () => {},
      disabled,
      modifier,
      value = '',
      hasError = false,
      errorText = '',
      placeholder,
    },
    ref,
  ): React.ReactElement => {
    const [inputValue, setInputValue] = useState(value);
    const [errorTextState, setErrorTextState] = useState(errorText);

      const inputErrorText = errorTextState ? errorTextState : false;


    useEffect(() => {
      setErrorTextState(errorText);
    }, [errorText]);

    useEffect(() => {
      setInputValue(value);
    }, [value]);

    const onChangeHandler = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>): void => {
        setErrorTextState('');
        setInputValue(e.target.value);
        onChange(e);
      },
      [onChange],
    );



    const commonProps = {
      name,
      onChange: onChangeHandler,
      disabled,
      value: inputValue,
      placeholder,
    };

    const additionModifier = [];

    if (errorTextState) {
      additionModifier.push('error');
    }

    if (disabled) {
      additionModifier.push('disabled');
    }

    const inputModifier: ModifierType[] = !modifier
      ? []
      : !Array.isArray(modifier)
      ? [modifier]
      : modifier;

    return (
      <div className={classNames(styles, 'Input', inputModifier, '', additionModifier)}>
        <div className={styles.wrapper}>
            <input {...commonProps} ref={ref} />
        </div>
        {inputErrorText && <div className={styles.error}>{inputErrorText}</div>}
      </div>
    );
  },
);

export default Input;

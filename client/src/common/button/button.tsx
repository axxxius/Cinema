import React, { FC } from 'react';
import cl from './button.module.scss';
import { classnames } from '@utils';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'contained' | 'outlined' | 'text';
  loading?: boolean;
  fullWidth?: boolean;
  StartIcon?: React.ReactNode;
  EndIcon?: React.ReactNode;
}

export const Button: FC<Props> = ({
  variant = 'contained',
  className = '',
  disabled = false,
  children,
  StartIcon,
  EndIcon,
  fullWidth,
  ...props
}) => {
  const btnClasses = classnames(className, cl.button, {
    [cl.button_contained]: variant === 'contained',
    [cl.button_outlined]: variant === 'outlined',
    [cl.button_text]: variant === 'text',
    [cl.button_fullWidth]: fullWidth,
    [cl.button_disabled]: disabled
  });

  return (
    <button className={btnClasses} {...props} disabled={disabled}>
      {StartIcon && <div className={cl.button__icon}>{StartIcon}</div>}
      {children}
      {EndIcon && <div className={cl.button__icon}>{EndIcon}</div>}
    </button>
  );
};

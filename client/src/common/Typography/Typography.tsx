import { ReactNode } from 'react';

import { classnames } from '@utils';

import cl from './Typography.module.scss';

interface TypographyProps {
  tag?: 'h1' | 'h2' | 'span' | 'div';
  variant?: 'title' | 'sub-title' | 'title-regular' | 'body' | 'sub-body' | 'title-body';
  children: ReactNode;
  className?: string;
}

export const Typography = ({
  tag = 'div',
  variant = 'title',
  className = '',
  children
}: TypographyProps) => {
  const Component = tag;

  return <Component className={classnames(className, cl[variant])}>{children}</Component>;
};

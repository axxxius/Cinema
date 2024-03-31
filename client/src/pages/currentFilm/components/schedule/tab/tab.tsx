import { ReactNode } from 'react';

import { classnames } from '@utils';

import cl from './tab.module.scss';

interface TabProps {
  active: boolean;
  children: ReactNode;
  onClick: () => void;
  className?: string;
  variant?: 'date' | 'time';
}

export const Tab = ({ active, children, onClick, className, variant = 'date' }: TabProps) => {
  const tabClasses = classnames(
    cl.tab,
    {
      [cl.date_active]: active && variant === 'date',
      [cl.time_active]: active && variant === 'time'
    },
    className
  );

  return (
    <div className={tabClasses} onClick={onClick}>
      {children}
    </div>
  );
};

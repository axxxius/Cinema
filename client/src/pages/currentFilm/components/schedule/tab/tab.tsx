import { ReactNode } from 'react';

import { classnames } from '@utils';

import cl from './tab.module.scss';

interface TabProps {
  active: boolean;
  children: ReactNode;
  onClick: () => void;
}

export const Tab = ({ active, children, onClick }: TabProps) => {
  const tabClasses = classnames(cl.tab, { [cl.tab_active]: active });

  return (
    <div className={tabClasses} onClick={onClick}>
      {children}
    </div>
  );
};

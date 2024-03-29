import { ReactNode } from 'react';

interface TabsProps {
  children: ReactNode;
}

export const Tabs = ({ children }: TabsProps) => {
  return <div>{children}</div>;
};

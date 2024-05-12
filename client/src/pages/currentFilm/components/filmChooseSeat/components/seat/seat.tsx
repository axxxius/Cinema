import { classnames } from '@utils';
import cl from './seat.module.scss';
import { ReactNode } from 'react';

interface SeatProps {
  type: api.SeancePlaceType;
  price: number;
  row: number;
  column: number;
  active?: boolean;
  children: ReactNode;
  className?: string;
  onClick: () => void;
}

export const Seat = ({
  type,
  price,
  row,
  column,
  active = false,
  onClick,
  children,
  className = '',
  ...props
}: SeatProps) => {
  const stylesButton = classnames(className, cl.button, {
    [cl.button_active]: active
  });

  return (
    <button {...props} onClick={onClick} disabled={type === 'BLOCKED'} className={stylesButton}>
      <div>{price} ₽</div>
      <div>
        {row} ряд, {column} место
      </div>
      <span>{children}</span>
    </button>
  );
};

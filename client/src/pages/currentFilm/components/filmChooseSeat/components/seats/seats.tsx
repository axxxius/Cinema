import { FC } from 'react';

import cl from '../seats.module.scss';
import { RowPlaces } from '../rowPlaces/rowPLaces.tsx';

interface SeatsProps {
  chooseSeats: api.ChoosePlace[];
  places: api.FilmSeancePlace[][];
  onSeatClick: (value: api.ChoosePlace) => void;
  className?: string;
}

export const Seats: FC<SeatsProps> = ({ chooseSeats, places, onSeatClick, className }) => {
  return (
    <div className={`${cl.seats} ${className}`}>
      <div className={cl.screen}>
        <div className={`${cl.txt} ${cl.txt_screen}`}>Экран</div>
        <div className={cl.screen_icon}></div>
      </div>
      <div className={`${cl.txt__row} ${cl.txt}`}>Ряд</div>
      <div className={cl.seats_body}>
        {places.map((row, idx) => (
          <RowPlaces
            key={idx}
            row={row}
            numberRow={idx + 1}
            onSeatClick={onSeatClick}
            chooseSeats={chooseSeats}
          />
        ))}
      </div>
    </div>
  );
};

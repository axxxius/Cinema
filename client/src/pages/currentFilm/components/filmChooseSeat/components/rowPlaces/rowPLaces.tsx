import { FC } from 'react';

import st from '../seats.module.scss';
import { checkSeatInChooses } from '@utils';
import { Seat } from '../seat/seat.tsx';

interface RowPlacesProps {
  chooseSeats: api.ChoosePlace[];
  numberRow: number;
  row: api.FilmSeancePlace[];
  onSeatClick: (value: api.ChoosePlace) => void;
}

export const RowPlaces: FC<RowPlacesProps> = ({ chooseSeats, numberRow, row, onSeatClick }) => {
  return (
    <div className={st.row}>
      <div className={st.row_number}>{}</div>
      <>
        {row.map((place, idx) => (
          <div key={idx} className={st.seat}>
            <Seat
              type={place.type}
              className={st.seat_btn}
              column={idx + 1}
              row={numberRow}
              price={place.price}
              onClick={() =>
                onSeatClick({
                  column: idx + 1,
                  row: numberRow,
                  price: place.price
                })
              }
              active={checkSeatInChooses(chooseSeats, numberRow, idx + 1)}
            >
              {idx + 1}
            </Seat>
          </div>
        ))}
      </>
    </div>
  );
};

import { FC } from 'react';
import { useParams } from 'react-router-dom';

import cl from './filmChooseSeat.module.scss';
import { useRequestScheduleByFilmIdQuery } from '@utils';
import { useCurrentTime } from './hooks/useCurrentTime.ts';
import { ScheduleState } from '../schedule';
import { ChoosesSeats } from './components/choosesSeats/choosesSeats.tsx';
import { Button } from '../../../../common/button/button.tsx';
import { Seats } from './components/seats/seats.tsx';

interface FilmChooseSeatProps {
  schedule: ScheduleState;
  chooseSeats: api.ChoosePlace[];
  onSeatClick: (seat: api.ChoosePlace) => void;
  onSeatSelect: (prevSeat: api.SelectSeat, seat: api.ChoosePlace) => void;
  deleteSeat: (seat: api.SelectSeat) => void;
  onOpenBuy: () => void;
}

export const FilmChooseSeat: FC<FilmChooseSeatProps> = ({
  schedule,
  chooseSeats,
  onSeatClick,
  onOpenBuy
}) => {
  const { id } = useParams<{ id: string }>();
  const { data } = useRequestScheduleByFilmIdQuery({ id });

  const currentTime = useCurrentTime(data?.data.schedules, schedule);

  return (
    <div className={`container ${cl.choose}`}>
      <h2>Выбор места</h2>
      {schedule?.time && (
        <div className={cl.choose__body}>
          {currentTime && (
            <Seats
              chooseSeats={chooseSeats}
              onSeatClick={onSeatClick}
              places={currentTime.hall.places}
              className={cl.choose__seats}
            />
          )}

          <div className={cl.choose__info}>
            <div className={cl.choose__item}>
              <div className={cl.choose__txt}>Зал</div>
              <div className={cl.choose__txt_value}>{schedule.hall}</div>
            </div>
            <div className={cl.choose__item}>
              <div className={cl.choose__txt}>Дата и время</div>
              <div className={cl.choose__txt_value}></div>
            </div>
            <div className={cl.choose__item}>
              <div className={cl.choose__txt}>Места</div>
              <div className={cl.choose__txt_value}>
                <ChoosesSeats seats={chooseSeats} rowClassName={cl.choose__row} />
              </div>
            </div>
            <div className={cl.choose__item}>
              <h3>Сумма: {chooseSeats.reduce((acc, seat) => acc + seat.price, 0)}</h3>
            </div>
            <Button
              className={`${cl.choose__item} ${cl.choose__btn}`}
              fullWidth
              onClick={() => onOpenBuy()}
              disabled={chooseSeats.length === 0}
            >
              Купить
            </Button>
          </div>
        </div>
      )}
      {!schedule?.time && (
        <h3 className={cl.choose__error}>Выберите время сеанса для просмотра доступных мест</h3>
      )}
    </div>
  );
};

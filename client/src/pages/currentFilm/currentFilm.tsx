import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import arrowLeft from '@assets/icons/arrowLeft.svg';
import { Loader, Typography } from '@common';
import { ROUTES, useRequestFilmByIdQuery, useRequestScheduleByFilmIdQuery } from '@utils';

import { Details, ScheduleFilm, useSchedule } from './components';

import cl from './currentFilm.module.scss';
import { FilmChooseSeat } from './components/filmChooseSeat/filmChooseSeat.tsx';
import { useChoose } from './components/filmChooseSeat/hooks/useChoose.ts';
import { useState } from 'react';

export const CurrentFilm = () => {
  const [_, setIsBuyOpen] = useState(false);
  const { id } = useParams();

  const onOpenBuy = () => setIsBuyOpen(true);

  const { data: movie, isLoading } = useRequestFilmByIdQuery({
    id
  });
  const { data } = useRequestScheduleByFilmIdQuery({
    id
  });

  const { chooseSeats, onSeatClick, onSeatSelect, deleteSeat } = useChoose();
  const { onClickDate, onClickTime, schedule } = useSchedule(data?.data?.schedules);
  const film = movie?.data.film;

  if (isLoading) return <Loader />;

  return (
    <div className={cl.container}>
      <Link to={ROUTES.MAIN} className={cl.navigate}>
        <img src={arrowLeft} alt='arrowLeft' />
        <Typography variant='sub-body' tag='div'>
          Назад
        </Typography>
      </Link>

      <Details film={film} />
      <ScheduleFilm onClickDate={onClickDate} onClickTime={onClickTime} schedule={schedule} />
      <FilmChooseSeat
        chooseSeats={chooseSeats}
        deleteSeat={deleteSeat}
        schedule={schedule}
        onSeatClick={onSeatClick}
        onSeatSelect={onSeatSelect}
        onOpenBuy={onOpenBuy}
      />
    </div>
  );
};

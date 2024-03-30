import { Link } from 'react-router-dom';

import { StarsRating, Typography } from '@common';

import cl from './filmCard.module.scss';

interface UserRatings {
  kinopoisk: string;
}

interface CardProps {
  id: string;
  name: string;
  originalName: string;
  userRatings: UserRatings;
  img: string;
}

export const FilmCard = ({ id, name, originalName, userRatings, img }: CardProps) => (
  <div className={cl.card_container}>
    <div>
      <img className={cl.film_preview} src={`${import.meta.env.VITE_API_URL}${img}`} alt='poster' />
    </div>

    <div className={cl.container}>
      <Typography tag='h2' variant='sub-title' className={cl.name}>
        {name}
      </Typography>
      <p className={cl.original_name}>{originalName}</p>
    </div>

    <StarsRating rating={userRatings.kinopoisk} />
    <p className={cl.kinopoisk}>kinopoisk - {userRatings?.kinopoisk}</p>
    <Link to={`film/${id}`} className={cl.more_details}>
      Подробнее
    </Link>
  </div>
);

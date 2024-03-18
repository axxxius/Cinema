import { FC } from 'react';

import emptyStar from '@assets/images/icons/emptyStar.svg';
import star from '@assets/images/icons/star.svg';

export const DEFAULT_STARS = 5;

interface StarsRatingProps {
  rating: string;
}

export const StarsRating: FC<StarsRatingProps> = ({ rating }) => {
  const numericRating = parseFloat(rating);

  const starRating = Array.from({ length: DEFAULT_STARS }, (_, index) => (
    <img src={numericRating > index * 2.1 ? star : emptyStar} alt='star' key={index} />
  ));

  return <div>{starRating}</div>;
};

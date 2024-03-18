import emptyStar from '@assets/icons/emptyStar.svg';
import star from '@assets/icons/star.svg';

export const DEFAULT_STARS = 5;

interface StarsRatingProps {
  rating: string;
}

export const StarsRating = ({ rating }: StarsRatingProps) => {
  const numericRating = Number(rating);

  const starRating = Array.from({ length: DEFAULT_STARS }, (_, index) => (
    <img src={numericRating > index * 2 ? star : emptyStar} alt='star' key={index} />
  ));

  return <div>{starRating}</div>;
};

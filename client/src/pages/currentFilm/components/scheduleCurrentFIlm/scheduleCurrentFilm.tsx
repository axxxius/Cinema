import { useRequestScheduleByFilmIdQuery } from '@utils';

interface ScheduleCurrentFilmProps {
  id: string;
}

export const ScheduleCurrentFilm = ({ id }: ScheduleCurrentFilmProps) => {
  const { data } = useRequestScheduleByFilmIdQuery({ id });

  return (
    <div>
      <div>
        <h2>Расписание</h2>
        <div>{data?.data.schedules.map((sc, index) => <div key={index}>{sc.date}</div>)}</div>
      </div>
    </div>
  );
};

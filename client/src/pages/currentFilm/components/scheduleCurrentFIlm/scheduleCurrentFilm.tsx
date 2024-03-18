import { useRequestScheduleByFilmId } from '@utils';

interface ScheduleCurrentFilmProps {
  id: string;
}

export const ScheduleCurrentFilm = ({ id }: ScheduleCurrentFilmProps) => {
  const { data } = useRequestScheduleByFilmId(id);

  return (
    <div>
      <div>
        <h2>Расписание</h2>
        <p>{data?.schedules.map((sc) => <div>{sc.date}</div>)}</p>
      </div>
    </div>
  );
};

import { groupByHall, useRequestScheduleByFilmIdQuery } from '@utils';
import { HallTime, ScheduleState } from '../hallTime/hallTime.tsx';
import { useParams } from 'react-router';

interface ScheduleCurrentFilmProps {
  schedule: ScheduleState;
  onClickDate: (value: string) => void;
  onClickTime: (hall: api.HallName, time: string) => void;
}

export const ScheduleCurrentFilm = ({
  schedule,
  onClickDate,
  onClickTime
}: ScheduleCurrentFilmProps) => {
  const { id } = useParams();

  const { data } = useRequestScheduleByFilmIdQuery({ id });

  const findSchedule =
    data?.data.schedules.find((currentSchedule) => currentSchedule.date === schedule.date)
      ?.seances ?? undefined;

  const groupedSeances = findSchedule ? groupByHall(findSchedule) : undefined;

  return (
    <div>
      {data?.data.schedules.map((schedule) => (
        <div
          style={{ border: '1px solid red', color: 'black' }}
          key={schedule.date}
          onClick={() => onClickDate(schedule.date)}
        >
          {schedule.date}
        </div>
      ))}
      {groupedSeances &&
        groupedSeances.map((hall) => (
          <HallTime key={hall.name} hall={hall} schedule={schedule} onClickTime={onClickTime} />
        ))}
    </div>
  );
};

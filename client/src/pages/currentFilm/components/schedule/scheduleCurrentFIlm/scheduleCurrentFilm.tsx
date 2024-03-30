import { useParams } from 'react-router';

import { groupByHall, useRequestScheduleByFilmIdQuery } from '@utils';

import { Typography } from '@common';
import { HallTime, ScheduleState } from '../hallTime/hallTime.tsx';
import { Tab } from '../tab/tab.tsx';

import cl from './scheduleCurrentFilm.module.scss';

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

  const findSchedule = data?.data.schedules.find(
    (currentSchedule) => currentSchedule.date === schedule.date
  )?.seances;

  const groupedSeances = findSchedule ? groupByHall(findSchedule) : undefined;

  return (
    <div>
      <Typography tag='h1' variant='title'>
        Расписание
      </Typography>
      <div className={cl.tabs}>
        {data?.data.schedules.map((currentSchedule) => (
          <Tab
            key={currentSchedule.date}
            active={currentSchedule.date === schedule.date}
            onClick={() => onClickDate(currentSchedule.date)}
          >
            {currentSchedule.date}
          </Tab>
        ))}
      </div>
      <div>
        {groupedSeances &&
          groupedSeances.map((hall) => (
            <HallTime key={hall.name} hall={hall} schedule={schedule} onClickTime={onClickTime} />
          ))}
      </div>
    </div>
  );
};

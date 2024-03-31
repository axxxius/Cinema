import { Tab } from '../tab/tab.tsx';
import cl from './hallTime.module.scss';
import { EnumHallName } from '@utils';
import { Typography } from '@common';

export interface GroupedHalls {
  name: api.HallName;
  times: string[];
}

export interface ScheduleState {
  date: string;
  time: string;
  hall: api.HallName | string;
}

interface HallTimeProps {
  hall: GroupedHalls;
  schedule: ScheduleState;
  onClickTime: (hall: api.HallName, time: string) => void;
}

export const HallTime = ({ hall, schedule, onClickTime }: HallTimeProps) => {
  const timeClick = (time: string) => onClickTime(hall.name, time);

  return (
    <div className={cl.container}>
      <div className={cl.con}>
        <Typography tag='div' variant='title-regular' className={cl.hall_name}>
          {EnumHallName[hall.name]}
        </Typography>

        <div className={cl.tabs}>
          {hall.times.map((time) => (
            <Tab
              active={schedule.hall === hall.name && schedule.time === time}
              onClick={() => timeClick(time)}
              key={time}
              className={cl.tab}
              variant='time'
            >
              {time}
            </Tab>
          ))}
        </div>
      </div>
    </div>
  );
};

import { Tabs } from '../tabs/tabs.tsx';

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
    <div>
      <Tabs>
        {hall.times.map((time) => (
          <div onClick={() => timeClick(time)} key={time}>
            {time}
          </div>
        ))}
        <div>{schedule.date}</div>
      </Tabs>
    </div>
  );
};

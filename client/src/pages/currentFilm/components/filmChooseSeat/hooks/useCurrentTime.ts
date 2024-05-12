import { useMemo } from 'react';
import { ScheduleState } from '../../schedule';

export const useCurrentTime = (
  schedules: api.Schedule[] | undefined,
  currentSchedule: ScheduleState
) => {
  const currentSeance = useMemo(() => {
    if (schedules && currentSchedule)
      return schedules?.find((seance) => seance?.date === currentSchedule?.date);
    return undefined;
  }, [schedules, currentSchedule]);

  const currentHall = useMemo(() => {
    if (schedules && currentSeance)
      return currentSeance?.seances?.filter(
        (seance) => seance?.hall?.name === currentSchedule?.hall
      );
    return undefined;
  }, [currentSeance, currentSchedule?.hall]);

  const currentTime = useMemo(() => {
    if (schedules && currentHall && currentSchedule?.time)
      return currentHall?.find((hall) => hall?.time === currentSchedule?.time);
    return undefined;
  }, [currentHall, currentSchedule?.time]);

  return currentTime;
};

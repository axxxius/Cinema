import { useEffect, useState } from 'react';

export const useSchedule = (schedules: api.Schedule[] | undefined) => {
  const [schedule, setSchedule] = useState({
    date: '',
    hall: '',
    time: ''
  });

  const onClickDate = (date: string) => {
    setSchedule({
      ...schedule,
      date
    });
  };

  const onClickTime = (hall: api.HallName, time: string) => {
    setSchedule({
      ...schedule,
      hall,
      time
    });
  };

  useEffect(() => {
    if (schedules)
      setSchedule({
        date: schedules[0].date,
        hall: schedules[0].seances[0].hall.name,
        time: schedules[0].seances[0].time
      });
  }, [schedules]);

  return { onClickDate, onClickTime, schedule };
};

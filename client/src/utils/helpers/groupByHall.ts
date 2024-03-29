export interface IGroupedHalls {
  name: api.HallName;
  times: string[];
}

export const groupByHall = (seances: api.ScheduleSeance[]) => {
  return seances.reduce((acc: IGroupedHalls[], seance) => {
    const hallName = seance.hall.name;
    const hallInGroup = acc.find((group) => group.name === hallName);
    if (!hallInGroup)
      acc.push({
        name: hallName,
        times: [seance.time]
      });
    else {
      hallInGroup.times.push(seance.time);
    }

    return acc;
  }, []);
};

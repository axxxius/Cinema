export const checkSeatInChooses = (
  chooseSeats: api.ChoosePlace[],
  row: number,
  column: number
): boolean => !!chooseSeats.find((arrSeat) => arrSeat.row === row && arrSeat.column === column);

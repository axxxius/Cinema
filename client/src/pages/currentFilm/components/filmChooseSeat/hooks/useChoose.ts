import { useState } from 'react';

export const useChoose = () => {
  const [chooseSeats, setChooseSeats] = useState<api.ChoosePlace[]>([]);

  const findSeat = (seat: api.SelectSeat) => {
    return chooseSeats.find(
      (arrSeat) => arrSeat.row === seat.row && arrSeat.column === seat.column
    );
  };

  const getDeletedSeats = (seat: api.SelectSeat | undefined) => {
    return seat
      ? chooseSeats.filter((arrSeat) => arrSeat.row !== seat.row || arrSeat.column !== seat.column)
      : chooseSeats;
  };

  const deleteSeat = (seat: api.SelectSeat) => {
    setChooseSeats(getDeletedSeats(seat));
  };

  const onSeatClick = (seat: api.ChoosePlace) => {
    const currentSeat = findSeat(seat);
    if (currentSeat) setChooseSeats(getDeletedSeats(currentSeat));
    else setChooseSeats([...chooseSeats, seat]);
  };

  const onSeatSelect = (prevSeat: api.SelectSeat, seat: api.ChoosePlace) => {
    const currentSeat = findSeat(prevSeat);
    const deletedSeats = getDeletedSeats(currentSeat);
    setChooseSeats([...deletedSeats, seat]);
  };

  const clearChooseSeats = () => setChooseSeats([]);

  return { chooseSeats, onSeatClick, onSeatSelect, clearChooseSeats, deleteSeat };
};

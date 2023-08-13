import { createContext, useContext, useState } from "react";

const SeatContext = createContext();

export const SeatProvider = ({ children }) => {
  const [bookedSeatsByMovie, setBookedSeatsByMovie] = useState({});
  const [bookingHistory, setBookingHistory] = useState([]);

  const addBookedSeats = (movieId, seats) => {
    setBookedSeatsByMovie((prevBookedSeatsByMovie) => ({
      ...prevBookedSeatsByMovie,
      [movieId]: [...(prevBookedSeatsByMovie[movieId] || []), ...seats],
    }));
    setBookingHistory((prevHistory) => [
        ...prevHistory,
        { movieId, seats, timestamp: Date.now() },
      ]);
  };

  const getBookedSeatsForMovie = (movieId) => {
    return bookedSeatsByMovie[movieId] || [];
  };

  return (
    <SeatContext.Provider value={{ addBookedSeats, getBookedSeatsForMovie, bookingHistory  }}>
      {children}
    </SeatContext.Provider>
  );
};

export const useSeatContext = () => {
  return useContext(SeatContext);
};

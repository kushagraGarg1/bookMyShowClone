import React from "react";
import { useSeatContext } from "./SeatContext";
import { Card, CardContent, Typography } from "@mui/material";

const BookingHistory = () => {
  const { bookingHistory } = useSeatContext();

  return (
    <div style={{ padding: "2rem" , backgroundColor:"#F4E0B9" , maxHeight:"100%"}}>
      <Card >
        <CardContent >
          <Typography variant="h5" style={{ marginBottom: "1rem" , padding:'0.5rem', fontWeight:"bold"}}>
            Booking History
          </Typography>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {bookingHistory.map((booking, index) => (
              <li
                key={index}
                style={{
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  padding: "1rem",
                  marginBottom: "1rem",
                  backgroundColor:"#F2F2F2",
                }}
              >
                <Typography variant="body1" style={{fontWeight:"bold"}}>
                  Movie: {booking.movieId}
                </Typography>
                <Typography variant="body2">
                  Seats: {booking.seats.join(", ")}
                </Typography>
                <Typography variant="body2">
                  Time: {new Date(booking.timestamp).toLocaleString()}
                </Typography>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookingHistory;

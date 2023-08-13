import React, { useState  } from "react";
import {
  Typography,
  Card,
  CardContent,
  Button,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { useParams , Link } from "react-router-dom";
import EventSeatIcon from '@mui/icons-material/EventSeat';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { useSeatContext } from "./SeatContext";

const BookingPage = ({moviesData}) => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isConfirmationDialogOpen, setIsConfirmationDialogOpen] = useState(false);
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);
  const { addBookedSeats, getBookedSeatsForMovie } = useSeatContext();
  const { movieId } = useParams();
  const movie = moviesData.find((movie) => movie.name === movieId);


  const handleSeatSelect = (seatNumber) => {
    if (!getBookedSeatsForMovie(movieId).includes(seatNumber)) {
      setSelectedSeats((prevSelectedSeats) => {
        if (prevSelectedSeats.includes(seatNumber)) {
          return prevSelectedSeats.filter((seat) => seat !== seatNumber);
        } else {
          return [...prevSelectedSeats, seatNumber];
        }
      });
    }
  };

  const handleCheckout = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };


  const handleConfirmBooking = () => {
    setIsConfirmationDialogOpen(true);
    setIsBookingConfirmed(true);
    addBookedSeats(movieId,selectedSeats);
  };

  const handleCloseConfirmationDialog = () => {
    setIsConfirmationDialogOpen(false);
  };
  
  const seatPrice = 500; 

  const totalAmount = selectedSeats.length * seatPrice;

  return (
    <div style={{padding:"2rem" , backgroundColor:"#F4E0B9"}}>
      <Card style={{backgroundColor:"#F6F4EB"}}>
        <CardContent>
          <Box display="flex" style ={{marginLeft:"36rem"}} alignItems="center">
            <Typography variant="h5">Select Your Seats</Typography>
            <EventSeatIcon color="primary" style ={{marginLeft:"28rem"}}></EventSeatIcon>
            <Typography variant="body2">: Available Seats</Typography>
          </Box>
          <Box display="flex" justifyContent="center" flexWrap="wrap" marginTop="2rem">
            {Array.from({ length: 100 }, (_, i) => i + 1).map((seatNumber) => (
              <Box key={seatNumber} textAlign="center" m={1}>
                <EventSeatIcon
                  onClick={() => handleSeatSelect(seatNumber)}
                  color={
                    getBookedSeatsForMovie(movieId).includes(seatNumber)
                      ? "disabled" 
                      : selectedSeats.includes(seatNumber)
                      ? "secondary" 
                      : "primary"   
                  }
                  fontSize="large"
                  style={
                    getBookedSeatsForMovie(movieId).includes(seatNumber)
                      ? { cursor: "not-allowed" }
                      : {}
                  }
                />
                <Typography variant="body2">{seatNumber}</Typography>
              </Box>
            ))}
          </Box>
          <Box display="flex" justifyContent="center" mt={8}>
            <Typography variant="body1">
            _____________________________________________Eyes this side please_____________________________________________
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center" mt={8}>
            <Typography variant="h5">
              Total Amount: Rs. {totalAmount === 0 ? "0" : totalAmount}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center" mt={2}>
          <Button
              variant="contained"
              color="primary"
              style={{
                backgroundColor: "#F84464",
                fontSize: "1.2rem",
                borderRadius: 8,
                padding: "0.7rem",
              }}
              onClick={() => {
                if (selectedSeats.length === 0) {
                  alert("Please select at least one seat before proceeding.");
                } else {
                  handleCheckout();
                }
              }}            
            >
              Checkout
            </Button>
          </Box>
        </CardContent>
      </Card>
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle style={{marginLeft:"3rem"}}>Booking Summary</DialogTitle>
        <DialogContent>
          <Typography variant="h6">Movie: {movie.name}</Typography>
          <Typography variant="body1">
            Seats: {selectedSeats.join(", ")}
          </Typography>
          <Typography variant="body1">Convenience Fee: Rs. 50</Typography>
          <Typography variant="h5" style={{ marginTop: "1rem" }}>
            Total Amount: Rs. {totalAmount + 50}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmBooking} color="primary" variant="contained" style={{backgroundColor: "#F84464"}}>
            Confirm Booking
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={isConfirmationDialogOpen} onClose={handleCloseConfirmationDialog} >
        <DialogTitle style={{marginLeft:"2.5rem"}}>Booking Confirmed</DialogTitle>
        <DialogContent>
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <TaskAltIcon style={{ color: "green", fontSize: 100 }} />
          </Box>
          <Typography variant="body1" style={{ textAlign: "center", marginTop: 2 }}>
            Your booking has been confirmed.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Link to="/dashboard" style={{textDecoration:"none"}}>
          <Button onClick={handleCloseConfirmationDialog} color="primary">
            OK
          </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default BookingPage;

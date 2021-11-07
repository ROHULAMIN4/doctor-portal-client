import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import BookingModal from "../../BookingModal/BookingModal";

const Bokking = ({ booking, dateId, setSuccessBooking }) => {
  const { name, time, space } = booking;
  const [openBooking, setOpenBooking] = React.useState(false);
  const handlBookingOpen = () => setOpenBooking(true);
  const BookingClose = () => setOpenBooking(false);
  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Paper sx={{ py: 5 }} elevation={3}>
          <Typography
            sx={{ color: "info.main", fontWeight: 600 }}
            variant="h5"
            component="h1"
          >
            {name}
          </Typography>
          <Typography variant="h6" component="div">
            {time}
          </Typography>
          <Typography variant="small" component="div">
            {space} AVAILABLE SPACE
          </Typography>
          <Button onClick={handlBookingOpen} sx={{ my: 2 }} variant="contained">
            Booking
          </Button>
        </Paper>
      </Grid>
      <BookingModal
        date={dateId}
        booking={booking}
        setSuccessBooking={setSuccessBooking}
        openBooking={openBooking}
        BookingClose={BookingClose}
      ></BookingModal>
    </>
  );
};

export default Bokking;

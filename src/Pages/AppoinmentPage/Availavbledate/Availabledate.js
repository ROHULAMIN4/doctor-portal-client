import { Alert, AlertTitle, Container, Grid } from "@mui/material";
import React, { useState } from "react";
import Bokking from "../Booking/Bokking";
const bookings = [
  {
    id: 1,
    name: "Teeth Orthodonics",
    time: "08.00 AM - 09.00 AM",
    space: 10,
  },
  {
    id: 2,
    name: "Cosmetic Dentistry",
    time: "09.00 AM - 10.00 AM",
    space: 8,
  },
  {
    id: 3,
    name: "Teeth Cleaning",
    time: "10.00 AM - 11.00 AM",
    space: 9,
  },
  {
    id: 4,
    name: "Cavity Protection",
    time: "11.00 AM - 12.00 PM",
    space: 5,
  },
  {
    id: 5,
    name: "Pediatric Dental",
    time: "06.00 PM - 07.00 PM",
    space: 10,
  },
  {
    id: 6,
    name: "Oral Surgery",
    time: "07.00 PM - 08.00 PM",
    space: 10,
  },
];
const Availabledate = ({ date }) => {
  const [successBooking, setSuccessBooking] = useState(false);
  return (
    <Container style={{ marginTop: "40px", marginBottom: "40px" }}>
      <h3 style={{ color: "gray" }}>
        AVAILABLE DATE
        <span style={{ color: "#1AA2E3" }}>{date.toDateString()}</span>
      </h3>
      {successBooking && (
        <Alert style={{ marginTop: "20px" }} severity="success">
          <AlertTitle>Booking Successfull </AlertTitle>
        </Alert>
      )}
      <Grid container spacing={2}>
        {bookings.map((book) => (
          <Bokking
            booking={book}
            book={book.id}
            dateId={date}
            setSuccessBooking={setSuccessBooking}
          ></Bokking>
        ))}
      </Grid>
    </Container>
  );
};

export default Availabledate;

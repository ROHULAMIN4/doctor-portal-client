import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";
import useAuth from "../../Hooks/useAuth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({
  openBooking,
  BookingClose,
  booking,
  date,
  setSuccessBooking,
}) => {
  const { user } = useAuth();
  const initialInfo = {
    patientName: user.displayName,
    email: user.email,
    phone: "",
  };
  const [bookingInfo, setBookingInfo] = useState(initialInfo);

  const { name, time } = booking;
  const handleSubmit = (e) => {
    // collect data
    const appoinment = {
      ...bookingInfo,
      time,
      serviceName: name,
      date: date.toLocaleDateString(),
    };

    // send to the server
    fetch("http://localhost:5000/appoinments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(appoinment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setSuccessBooking(true);
        }
      });
    BookingClose();
    e.preventDefault();
  };

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...bookingInfo };
    console.log(newInfo);
    newInfo[field] = value;

    setBookingInfo(newInfo);
  };
  return (
    <div>
      <Modal
        keepMounted
        open={openBooking}
        onClose={BookingClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              sx={{ m: 2, width: "90%" }}
              disabled
              id="outlined-size-small"
              defaultValue={name}
              size="small"
            />
            <TextField
              sx={{ m: 2, width: "90%" }}
              id="outlined-size-big"
              name="patientName"
              onBlur={handleOnBlur}
              defaultValue={user.displayName}
              size="Your Name"
            />
            <TextField
              sx={{ m: 2, width: "90%" }}
              id="outlined-size-small"
              name="phone"
              onBlur={handleOnBlur}
              defaultValue="PhoneNumber"
              size="small"
            />
            <TextField
              sx={{ m: 2, width: "90%" }}
              id="outlined-size-small"
              name="email"
              onBlur={handleOnBlur}
              defaultValue={user.email}
              size="small"
            />
            <TextField
              disabled
              sx={{ m: 2, width: "90%" }}
              id="outlined-size-small"
              defaultValue={date.toDateString()}
              size="text"
            />
            <Button type="submit" variant="contained">
              Sent
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default BookingModal;

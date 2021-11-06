import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { NearMeOutlined } from "@mui/icons-material";
import Button from "@mui/material/Button";

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

const BookingModal = ({ openBooking, BookingClose, booking, date }) => {
  const { name, time } = booking;
  const handleSubmit = (e) => {
    alert("submitting");

    // collect data
    // send to the server

    BookingClose();
    e.preventDefault();
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
              defaultValue="Your Name"
              size="Your Name"
            />
            <TextField
              sx={{ m: 2, width: "90%" }}
              id="outlined-size-small"
              defaultValue="Phone Number"
              size="Phone Number"
            />
            <TextField
              sx={{ m: 2, width: "90%" }}
              id="outlined-size-small"
              defaultValue="Email"
              size="Email"
            />
            <TextField
              disabled
              sx={{ m: 2, width: "90%" }}
              id="outlined-size-small"
              defaultValue={date.toDateString()}
              size="Email"
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

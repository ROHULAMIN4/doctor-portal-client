import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import doctor from "../../../images/doctor.png";
import bg from "../../../images/appointment-bg.png";
import { Button, Typography } from "@mui/material";

const appointmentBG = {
  background: `url(${bg})`,
  marginTop: "175px",
  backgroundColor: " rgba(65, 71, 92,0.9)",
  backgroundBlendMode: "darken, luminosity",
  marginBottom: "40px",
};
const Appoinmentbanner = () => {
  return (
    <div>
      <Box style={appointmentBG} sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <img
              style={{
                width: "400px",
                marginTop: "-110px",
                marginBottom: "0px",
              }}
              src={doctor}
              alt=""
            />
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ textAlign: "left" }}>
              <Typography
                sx={{
                  mb: 5,
                  textAlign: "center",
                  color: "#3498DB",
                  fontWeight: 700,
                }}
                variant="h6"
              >
                Appoinment
              </Typography>
              <Typography
                sx={{ mb: 4, color: "white", fontWeight: 600 }}
                variant="h4"
              >
                Make an Appoinment today
              </Typography>
              <Typography
                variant="small"
                style={{
                  fontWeight: 200,
                  fontSize: "18px",
                  color: "whitesmoke",
                }}
                sx={{ mb: 3 }}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
                temporibus iste dignissimos magnam autem esse deserunt quos
                distinctio fugiat quae.
              </Typography>
            </Box>
            <Button sx={{ mt: 3 }} variant="contained">
              Learn More
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Appoinmentbanner;

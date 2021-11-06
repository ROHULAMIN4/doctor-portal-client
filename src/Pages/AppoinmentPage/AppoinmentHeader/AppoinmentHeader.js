import { Container, Grid } from "@mui/material";
import React from "react";
import Calender from "../Calender/Calender";
import chair from "../../../images/chair.png";
const AppoinmentHeader = ({ date, setDate }) => {
  return (
    <Container sx={{ width: "100%", mt: 5 }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Calender date={date} setDate={setDate}></Calender>
        </Grid>
        <Grid item xs={6}>
          <img style={{ width: "100%" }} src={chair} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AppoinmentHeader;

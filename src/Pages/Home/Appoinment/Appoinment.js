import React from "react";
import Grid from "@mui/material/Grid";

import { Button, Typography, Container } from "@mui/material";
import bg from "../../../images/bg.png";
import chair from "../../../images/chair.png";

const bgbanner = {
  background: `url(${bg})`,
};
const Appoinment = () => {
  return (
    <Container style={bgbanner} sx={{ width: "100%", mt: 5 }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Typography style={{ color: "black" }} variant="h3">
            Your new smile <br /> Start here
          </Typography>
          <Typography
            style={{
              color: "gray",
              //   marginTop: "20px",
              //   marginBottom: "20px",
              fontWeight: 400,
            }}
            variant="small"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            cupiditate optio? Voluptatibus iusto repudiandae excepturi minima
            blanditiis dicta saepe perferendis?
          </Typography>
          <Button sx={{ mt: 3 }} variant="contained">
            get Appoinment
          </Button>
        </Grid>
        <Grid item xs={6}>
          <img style={{ width: "350px" }} src={chair} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Appoinment;

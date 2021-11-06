import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Service from "./Service";
import whitening from "../../images/whitening.png";
import floraid from "../../images/fluoride.png";
import cavity from "../../images/cavity.png";
import { Container } from "@mui/material";
const Servicess = [
  {
    name: "Floraid treatment",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    img: floraid,
  },
  {
    name: "Cavity felling",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
    img: cavity,
  },
  {
    name: "Teeth Whitening",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    img: whitening,
  },
];

const Services = () => {
  return (
    <Container>
      <Typography
        variant="h6"
        component="div"
        sx={{ m: 2, color: "primary.main", fontWeight: 600 }}
      >
        OUR SERVICES
      </Typography>
      <Typography
        variant="h3"
        component="div"
        sx={{ m: 5, color: "warning.main", fontWeight: 500 }}
      >
        Service we provide
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          style={{ padding: 10, margin: 15 }}
        >
          {Servicess.map((service) => (
            <Service key={service.name} service={service}></Service>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Services;

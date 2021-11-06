import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
const Service = (props) => {
  const { name, description, img } = props.service;
  return (
    <div className="App">
      <Grid item xs={4} sm={4} md={3}>
        <Card sx={{ minWidth: 275, border: 0, boxShadow: 0, padding: 2 }}>
          <CardMedia
            component="img"
            height="140"
            style={{ width: "auto", margin: "0 auto" }}
            image={img}
            alt="green iguana"
          />
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Word of the Day
            </Typography>
            <Typography variant="h5" component="div">
              {name}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};

export default Service;

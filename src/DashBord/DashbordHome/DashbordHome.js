import { Grid } from "@mui/material";
import React from "react";
import Calender from "../../Pages/AppoinmentPage/Calender/Calender";
import Appoinments from "../Dashbord/Appoinments/Appoinments";

const DashbordHome = () => {
  const [date, setDate] = React.useState(new Date());

  return (
    <div>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={6}>
          <Calender date={date} setDate={setDate}></Calender>
        </Grid>
        <Grid item xs={12} md={6}>
          <Appoinments date={date}></Appoinments>
        </Grid>
      </Grid>
    </div>
  );
};

export default DashbordHome;

import React from "react";
import Navigation from "../../../Shere/Navigaion/Navigation";
import AppoinmentHeader from "../AppoinmentHeader/AppoinmentHeader";
import Availabledate from "../Availavbledate/Availabledate";

const AppoinmentHome = () => {
  const [date, setDate] = React.useState(new Date());
  return (
    <div>
      <Navigation></Navigation>
      <AppoinmentHeader date={date} setDate={setDate}></AppoinmentHeader>

      <Availabledate date={date}></Availabledate>
    </div>
  );
};

export default AppoinmentHome;

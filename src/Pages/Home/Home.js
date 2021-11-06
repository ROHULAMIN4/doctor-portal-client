import React from "react";
import Navigation from "../../Shere/Navigaion/Navigation";
import Services from "../Services/Services";
import Appoinment from "./Appoinment/Appoinment";
import Appoinmentbanner from "./AppoinmentBanner/Appoinmentbanner";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Appoinment></Appoinment>
      <p></p> <p></p>
      <Services></Services>
      <Appoinmentbanner></Appoinmentbanner>
    </div>
  );
};

export default Home;

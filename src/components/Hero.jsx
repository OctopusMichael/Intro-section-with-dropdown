import React from "react";
import logoData from "../images/client-databiz.svg"
import logoAudio from "../images/client-audiophile.svg"
import logoMeet from "../images/client-meet.svg"
import logoMaker from "../images/client-maker.svg"

const Hero = () => {
  return (
    <div className="container section-container">
      <div className="row ">
        <div className="col-12 col-lg-6 order-lg-2">
          <div className="section-left">
            <div className="img-hero"/>
          </div>
        </div>
        <div className="col-12  col-lg-6">
          <div className="section-right">
            <div className="section-content order-lg-1">
              
              <h1> <span>Make</span> remote work</h1>
              <p>
                Get your team in sync, no matter your location. Streamline
                processes, create team rituals, and watch productivity soar.
              </p>
              <button className="btn btn-hero ">Learn more</button>
            <div className="section-footer">
              <img src={logoData}/>
              <img src={logoAudio}/>
              <img src={logoMeet}/>
              <img src={logoMaker}/>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

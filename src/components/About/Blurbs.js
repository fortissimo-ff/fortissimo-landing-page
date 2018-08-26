import React, { Component } from 'react';

class Blurbs extends Component {
  render() {
    return (
      <div>

        <h1 id = "title" >
          our story
        </h1>

        <div className = "blurbDivs">

          <h3 className = "Blurbs">
            On a cold winter’s morning in San Francisco, Linda walked into a nice and cozy
            café for breakfast. She ordered a cappuccino and a croissant.
          </h3>

          <img className = "LeftBlurbImages" src={require("../../img/img-clipart-os-coffee.png")} alt="coffee"/>

        </div>

        <div className = "blurbDivs">

          <h3 className ="Blurbs">
            Just as she was about to take a bite of her croissant, she noticed a homeless
            person walking back and forth at a bus stop not knowing where to be, shivering
            in the cold with barely enough warm clothing.
          </h3>

          <img className = "RightBlurbImages" src={require("../../img/img-clipart-os-snowflake.png")} alt="snowflake"/>

        </div>

        <div className = "blurbDivs">

          <h3 className = "Blurbs">
            At that moment, Linda recalled all the poverty she witnessed in Indonesia,
            Vietnam, Thailand, and China. She could not imagine that she would witness
            homelessness in a wealthy city like San Francisco.
          </h3>

          <img className = "LeftBlurbImages" src={require("../../img/img-clipart-os-sf.jpg")} alt="San Francisco"/>

        </div>

        <div className = "blurbDivs">

          <h3 className = "Blurbs">
            Her heart went out to the homeless people as she witnessed more of such scenarios in San Francisco.
          </h3>

          <img className = "RightBlurbImages" src={require("../../img/img-clipart-os-heart.png")} alt="heart"/>

        </div>

        <div className = "blurbDivs">

          <h3 className = "Blurbs">
            She decided that something has to be done to help these people get out of the vicious cycle of not even having a roof over their heads.
            She thought of mobilizing the able to help those in need, beginning with the homeless in SF.
          </h3>

          <img className = "LeftBlurbImages" src={require("../../img/img-clipart-os-jam.png")} alt="jam"/>

        </div>

        <div className = "blurbDivs">

          <h3 className = "endingBlurbs">
            And that's the story of how fortissimo was conceived.
          </h3>

          <img className = "RightBlurbImages" src={require("../../img/img-logo-colored.jpg")} alt="fortissimo-logo"/ >

        </div>
      </div>
    );
  }
}

export default Blurbs;

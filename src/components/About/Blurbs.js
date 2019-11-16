import React, { Component } from 'react';

class BlurbContainer extends Component {
  render() {
    return (
      <div>

        <h1 id = "title" >
          our story
        </h1>

        <div className = "blurbDivs">

          <div className = "BlurbContainer">
            <h3 className="BlurbText">
            On a cold winter’s morning in San Francisco, Linda walked into a nice and cozy
            café for breakfast. She ordered a cappuccino and a croissant.
            </h3>
          </div>

          <div className = "LeftCircleDiv">
            <img className = "LeftBlurbImages" src={require("../../img/img-clipart-os-coffee.png")} alt="coffee"/>
          </div>

        </div>

        <div className = "blurbDivs">

          <div className = "RightCircleDiv">
            <img className = "RightBlurbImages" src={require("../../img/img-clipart-os-snowflake.png")} alt="snowflake"/>
          </div>

          <div className = "BlurbContainer">
            <h3 className ="BlurbText">
              Just as she was about to take a bite of her croissant, she noticed a homeless
              person walking back and forth at a bus stop not knowing where to be, shivering
              in the cold with barely enough warm clothing.
            </h3>
          </div>

        </div>

        <div className = "blurbDivs">

          <div className = "BlurbContainer">
            <h3 className = "BlurbText">
              At that moment, Linda recalled all the poverty she witnessed in Indonesia,
              Vietnam, Thailand, and China. She could not imagine that she would witness
              homelessness in a wealthy city like San Francisco.
            </h3>
          </div>

          <img className = "fillLeftBlurbImages" src={require("../../img/img-clipart-os-sf.jpg")} alt="San Francisco"/>

        </div>

        <div className = "blurbDivs">

          <div className = "RightCircleDiv">
            <img className = "RightBlurbImages" src={require("../../img/img-clipart-os-heart.png")} alt="heart"/>
          </div>

          <div className = "BlurbContainer">
            <h3 className = "BlurbText">
              Her heart went out to the homeless people as she witnessed more of such scenarios in San Francisco. She decided that something has to be done to help these people get out of the vicious cycle of not even having a roof over their heads.
            </h3>
          </div>

        </div>

        <div className = "blurbDivs">

          <div className = "BlurbContainer">
            <h3 className = "BlurbText">
              She thought of mobilizing the able to help those in need, through the consumption of meals, beginning with breakfast.
            </h3>
          </div>

          <div className = "LeftCircleDiv">
            <img className = "LeftBlurbImages" src={require("../../img/img-clipart-os-jam.png")} alt="jam"/>
          </div>

        </div>

        <div className = "blurbDivs">

          <img className = "fillRightBlurbImages" src={require("../../img/img-logo-colored.jpg")} alt="fortissimo-logo"/ >

          <div className = "BlurbContainer">
            <h3 className = "BlurbText">
              And that's the story of how fortissimo was conceived.
            </h3>
          </div>

        </div>
      </div>
    );
  }
}

export default BlurbContainer;

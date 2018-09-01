import React, { Component } from 'react';

  const ColoredLine = ({ color }) => (
    <hr style={{
            color: color,
            backgroundColor: color,
            height: 1,
            margin: 50
        }}
    />
);
class Blurbs extends Component {

  render() {
    return (
      <div>

        <h1 id = "title" >
          what we do
        </h1>


        <div className = "blurbDivs">

          <h3 className ="Catch">
          We want you to make a difference in someone else's life while you reap the health benefits of breakfast.

          <ColoredLine color= "gray" />
          <font color="gray">Breakfast Software Served Sunny-side Up to Change Lives</font>
          <ColoredLine color="gray"/>
          </h3>

        </div>

        <div className = "blurbDivs">

          <h3 className ="Blurbs">
            So how does our breakfast app change lives?
          </h3>

          <img className = "RightBlurbImages" id = "wwdRightBlurb" src={require("../../img/img-clipart-wwd-question.png")} alt="question mark"/>

        </div>

        <div className = "blurbDivs">

          <h3 className = "Blurbs">
            The app enables individuals to purchase a healthy and low-price breakfast.
          </h3>

          <img className = "LeftBlurbImages" id = "wwdLeftBlurb" src={require("../../img/img-clipart-wwd-money.png")} alt="money"/>

        </div>

        <div className = "blurbDivs">

          <h3 className = "Blurbs">
            A percentage of your purchase is immediately contributed to helping people in need when using our app.
          </h3>

          <img className = "RightBlurbImages" id = "wwdRightBlurb" src={require("../../img/img-clipart-wwd-percent.png")} alt="percentage"/>

        </div>

      </div>
    );
  }
}

export default Blurbs;

import React, { Component } from 'react';

  const ColoredLine = ({ color }) => (
    <hr style={{
            color: color,
            backgroundColor: color,
            height: 1,
            margin: 'calc(4vw)'
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


        <div id="catchDiv" className = "blurbDivs">

          <h3 className ="Catch">
          We want you to make a difference in someone else's life while you reap the health benefits through the consumption of meals, beginning with breakfast.

          <ColoredLine color= "gray" />
          <font color="gray">Meal Software Served Sunny-side Up to Change Lives</font>
          <ColoredLine color="gray"/>
          </h3>

        </div>

        <div className = "blurbDivs">


          <div className = "RightCircleDiv">
            <img className = "RightBlurbImages" id = "wwdRightBlurb" src={require("../../img/img-clipart-wwd-question.png")} alt="question mark"/>
          </div>

          <div className = "BlurbContainer">
            <h3 className="BlurbText">
            So how does our meal app change lives?
            </h3>
          </div>

        </div>

        <div className = "blurbDivs">

          <div className = "BlurbContainer">
            <h3 className="BlurbText">
            The app enables individuals to purchase a healthy and low-price meal from our business partners.
            </h3>
          </div>

          <div className="LeftCircleDiv">
            <img className = "LeftBlurbImages" id = "wwdLeftBlurb" src={require("../../img/img-clipart-wwd-money.png")} alt="money"/>
          </div>

        </div>

        <div className = "blurbDivs">

          <div className="RightCircleDiv">
            <img className = "RightBlurbImages" id = "wwdRightBlurb" src={require("../../img/img-clipart-wwd-percent.png")} alt="percentage"/>
          </div>
          <div className = "BlurbContainer">
            <h3 className="BlurbText">
            A percentage of your purchase is immediately contributed to helping people in need through our community partners when using our app.
            </h3>
          </div>

        </div>

      </div>
    );
  }
}

export default Blurbs;

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
          Hungry 821.6 million people worldwide | Obese 672 million adults worldwide | Poor 736 million people worldwide | Homeless 150 million people worldwide | Food Wastage 
          1.3 billion tons worldwide | Heavy Stomach Symptoms no official numbers, common, urgent | Difficult to Determine Legitimate Charities 70% of donors in the US | Amount Lost to Fake Charities in Australia in 2019 $287 234 | Charity Tax Shelter Scam in Canada over $7 billion worth of tax claims denied
          <ColoredLine color= "gray" />
          <font color="gray">Platform for Meal-generated Transparent Donations - Create an Account, It's Free</font>
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
            A percentage of your purchase is immediately contributed to helping people in need through our community partners when using our app. No extra money is required as contribution.
            </h3>
          </div>

        </div>

      </div>
    );
  }
}

export default Blurbs;

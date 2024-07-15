import Image1 from "../Images/Fill 139.png";
import Button from "./Button";
import Image2 from "../Images/image 9.png";
import Image3 from "../Images/Group 146.png";
import Image4 from "../Images/Group 147.png";
import "../Css/Section3.css";

function Section3() {
  return (
    <>
      <div className="section3Holder">
        <div className="textHolder">
          <div className="leftTextHolder">
            <h1>Workout Program Made For You</h1>
            <img src={Image1}></img>
          </div>
          <div className="rightTextHolder">
            <div className="rightTextContainer">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
                consectetur adipiscing.
              </p>
              <Button className="green" text="Get Started"></Button>
            </div>
          </div>
        </div>
        <div className="imageHolder">
          <div className="trainer1">
            <img className="image2" src={Image2}></img>
            <h1>Samantha William</h1>
            <p>Trainer</p>
          </div>
          <div className="trainer2">
            <img className="image3" src={Image4}></img>
            <h1>Jonathan Wise</h1>
            <p>Trainer</p>
          </div>
          <div className="trainer3">
            <img className="image4" src={Image3}></img>
            <h1>Karen Summer</h1>
            <p>Trainer</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section3;

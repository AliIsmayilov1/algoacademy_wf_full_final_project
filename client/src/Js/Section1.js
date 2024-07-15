import "../Css/Section1.css";
import Image1 from "../Images/image 1.png";
import Button from "./Button";
import Button2 from "./Button2";

function Section1() {
  return (
    <>
        <div className="newHolder">
          <div className="new">NEW</div>
          <p>High Intensity workout to burn calories</p>
        </div>
        <div className="sectionHolder">
          <div className="text">
            <h1>Cardio Exercise</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="imageHolder">
              {/* <img src={Image1}></img> */}
            </div>
            <div className="buttonHolder">
              <Button text="Get Started" className="green"></Button>
              <Button text="Preview" className="black"></Button>
            </div>
          </div>
          <div className="button2Holder">
            <Button2 h1="38:14" p="TIME" className="yellow h1"></Button2>
            <Button2 h1="165" p="EST CALORIES" className="red h1"></Button2>
          </div>
        </div>
    </>
  );
}
export default Section1;

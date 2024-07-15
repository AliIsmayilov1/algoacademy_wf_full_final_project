import Image1 from "../Images/image 4.png";
import Image2 from "../Images/image 7.png";
import Image3 from "../Images/image 2.png";
import Image4 from "../Images/image 12.png";
import Image5 from "../Images/image 6.png";
import Image6 from "../Images/image 3.png";
import "../Css/Section2.css";
import Exercise from "./Exercise";

function Section2() {
  return (
    <>
      <div className="section2">
        <div className="top">
          <h2>Popular Exercises</h2>
          <p>SEE MORE EXERCISES</p>
        </div>
        <div className="main">
          <Exercise cal="250 est calories" time="58:24" text="Treadmill" img={Image1}></Exercise>
          <Exercise cal="250 est calories" time="58:24" text="Stretching" img={Image2}></Exercise>
          <Exercise cal="250 est calories" time="58:24" text="Yoga" img={Image3}></Exercise>
          <Exercise cal="250 est calories" time="58:24" text="Running" img={Image4}></Exercise>
          <Exercise cal="250 est calories" time="58:24" text="Lifting" img={Image5}></Exercise>
          <Exercise cal="250 est calories" time="58:24" text="PushUp" img={Image6}></Exercise>
        </div>

        <div className="exerciseHolder"></div>
      </div>
    </>
  );
}

export default Section2;

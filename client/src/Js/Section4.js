import "../Css/Section4.css"
import Workout from "./Workout";

function Section4() {
  return (
    <>
      <div className="section4Holder">
            <Workout number="01" text="Workout at Home" videos="15 videos"></Workout>
            <Workout number="02" text="Stay Strong and Fit" videos="48 videos"></Workout>
            <Workout number="03" text="High Intensity" videos="25 videos"></Workout>
            <Workout number="04" text="Simple Workout" videos="35 videos"></Workout>
            <Workout number="05" text="Burn Calories" videos="35 videos"></Workout>
      </div>
    </>
  );
}

export default Section4;

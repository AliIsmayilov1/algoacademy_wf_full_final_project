import Trainer from "./Trainer";
import "../Css/Trainer.css";
import Image3 from "../Images/Group 146.png";
import Image2 from "../Images/image 9.png";
import Image4 from "../Images/Group 147.png";
import Image5 from "../Images/unnamed.jpg";
import { Link } from "react-router-dom";

function Trainers() {
  return (
    <>
      <div className="trainerHolder">
        <Link to={"/"}>
         Go Home <i class="fa-solid fa-house"></i>
        </Link>
        <h1>Our trainers</h1>
        <Trainer
          name="Jonathan Wise"
          age="30 Years old"
          exp="Experience:8 years "
          img={Image3}
        ></Trainer>
        <Trainer
          name="Samantha William"
          age="24 Years old"
          exp="Experience:4 years "
          img={Image2}
        ></Trainer>
        <Trainer
          name="Karen Summer"
          age="29 Years old"
          exp="Experience:4 years "
          img={Image4}
        ></Trainer>
        <Trainer
          name="Jaziel Ballard"
          age="37 Years old"
          exp="Experience:18 years "
          img={Image5}
        ></Trainer>
      </div>
    </>
  );
}

export default Trainers;

import { Link } from "react-router-dom";
import "../Css/Profiles.css";

function SpecialProfile() {
  return (
    <>
      <div className="specialHolder">
        <h1>Congratulations you bought Special membership for your account</h1>
        <div className="userInfo">
          <h3>Mr or Mrs X there is no limit for 30 days</h3>
          <h4>Remember we are closed at Sundays</h4>
          <p>If you want you can learn some information about our Trainers</p>
          <i class="fa-solid fa-arrow-down"></i>
          <br></br>
          <Link to={"/Trainers"}>Our Trainers</Link>
          <br></br>
          <i class="fa-solid fa-arrow-down"></i><br></br>
          <Link to={"/"}>
            Or Go Home <i class="fa-solid fa-house"></i>
          </Link>
        </div>
      </div>
    </>
  );
}

export default SpecialProfile;

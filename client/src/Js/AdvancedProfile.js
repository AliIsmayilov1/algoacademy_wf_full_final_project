import { Link } from "react-router-dom";
import "../Css/Profiles.css";

function AdvancedProfile() {
  let ffirstname = JSON.parse(localStorage.getItem("firstname"));
  let userGender = JSON.parse(localStorage.getItem("gender"));
  let userLastname = JSON.parse(localStorage.getItem("userLastname"))
  return (
    <>
      <div className="advancedHolder">
        <h1>Congratulations you bought Advanced membership for your account</h1>
        <div className="userInfo">
          <h3>
            {" "}
            {userGender === "male" ? "Mr " : "Mrs "}
            {ffirstname ? ffirstname : "Something went wrong"}
            <span></span> {userLastname ? userLastname : "Something went wrong"} <span></span> you can come to our gym 16
            times for next 30 days
          </h3>
          <h4>Remember we are closed at Sundays</h4>
          <p>If you want you can learn some information about our Trainers</p>
          <i class="fa-solid fa-arrow-down"></i>
          <br></br>
          <Link to={"/Trainers"}>Our Trainers</Link>
          <br></br>
          <i class="fa-solid fa-arrow-down"></i>
          <br></br>
          <Link to={"/"}>
            Or Go Home <i class="fa-solid fa-house"></i>
          </Link>
        </div>
      </div>
    </>
  );
}

export default AdvancedProfile;

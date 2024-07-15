import "../Css/Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <div className="navContainer">
        <h4>WORKOUT</h4>
        <nav id="header">
          <i onClick={responsiveBar} class="fa-solid fa-bars"></i>
          <Link id="link1" to={"/Trainers"}>
            TRAINERS
          </Link>
          <Link id="link2" to={"/SignUp"}>
            BE A MEMBER
          </Link>
        </nav>
      </div>
    </>
  );
}

let position = "c";

function responsiveBar() {
  if (position == "c") {
    document.getElementById("header").style.display = "flex";
    document.getElementById("link1").style.display = "block";
    document.getElementById("link2").style.display = "block";
    position = "o";
  } else {
    document.getElementById("link1").style.display = "none";
    document.getElementById("link2").style.display = "none";
    position = "c";
  }
}

export default Nav;

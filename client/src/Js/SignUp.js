import { useState } from "react";
import "../Css/SignUp.css";
import { registerUser } from "../api";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [message, setMessage] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const data = await registerUser(firstname, lastname, age, gender);
      setMessage(data.message);
      localStorage.setItem("firstname", JSON.stringify(firstname));
      localStorage.setItem("gender", JSON.stringify(gender));
      localStorage.setItem("userLastname", JSON.stringify(lastname));
    } catch (error) {
      setMessage(error.message);
      console.log(error);
    }
  };

  return (
    <>
      <div className="SignUpHolder">
        <Link to={"/"}>
          Go Home <i class="fa-solid fa-house"></i>
        </Link>
        <h1 className="reg">Registration</h1>
        <div className="SignUp">
          <form onSubmit={handleSignUp}>
            <label htmlFor="Name">Name: </label>
            <br />
            <input
              type="text"
              name="Name"
              id="Name"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              placeholder="Enter your Name"
              required
            />
            <br />
            <label htmlFor="Surname">Surname: </label>
            <br />
            <input
              type="text"
              name="Surname"
              id="Surname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              placeholder="Enter your Surname"
              required
            />
            <br />
            <label htmlFor="age">Age: </label>
            <br />
            <input
              placeholder="Enter your age"
              type="number"
              name="age"
              id="age"
              min={16}
              max={60}
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
            <br />
            <label>Choose your gender:</label>
            <br />
            <label htmlFor="male">Male: </label>
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
              onChange={(e) => setGender(e.target.value)}
              required
            />
            <br />
            <label htmlFor="female">Female: </label>
            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
              onChange={(e) => setGender(e.target.value)}
              required
            />
            <br />
            <br />
            <div className="SignUpButton">
              <button type="submit">Sign Up</button>
            </div>
          </form>
        </div>
        {message && (
          <Link to={"/BuyAMembership"}>
            {message} <i class="fa-solid fa-arrow-right"></i>
          </Link>
        )}
      </div>
    </>
  );
};

export default SignUp;

import { useState } from "react";
import "../Css/SignUp.css";
import { registerUser } from "../api";

const SignUp = () => {
  const { firstname, lastname, gender, age } = useState("");
  // const {message, setMessage} = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const data = await registerUser(firstname, lastname, age, gender);
      // setMessage(data.message);
    } catch (error) {
      // setMessage(error.error);
      return console.log(error);
    }
  };
  return (
    <>
      <div className="SignUpHolder">
        <h1 className="reg">Registration</h1>
        <div className="SignUp">
          <form action="BuyAMembership" onSubmit={handleSignUp}>
            <label for="Name">Name: </label>
            <br></br>
            <input
              type="text"
              name="Name"
              id="Name"
              value={firstname}
              placeholder="Enter your Name"
              required
            ></input>
            <br></br>
            <label for="Surname">Surname: </label>
            <br></br>
            <input
              type="text"
              name="Surname"
              id="Surname"
              value={lastname}
              placeholder="Enter your Surname"
              required
            ></input>
            <br></br>
            <label for="age">Age: </label>
            <br></br>
            <input
              placeholder="Enter your age"
              type="number"
              name="age"
              id="age"
              min={16}
              max={60}
              value={age}
              required
            ></input>
            <br></br>
            <label>Choose your gender:</label>
            <br></br>
            <label>Male: </label>
            <input type="radio" name="gender" value={gender} required></input>
            <br></br>
            <label>Female: </label>
            <input type="radio" name="gender" value={gender} required></input>
            <br></br>
            <br></br>
            <div className="SignUpButton">
              <button type="submit">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default SignUp;

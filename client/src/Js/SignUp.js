import { useState } from "react";
import "../Css/SignUp.css";
import { userInfo } from "../api";

const SignUp = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const data = await userInfo(firstname, lastname, age, gender);
    } catch (error) {
        return console.log(error)
    }
  };
  return (
    <>
      <div className="SignUpHolder" >
        <h1 className="reg">Registration</h1>
        <div className="SignUp">
          <form onSubmit={handleSignUp}>
            <label for="Name">Name: </label>
            <br></br>
            <input
              type="text"
              name="Name"
              id="Name"
              value={firstname}
              onChange={(e)=>{setFirstName(e.target.value)}}
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
              onChange={(e)=>{setLastName(e.target.value)}}
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
              onChange={(e)=>{setAge(e.target.value)}}
              required
            ></input>
            <br></br>
            <label>Choose your gender:</label>
            <br></br>
            <label>Male: </label>
            <input
              type="radio"
              name="gender"
              value={gender}
              onChange={(e)=>{setGender(e.target.value)}}
              required
            ></input>
            <br></br>
            <label>Female: </label>
            <input
              type="radio"
              name="gender"
              value={gender}
              onChange={(e)=>{setGender(e.target.value)}}
              required
            ></input>
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
}
export default SignUp;

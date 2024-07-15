import "../Css/SignUp.css";

function signUp() {
  return (
    <>
      <div className="SignUpHolder">
        <h1 className="reg">Registration</h1>
        <div className="SignUp">
          <form action="BuyAMembership">
            <label for="Name">Name: </label>
            <br></br>
            <input
              type="text"
              name="Name"
              id="Name"
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
              required
            ></input>
            <br></br>
            <label>Choose your gender</label>
            <br></br>
            <label>Male: </label>
            <input type="radio" name="gender" required></input>
            <label>Female: </label>
            <input type="radio" name="gender" required></input>
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

export default signUp;

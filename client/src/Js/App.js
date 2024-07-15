import "../Css/App.css";
import Nav from "./Nav";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./SignUp";
import Membership from "./Membership";
import Trainers from "./Trainers";
import Profile12 from "./Profile12";
import Profile16 from "./Profile16";
import LimitlessProfile from "./LimitlessProfile";


function App() {
  return (
    <>
      <body>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <div className="container">
                  <Nav></Nav>
                  <Section1></Section1>
                  <Section2></Section2>
                  <Section3></Section3>
                  <Section4></Section4>
                </div>
              }
            ></Route>
            <Route path="/SignUp" element={<SignUp></SignUp>}></Route>
            <Route path="/BuyAMembership" element={<Membership></Membership>}></Route>
            <Route path="/Trainers" element={<Trainers></Trainers>}></Route>
            <Route path="/Profile12" element={<Profile12></Profile12>}></Route>
            <Route path="/Profile16" element={<Profile16></Profile16>}></Route>
            <Route path="/LimitlessProfile" element={<LimitlessProfile></LimitlessProfile>}></Route>
          </Routes>
        </BrowserRouter>
      </body>
    </>
  );
}

export default App;

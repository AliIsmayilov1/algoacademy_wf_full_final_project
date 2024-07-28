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
import StandartProfile from "./StandartProfile";
import AdvancedProfile from "./AdvancedProfile";
import SpecialProfile from "./SpecialProfile";

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
            <Route
              path="/BuyAMembership"
              element={<Membership></Membership>}
            ></Route>
            <Route path="/Trainers" element={<Trainers></Trainers>}></Route>
            <Route
              path="/StandartProfile"
              element={<StandartProfile></StandartProfile>}
            ></Route>
            <Route
              path="/AdvancedProfile"
              element={<AdvancedProfile></AdvancedProfile>}
            ></Route>
            <Route
              path="/SpecialProfile"
              element={<SpecialProfile></SpecialProfile>}
            ></Route>
          </Routes>
        </BrowserRouter>
      </body>
    </>
  );
}

export default App;

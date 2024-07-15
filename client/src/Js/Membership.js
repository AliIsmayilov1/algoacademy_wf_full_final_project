import "../Css/Membership.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Membership() {
  let [trainer, setTrainer] = useState(false);
  console.log(trainer);
  return (
    <>
      <div className="Memberships">
        <div className="membership1">
          <h2>
            12 times in a month <span>+Trainer</span> <span>+Shover</span>
          </h2>
          <p id="tr" onClick={() => setTrainer(!trainer)}>
            +Trainer
          </p>
          <p>+Shower</p>
          <h3>Price:40$</h3>
          <div className="buttonHolder">
            <Link to={"/Profile12"} className="buy">
              Buy
            </Link>
          </div>
        </div>
        <div className="membership2">
          <h2>
            16 times in a month<span>+Trainer</span> <span>+Shover</span>
          </h2>
          <p id="tr">+Trainer</p>
          <p>+Shower</p>
          <h3>Price:60$</h3>
          <div className="buttonHolder">
            <Link to={"/Profile16"} className="buy">
              Buy
            </Link>
          </div>
        </div>
        <div className="membership3">
          <h2>
            No limit for a month<span>+Trainer</span> <span>+Shover</span>
          </h2>
          <p id="tr">+Trainer</p>
          <p>+Shover</p>
          <h3>Price:80$</h3>
          <div className="buttonHolder">
            <Link to={"/LimitlessProfile"} className="buy">
              Buy
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Membership;

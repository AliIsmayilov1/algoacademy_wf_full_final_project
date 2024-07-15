import "../Css/Membership.css"

function Membership() {
  return (
    <>
      <div className="Memberships">
        <div className="membership1">
          <h2>12 times</h2>
          <p>+Trainer</p>
          <p>+Shower</p>
          <h3>Price:40$</h3>
          <button className="buy">Buy</button>
        </div>
        <div className="membership2">
          <h2>16 times</h2>
          <p>+Trainer</p>
          <p>+Shower</p>
          <h3>Price:60$</h3>
          <button className="buy">Buy</button>
        </div>
        <div className="membership1">
          <h2>No limit</h2>
          <p>+Trainer</p>
          <p>+Shover</p>
          <h3>Price:80$</h3>
          <button className="buy">Buy</button>
        </div>
      </div>
    </>
  );
}

function addToMembership(){
  
}

export default Membership;

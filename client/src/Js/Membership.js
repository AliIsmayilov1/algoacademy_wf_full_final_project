import "../Css/Membership.css";

function Membership() {
  return (
    <>
      <div className="Memberships">
        <div className="membership1">
          <h2>
            12 times <span>+Trainer</span> <span>+Shover</span>
          </h2>
          <p id="tr" onClick={addTrainer}>
            +Trainer
          </p>
          <p>+Shower</p>
          <h3>Price:40$</h3>
          <button className="buy">Buy</button>
        </div>
        <div className="membership2">
          <h2>
            16 times <span>+Trainer</span> <span>+Shover</span>
          </h2>
          <p id="tr" onClick={addTrainer}>
            +Trainer
          </p>
          <p>+Shower</p>
          <h3>Price:60$</h3>
          <button className="buy">Buy</button>
        </div>
        <div className="membership1">
          <h2>
            No limit <span>+Trainer</span> <span>+Shover</span>
          </h2>
          <p id="tr" onClick={addTrainer}>
            +Trainer
          </p>
          <p>+Shover</p>
          <h3>Price:80$</h3>
          <button className="buy">Buy</button>
        </div>
      </div>
    </>
  );
}

console.log(document.getElementById("tr"));

function addTrainer(e) {
  console.log(e);
  document.getElementById("tr").style.display = "none";
  //   for (let i = 0; i < document.querySelectorAll("h2>span").length; i++) {
  //     for(let a = 0;a<document.querySelectorAll("h2")[i].children.length;a++)
  //     document.querySelectorAll("h2")[i].children[a].style.display = "inline";
  //   }
}
export default Membership;

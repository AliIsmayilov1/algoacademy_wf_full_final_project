import "../Css/Section1.css";

function Button2(props) {
  let { h1, p ,className} = props;
  return (
    <>
      <div className={className}>
        <h1>{h1}</h1> <p>{p}</p>
      </div>
    </>
  );
}

export default Button2;

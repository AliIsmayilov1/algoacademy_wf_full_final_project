import "../Css/Section2.css";

function Exercise(props) {
  let { img, text, time, cal } = props;
  return (
    <>
      <div className="parent">
        <img src={img} className="ExerciseImg"></img>
        <div className="textHolder">
          <h1>{text}</h1>
          <div className="timeHolder">{time}</div>
        </div>
        <p>{cal}</p>
      </div>
    </>
  );
}

export default Exercise;

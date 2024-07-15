import "../Css/Section4.css"

function Workout(props) {
    let {number,videos,text} = props
  return (
    <>
      <div className="workout">
        <p>{number}</p>
        <div className="workoutTextHolder">
            <h1>{text}</h1>
            <p>{videos}</p>
        </div>
        <i class="fa-solid fa-arrow-right"></i>
      </div>
    </>
  );
}

export default Workout;

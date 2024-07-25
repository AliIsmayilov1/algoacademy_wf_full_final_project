import "../Css/Trainer.css";


function Trainer(props) {
  let { name, age, exp ,img} = props;
  return (
    <>
      <div id="Trainer">
        <div className="TrainerImg">
          <img className="trainerImg" src={img}></img>
        </div>
        <div className="aboutTrainer">
          <h3 className="TrainerName">{props.name}</h3>
          <h4 className="age">{props.age}</h4>
          <h4 className="experience">{props.exp}</h4>
          <h4>Desciption <i class="fa-solid fa-arrow-down"></i></h4>
          <p className="description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
            quibusdam odio placeat dolor vel, perferendis accusamus amet
            molestiae ea voluptate explicabo delectus incidunt. Eaque aliquam
            voluptatem, voluptatum amet quos molestias. Similique saepe voluptas
            veniam fuga ipsum quam eum incidunt. Quis reiciendis architecto
            dicta tenetur, dolore sapiente aspernatur modi provident numquam
            quibusdam porro ipsum amet, rem, veritatis culpa incidunt soluta
            officia. Incidunt voluptates culpa in deserunt unde corporis dolorem
            reprehenderit nisi sit ipsa voluptatibus necessitatibus eos,
            suscipit inventore odit ducimus nam optio, ipsum placeat asperiores
            tenetur beatae. Maxime dicta eum amet.
          </p>
        </div>
      </div>
    </>
  );
}

export default Trainer;

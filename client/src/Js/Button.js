import "../Css/Section1.css";

function Button(props) {
  let { text, className } = props;
  return <div className={className}>{text}</div>;
}
export default Button;

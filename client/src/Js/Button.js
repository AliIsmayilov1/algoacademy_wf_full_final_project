import "../Css/Section1.css";
import {Link} from "react-router-dom"
function Button(props) {
  let { text, className } = props;
  return <div className={className}><Link to={"/SignUp"}>{text}</Link></div>;
}
export default Button;

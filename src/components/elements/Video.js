import image from '../../assets/images/3.jpg';
import { Link } from "react-router-dom";
export default function Video(){
    return (
        <Link to="/quiz"
            ><div className="video">
              <img src={image} alt="" />
              <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
              <div className="qmeta">
                <p>10 Questions</p>
                <p>Score : Not taken yet</p>
              </div>
            </div>
          </Link>
    );
}
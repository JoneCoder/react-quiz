import '../../assets/css/ProgressBar.modules.css';
import Button from './Button';

export default function ProgressBar(){
    return (
        <div className="progressBar">
          <div className="backButton">
            <span className="material-icons-outlined"> arrow_back </span>
          </div>
          <div className="rangeArea">
            <div className="tooltip">24% Complete!</div>
            <div className="rangeBody">
              <div className="progress" style={{width: '20%'}}></div>
            </div>
          </div>
          <a href="result.html">
            <Button className="next">
            <span>Next Question</span>
              <span className="material-icons-outlined"> arrow_forward </span>
            </Button>
          </a>
        </div>
    );
}
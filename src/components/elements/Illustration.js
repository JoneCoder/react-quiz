
import '../../assets/css/Illustration.modules.css';

export default function Illustration({image}){
    return (
        <div className="illustration">
        <img src={image.src} alt={image.alt} />
      </div> 
    );
}
import Answers from '../elements/Answers';
import ProgressBar from '../elements/ProgressBar';
import MiniPlayer from '../elements/MiniPlayer';

export default function Quiz(){
    return (
        <>
        <h1>Pick three of your favorite Star Wars Films</h1>
        <h4>Question can have multiple answers</h4>

        <Answers/>
        <ProgressBar/>
        <MiniPlayer/>
        </>
    );
}
import './LetCollaborate.css'
import ChildCards from '../CardsComponent/ChildCards';

const LetCollaborate=()=>{
    return(
        <>
            <div>
                <img id="solution-image" src="./images/solution.png"></img>
            </div>
            <div id="main-component">
                <h2>Let's Collaborate</h2>
            </div>
            <ChildCards />
        </>
    );
}
export default LetCollaborate;

import './BackGround.css';
import { Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';


const BackGround = (props) => {




    return (<>
        <div>

            <div id="rectangle">  <Button className="btn" primary onClick={() => props.filter("תמר")} >תמר</Button>
                <Button className="btn" primary onClick={() => props.filter("רותי")} >רותי</Button>
                <Button className="btn" primary onClick={() => props.filter("הילה")} >הילה</Button>
                <div id="triangle-bottomright"></div>
            </div>
            
        </div>
    </>);
}

export default BackGround;
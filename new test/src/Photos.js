
import { useEffect, useState } from "react";
import './img.css';
import 'semantic-ui-css/semantic.min.css';
import { Grid, Segment } from 'semantic-ui-react'

const Imgs = (props) => {


    const [index, setIndex] = useState(0);

    useEffect(() => {
      
    }, []);

    return (<>

                <Grid.Column>
                    <Segment>
                        <div class="ui grid">
                            <div class="five wide column">
                                <button class="ui icon button active"
                                style={{ "margin-top": "50%"}} onClick={() => (index + 1) < props.proflies.length && setIndex(index + 1)}>
                                    <i class="left chevron icon"></i>
                                    </button>
                            </div>
                            <div class="five wide column">
                                <img src={props.proflies.length != 0 && props.proflies[index].img} className="img" />
                            </div>
                            <div class="five wide column">
                                <button class="ui right icon button"
                                style={{ "margin-top": "50%"}} onClick={() => (index - 1) >= 0 && setIndex(index - 1)}>
                                    
                                <i class="right chevron icon"></i>
                                </button>
                            </div>
                        </div>


                        {/* <button onClick={() => (index + 1) < proflies.length && setIndex(index + 1)} className="btn1">{"=>"}</button> */}
                        {/* <button onClick={() => (index - 1) >= 0 && setIndex(index - 1)} className="btn2">{"=<"}</button> */}



                    </Segment>
                </Grid.Column>

    </>);
}

export default Imgs;
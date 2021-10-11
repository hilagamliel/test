
import { useEffect, useState } from "react";
import { GetAllProfiles } from './util'
import './img.css';
import { Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { Grid, Segment } from 'semantic-ui-react'
import Background from './Background';
const Imgs = (props) => {

    const [allProflies, setAllProflies] = useState(null);

    const [proflies, setProflies] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        GetAllProfiles().then((succ) => {
            let arr = [];
            succ.data.map((item) => {
                if (item.img)
                    arr.push(item);
            })
            setAllProflies(arr);
        }).catch((error) => console.log(error));


    }, []);

    const filter = (name) => {
        let arr = [];
        allProflies && (arr = allProflies.filter((item) => item.firstName == name));
        setProflies(arr);
    }

    return (<>



        <Grid columns='equal'>
            <Grid.Row>

                <Grid.Column>
                    <Segment>
                        <Background allProflies={allProflies} filter={filter} />

                    </Segment>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>

                <Grid.Column>
                    <Segment>
                        <div class="ui grid">
                            <div class="five wide column">
                                <button class="ui icon button active"
                                style={{ "margin-top": "50%"}} onClick={() => (index + 1) < proflies.length && setIndex(index + 1)}>
                                    <i class="left chevron icon"></i>
                                    </button>
                            </div>
                            <div class="five wide column">
                                <img src={proflies.length != 0 && proflies[index].img} className="img" />
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

            </Grid.Row>

        </Grid>
    </>);
}

export default Imgs;
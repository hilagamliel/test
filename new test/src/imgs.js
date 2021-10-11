
import { useEffect, useState } from "react";
import { GetAllProfiles } from './util'
import './img.css';
import 'semantic-ui-css/semantic.min.css';
import { Grid, Segment } from 'semantic-ui-react'
import Background from './Background';
import Photos from './Photos';

const Imgs = (props) => {

    const [allProflies, setAllProflies] = useState(null);

    const [proflies, setProflies] = useState([]);

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

                <Photos proflies={proflies}/>

            </Grid.Row>

        </Grid>
    </>);
}

export default Imgs;
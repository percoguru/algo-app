import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';
import logo from "./algorithms.jpg";
import { Link } from 'react-router-dom';

function RenderCard() {

    return(
        <Card  to="/BubbleSort">
            <Link to="/BubbleSort">
            <CardImg src={logo}/>
            <CardBody>
            <CardTitle>Bubble Sort</CardTitle>
            <CardText>Vizualize How Bubble Sort works</CardText>
            </CardBody>
            </Link>
        </Card>
    );

}

function Home(props) {
    return(
        
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard/>
                </div>
            </div>
        </div>
    );
}

export default Home;

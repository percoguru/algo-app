import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return(
    <div className="footer" style={{ backgroundColor: "#2F4F4F", marginTop: 200	}}>
        <div className="container">
            <div className="row justify-content-center">
                    <div className="row">
                        <Link to="/home" style={{ backgroundColor: "#2F4F4F"}}><div className="col" style={{ backgroundColor: "#2F4F4F"}}>Home</div></Link>
                        <Link to="/bubblesort" style={{ backgroundColor: "#2F4F4F"}}><div className="col" style={{ backgroundColor: "#2F4F4F"}}>Bubble Sort</div></Link>
                    </div>

            </div>
            <div className="row justify-content-center">
                <div className="col-auto">
                    <p>© Copyright 2019 ALgo</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;

import react from 'react';
import '../../src/home.css';
import { Link } from "react-router-dom";

function Started(){
    return( <div>
        <h1 className="Line"/>
        <br/>
        <h2 className="Building">Building a PC has <br></br>never been easier</h2>
            <div className="contentbro">
                <h3 className="headcont">Custom Builds</h3>
                <p className="contdes">Choose from a wide range of parts and our algorithm will suggest <br></br>and
display all compatible options.</p>
                <Link to='/Build' className="knowmore">Learn More</Link>
            </div>
            <div className="contentbro2">
                <h3 className="headcont">Video Tutorials</h3>
                <p className="contdes">New to building a pc? Check out our curated videos to get started on<br></br>
deciding your build.</p>
                <Link to='/Guide' className="knowmore">Learn More</Link>
            </div>
            <div className="contentbro3">
                <h3 className="headcont">Pre-Built Desktop</h3>
                <p className="contdes">Building a pc too much of a hassle? Fear not, choose from our expertly<br></br>
designed builds.</p>
                <Link to='/Prebuilt' className="knowmore">Learn More</Link>
            </div>
            <div className="contentbro4">
                <h3 className="headcont">FAQ's and Support</h3>
                <p className="contdes">If you have any questions regarding the process feel free to check out the
frequently asked questions or contact us on our toll free number available
24/7.</p>
                <Link to='/Help' className="knowmore">Learn More</Link>
            </div>
                </div>)};
export default Started;
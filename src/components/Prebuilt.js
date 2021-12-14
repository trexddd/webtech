import react from "react";
import '../../src/home.css';
import { Link } from "react-router-dom";
import ll from '../assets/lowendpc.jpg';
import ml from '../assets/midlevel.jpg';
import pl from '../assets/performance.jpg';
import bg from '../assets/prebuildimg.jpg';

function Onebuild(props){
    return(
        <div className="Onepc">
            <img src={props.src} className="Onepcimg"></img>
            <p>{props.children}</p>
            <p>{props.price}</p>
            <Link to={props.link}>Learn More</Link>
        </div>
    )};

function Prebuild(){
    return(
        <div>
            <img src={bg} className="HELP"/>
            <div className="preb">
                <br/>
                <br/>
                <p className="pchead">Pre-Built Desktops</p>
                <br></br>
                <p>Select a build based on price, performance, and usage specifications.</p>
                <p>Here are a few builds made by our experts to select from.</p>
                <div className="pcdisp">
                    <Onebuild link='/Lowendpc' src={ll} price="$750">Budget Build</Onebuild>
                    <Onebuild link='/Midlevelpc' src={ml} price="$1500">Mid-level Build</Onebuild>
                    <Onebuild link='/Performancepc' src={pl} price="$3000">Performance Build</Onebuild>
                </div>
            </div>
        </div>
    )
};


export default Prebuild;
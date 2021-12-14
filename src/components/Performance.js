import react from 'react';
import '../../src/home.css';
import ll from '../assets/performance.jpg';
import { Link } from "react-router-dom";
var x3=0;

function check(){
    x3=1;
}


function Dispbuild(props){
    return(
        <div>
            <h1 className="Line"/>
        <div className="divtype">

            <div className="divtype1">
                <img src={ll} className="dispimg"/>
            </div>
            <div className="divtype2">
                <p className="pchead">Performance Build ($3000)(Rs.223000)</p>
                <ul>
                    <li>Case - Corsair iCUE 4000X RGB</li>
                    <li>Processor - AMD Ryzen 9 5900X</li>
                    <li>Motherboard - ASUS TUF GAMING X570-PRO</li>
                    <li>Ram - Corsair Vengeance RGB PRO 32GB</li>
                    <li>Graphics Card - MSI GeForce RTX 3090 Gaming X Trio</li>
                    <li>Storage - Samsung 970 EVO Plus 1TB</li>
                    <li>Power Supply Unit - Corsair RMx 850W 80+ Gold</li>
                    <li>Cooling System - Noctua NH-D15 chromax.black</li>
                </ul>
                <br/>
                <Link to='/Cart3' className="knowmore">Buy Now</Link>
            </div>

        </div>
        </div>
    )
}

export default Dispbuild;


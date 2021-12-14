import react from 'react';
import '../../src/home.css';
import ll from '../assets/midlevel.jpg';
import { Link } from "react-router-dom";

var x2=0;

function check(){
    x2=1;
}

function Dispbuild2(props){
    return(
        <div>
            <h1 className="Line"/>
        <div className="divtype">

            <div className="divtype1">
                <img src={ll} className="dispimg"/>
            </div>
            <div className="divtype2">
                <p className="pchead">Mid-Level Build ($1500)(Rs.112000)</p>
                <ul>
                    <li>Case - NZXT H510 ATX Mid Tower Case</li>
                    <li>Processor - Intel Core i5-12600K</li>
                    <li>Motherboard - MSI Pro Z690-A DDR4</li>
                    <li>Ram - Corsair Vengeance LPX 32GB DDR4-3200</li>
                    <li>Graphics Card - AMD Radeon RX 6600</li>
                    <li>Storage - Western Digital 1TB WD Blue SN550</li>
                    <li>Power Supply Unit - EVGA SuperNOVA 80 Plus Gold 750W</li>
                    <li>Cooling System - Noctua NH-U12S Redux</li>
                </ul>
                <br/>
                <Link to='/Cart2' className="knowmore">Buy Now</Link>
            </div>

        </div>
        </div>
    )
}


export default Dispbuild2;

import react from 'react';
import '../../src/home.css';
import { Link } from "react-router-dom";
import ll from '../assets/lowendpc.jpg';



function Dispbuild(props){
    return(
        <div>
            <h1 className="Line"/>
        <div className="divtype">

            <div className="divtype1">
                <img src={ll} className="dispimg"/>
            </div>
            <div className="divtype2">
                <p className="pchead">Budget Build (750$)(Rs.56000)</p>
                <ul>
                    <li>Case - Cooler Master MasterBox Q300L</li>
                    <li>Processor - Intel Core i5-10400 </li>
                    <li>Motherboard - Gigabyte B460M DS3H</li>
                    <li>Ram -  Mushkin Redline 16GB DDR4 3200MHz</li>
                    <li>Graphics Card - AMD Radeon RX 580 8GB</li>
                    <li>Storage -  500GB WD Blue SN550 NVMe SSD</li>
                    <li>Power Supply Unit -  Corsair CV650 650 Watt 80+ Bronze</li>
                    <li>Cooling System - Boxed cooler</li>
                </ul>
                <br/>
                <Link to='/Cart1' className="knowmore">Buy Now</Link>
            </div>

        </div>
        </div>
    )
}

export default Dispbuild;

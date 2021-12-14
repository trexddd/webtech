import{lis2} from './start'
import React from "react";
import '../../src/home.css';
import '../../src/help.css'
import ca from '../assets/Cart5.jpg'
//const lis=['Cooler Master MasterBox Q300L','Intel Core i5-10400','Gigabyte B460M DS3H','Mushkin Redline 16GB DDR4 3200MHz','AMD Radeon RX 580 8GB','500GB WD Blue SN550 NVMe SSD','Corsair CV650 650 Watt 80+ Bronze','Boxed cooler','112000'];

function Parts(props){
    return(
        <div className="partsbox">
            <p className="Q">Case - {props.l[0]}</p>
            <p className="Q">Processor - {props.l[1]}</p>
            <p className="Q">Mother Board - {props.l[2]}</p>
            <p className="Q">RAM - {props.l[3]}</p>
            <p className="Q">Graphics Card - {props.l[4]}</p>
            <p className="Q">Storage - {props.l[5]}</p>
            <p className="Q">Power Supply Unit - {props.l[6]}</p>
            <p className="Q">Cooler - {props.l[7]}</p>
            <p className="Q">Total is: Rs.{props.l[8]}</p>
        </div>
    )
}

function Cart(){
    return(
        <div>
            <img src={ca} className="HELP"/>
            <div className="content">
                <p className="hero-header2">SUMMARY</p>
                <Parts className="partsbox" l={lis2} />
            </div>
        </div>
    )
}
 export default Cart;
import react from "react";
import res from "./start"
import buildbg from "../assets/buildbg.jpg";
import '../home.css';
import proc from "../assets/processor.jpg";
import mb from "../assets/motherboard.jpg";
import ram from "../assets/RAM.jpg";
import gpu from "../assets/gpu.jpg";
import stor from "../assets/storage.png";
import cool from "../assets/cooling.jpg";
import psu from "../assets/psu.jpg";
import pccase from "../assets/pccase.jpg";
import {Link} from "react-router-dom";
import React from "react";


/*var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect("mongodb://localhost:27017/", function(err, db) {
 if (err) throw err;
 var dbo = db.db("ProjDB2");
 dbo.collection("Comp parts").find({}).toArray(function(err, res) {
 if (err) throw err;
 console.log(res[0]);
 db.close();
 });
});*/
 

var proc_val = res.slice(0,14);
var mb_val = res.slice(15,28);
var ram_val = res.slice(29,42);
var gc_val = res.slice(43,56);
var st_val = res.slice(57,70);
var psu_val = res.slice(71,85);
var cs_val = res.slice(86,100);
var case_val = res.slice(101,115);
const xi=[];
function Change(){
    xi[1] = document.getElementById("proc_id").value;
    xi[2] = document.getElementById("mb_id").value;
    xi[0] = document.getElementById("case_id").value;
    xi[3] = document.getElementById("ram_id").value;
    xi[4] = document.getElementById("gc_id").value;
    xi[5] = document.getElementById("st_id").value;
    xi[6] = document.getElementById("psu_id").value;
    xi[7] = document.getElementById("cs_id").value;
    console.log(xi);
}

class Part extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
    return(
        <div className="partbox">
            <img src={this.props.loc} className="partimg"/>
            {this.props.children}
            <select id={this.props.id_val} className="dropbox">
                {
                    this.props.list_val.map((val,index)=><option key={index} value={val['name']+'_'+val['price']}>{val['name']} (Rs.{val['price']})</option>)
                }
            </select>
        </div>
    )};
            }

function About(){
    return(
<<<<<<< HEAD:src/components/Build.js
        <div>
            <img src={buildbg} className="buildimg"/>
            
            <div className="box4s">
            <Part loc={proc} id_val="proc_id" list_val={proc_val}>Processor</Part>
            <Part loc={mb} id_val="mb_id" list_val={mb_val}>Motherboard</Part>
            <Part loc={ram} id_val="ram_id" list_val={ram_val}>RAM</Part>
            <Part loc={gpu} id_val="gc_id" list_val={gc_val}>Graphics card</Part>
            </div>
            <div className="box5s">
            <Part loc={stor} id_val="st_id" list_val={st_val}>Storage</Part>
            <Part loc={psu} id_val="psu_id" list_val={psu_val}>Power Supply Unit</Part>
            <Part loc={cool} id_val="cs_id" list_val={cs_val}>Cooling System</Part>
            <Part loc={pccase} id_val="case_id" list_val={case_val}>Case</Part>
            </div>
            <button className="knowmore2" onClick={Change}>Buy Now</button>
=======
        <div className="Hi">
            <h1>Hello About</h1>
>>>>>>> 24e8699e9dba6014d551205b27d5816e328997f5:src/components/About.js
        </div>
    );
}

<<<<<<< HEAD:src/components/Build.js
export{xi};
export default Build;
=======
export default About;
>>>>>>> 24e8699e9dba6014d551205b27d5816e328997f5:src/components/About.js

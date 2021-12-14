import react from "react";
<<<<<<< HEAD:src/components/Help.js
import helpbg from "../assets/helpbg.jpg";
import '../help.css'
function Question(props){
    return(
        <div>
            <p className='Q'>{props.ques}</p>
            <p className="text">{props.children}</p>
        </div>
    )
}
function Help(){
    return(
        <div>
            <img src={helpbg} className="HELP"/>
            <p className="Heading">Frequently Asked Questions (FAQ’s)</p>
            <br/>
            <div className="content">
            
            <Question ques="Is it cheaper to build a pc?">Yes, it is a cheaper option to build a pc compared to
ordering a pre-built desktop.</Question><br/>
            <Question ques="What tools do I need to build a pc?">While many tools are available to assist in the process, it is
possible to build it with no tools at all.</Question><br/>
            <Question ques="How replaceable are pc parts?" >Individual pc parts can be upgraded or changed as per
requirements.</Question>
            <br/>
            <p className="Q">Any Queries can be mailed to abc@gmail.com</p>
            <p className="Q">24/7 Toll-free number ------ xxxxxxxxxx</p>
            </div>
=======

function Tech(){
    return(
        <div className="Hi">
            <h1>Tech</h1>
>>>>>>> 24e8699e9dba6014d551205b27d5816e328997f5:src/components/Tech.js
        </div>
    );
}

export default Tech;
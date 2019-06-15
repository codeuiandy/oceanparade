import React , {Component} from 'react'
import '../index.css';
import {  Link, NavLink } from "react-router-dom";
class Secone extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                   <div  className=" img-flluid ">
              
              <div className="hero-text flow-text  ">
              <h1 className="headingtext" ><span className="log">O</span>cean Parade</h1>
              <h4 className="headingtextsub" >the home of kings</h4>
              <br/>
              <br/>
              
              <Link to="Aboutme"><button className="btn btn-large blue waves-effect  z-depth-5 pulse" >Read More</button></Link>
              </div>
              
              
              
              
                          </div>
            </div>
        )
    }
}
export default Secone
import React, {Component} from "react"
import Particles from 'react-particles-js';
import '../index.css';
import imgs from "../img/venice-italy-gritti-palace-1606928_1920.jpg"
import imges from "../img/hotel-1209021.jpg"
//import img2 from "../img/hotel-1209021.jpg"
import { Spring } from 'react-spring/renderprops'
import Forms from './Forms'
import Gallery from './Gallery'
import Afterourteam from './Afterourteam'
import Imagesz from './Imagesz'
import {  Link, NavLink } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";


let imgss= imgs;
let imgsss=imges;
const style={color:"green",
width:"200px", backgroundColor:"yellow"}

class Main extends  Component{
constructor(){
super()



}
componentDidMount(){
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems,{ position: 'left'});
  });
}
   
    
render(){
    return(
        <div className="">
        <Spring

        from={{ opacity: 0.6, marginTop: -9000 }}
        to={{ opacity: 1, marginTop: 0 }}
      >
        {props => (
           
          <div style={props} >
            
              <div  className=" img-flluid ">
              
  <div className="hero-text flow-text  ">
  <h1><span className="log">O</span>cean Parade</h1>
  <h4>the home of kings</h4>
  <br/>
  <br/>
  
  <Link to="Aboutme"><button className="btn btn-large blue waves-effect  z-depth-5 pulse" >Read More</button></Link>
  </div>
  
  
  
  
              </div>
              <div className="fixed-action-btn ">
  <a className="btn-floating btn-large pulse red">
    <i className="large material-icons">mode_edit</i>
  </a>
  <ul>
    <li><a className="btn-floating red"><i className="material-icons">insert_chart</i></a></li>
    <li><a className="btn-floating yellow darken-1"><i className="material-icons">format_quote</i></a></li>
    <li><a className="btn-floating green"><i className="material-icons">publish</i></a></li>
    <li><a className="btn-floating blue"><i className="material-icons">attach_file</i></a></li>
  </ul>
</div>

<Imagesz/> 
<Afterourteam/>
<Gallery/>
<Forms/>
         </div>
        )}
      </Spring>
      
      
      
      
     
      </div>
    );
    
        }
        
    }
  const styles ={width:"50%",textAling:"center",backgroundColor:"red"}
export default Main

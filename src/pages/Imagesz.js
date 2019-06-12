import React, {Component} from 'react'
import '../index.css';
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";

import image1 from "../img/business-3560916_1920.jpg"
import image2 from "../img/adult-1868750_1920.jpg"
import image3 from "../img/business-437020_1920.jpg"
import image4 from "../img/entrepreneur-593358_1920.jpg"
class Imagesz extends Component{
    constructor(){
        super()
    }
    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.slider');
            var instances = M.Slider.init(elems);
          });
        
  M.AutoInit();
    }
    render(){

    
        return(
            
            
  <div   className="row ">
<div  className="col s12 m12 l12 xl6 ">
<div className="slider ">
    <ul className="slides ">
      <li>
        <img style={{backgroundPosition:"top"}} className="responsive-img" src={image1}/> 
        <div className="caption center-align">
          <h3>Ocean parade</h3>
          <h5 className="light grey-text text-lighten-3">Home of the strong</h5>
        </div>
      </li>
      <li>
      <img  className="responsive-img" src={image2}/>  
        <div className="caption left-align">
          <h3>Home of the</h3>
          <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
        </div>
      </li>
      <li>
      <img style={{backgroundPosition:"top"}} className="responsive-img" src={image4}/>  
        <div className="caption right-align">
          <h3>mighty nation</h3>
          <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
        </div>
      </li>
      <li>
      <img style={{backgroundPosition:"top"}} className="responsive-img" src={image3}/>  
        <div className="caption center-align">
          <h3>This is our big Tagline!</h3>
          <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
        </div>
      </li>
    </ul>
  </div>
  </div>
  
  <div className="col s12 m12 l12 xl6 z-depth-5  ">
  <div className="#1565c0 blue darken-3 myown center-align white-text flow-text"><h3>You cant ask for more<br/>
  <button className="btn btn-small waves-effect  z-depth-5 pulse" > <i className="material-icons left medium">person_pin</i>Meet The Team</button></h3>
  </div>
  </div>
  
</div>

 
            
            
            
        )
    }
}

export default Imagesz
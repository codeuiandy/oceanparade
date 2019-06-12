import React ,{Component} from 'react'
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";

import image1 from "../img/bedroom-1285156.jpg"
import image2 from "../img/breakfast-801827.jpg"
import image3 from "../img/relaxation-3065577.jpg"
import image4 from "../img/hotel-1979406.jpg"
import image5 from "../img/architecture-1837150_1920.jpg"
import image6 from "../img/hotel-1749602_1920.jpg"
import image7 from "../img/water-3292794_1920.jpg"
import image8 from "../img/beach-1854076_1920.jpg"
import image9 from "../img/stairs-1209439_1920.jpg"
import image10 from "../img/hotel-389256_1280.jpg"
import image12 from "../img/villa-1737168.jpg"
import image11 from "../img/cyberspace-2784907.jpg"

class Gallery extends Component{
    
    constructor(){
        super()
   
    }
    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.materialboxed');
            var instances = M.Materialbox.init(elems);
          });
    }
    render(){
        
        return(
           
          
            <div  className="container flow-text white-text z-depth-5  center-align">
            <div   className="row ">
            <div className="col s3 m3 l3">
            <img className="responsive-img materialboxed teamin" data-caption="Ocean Parade banana island" src={image5}/>
</div>
<div className="col s3 m3 l3">
<img  width="250" className="responsive-img materialboxed" data-caption="Ocean Parade banana island" src={image6}/>
       </div>

       <div className="col s3 m3 l3">
       
       <img className="responsive-img materialboxed" data-caption="Ocean Parade banana island" src={image7}/>
       
       </div>
       <div className="col s3 m3 l3">
       
       <img className="responsive-img materialboxed  prefix" data-caption="Ocean Parade banana island" src={image8}/>
       
       </div>
       
</div>

<div   className="row ">
            <div className="col s3 m3 l3">
            <img className="responsive-img materialboxed teamin" data-caption="Ocean Parade banana island" src={image9}/>
</div>
<div className="col s3 m3 l3">
<img className="responsive-img materialboxed" data-caption="Ocean Parade banana island" src={image10}/>
       </div>

       <div className="col s3 m3 l3">
       
       <img className="responsive-img materialboxed" data-caption="Ocean Parade banana island" src={image11}/>
       
       </div>
       <div className="col s3 m3 l3">
       
       <img className="responsive-img materialboxed" data-caption="Ocean Parade banana island" src={image4}/>
       
       </div>
       
</div>

<div   className="row ">
            <div className="col s3 m3 l3">
            <img className="responsive-img materialboxed teamin" data-caption="Ocean Parade banana island" src={image1}/>
</div>
<div className="col s3 m3 l3">
<img className="responsive-img materialboxed" data-caption="Ocean Parade banana island" src={image2}/>
       </div>

       <div className="col s3 m3 l3">
       
       <img className="responsive-img materialboxed" data-caption="Ocean Parade banana island" src={image3}/>
       
       </div>
       <div className="col s3 m3 l3">
       
       <img className="responsive-img materialboxed" data-caption="Ocean Parade banana island" src={image12}/>
       
       </div>
       
</div>


</div>

          
            
        )
    }
   
}

export default Gallery
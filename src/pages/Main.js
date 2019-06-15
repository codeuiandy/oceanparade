import React, {Component} from "react"
import Floating from './Floating'
import '../index.css';
import Secone from './Secone'
import Forms from './Forms'
import Gallery from './Gallery'
import Afterourteam from './Afterourteam'
import Imagesz from './Imagesz'
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";




class Main extends  Component{
constructor(){
super()



}
componentDidMount(){
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems);
  });
}
   
    
render(){
    return(
      
            <div className="homeani">
             <Secone/>
              <Floating/>
                  <Imagesz/> 
                           <Afterourteam/>
                                   <Gallery/>
                                              <Forms/>
             </div>
             )
         }
     }
  
export default Main

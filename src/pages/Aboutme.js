import csssv from '../Aboutme.css'
import Header from './Header'
import img from '../img/FB_IMG_1560283974751.jpg'
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import React,{Component} from 'react'

class Aboutme extends Component{
constructor(){
    super()
    
}

  
render(){
    return(
        <div>
            <Header/>
            
            <h1 className="">
              <div className="container ">
                  <div className="row">
                      <div className="col s12 m6 l6 xl6 about aboutmeimg">
                        <img className="responsive-img mvp" src={img}/>
                      </div>
                      <div className=" col s12 m6 l6 xl6 aboutimgtext">
                          <p style={{marginBottom:"10px"}}>Thanks for visiting my site</p>
                          
                          <div>with over a decade of development experience in a number of industries i realize that the typical product creation process between clients and development was flawed.all too often development rairely communicate to client throughtout the development stage resulting in a final product that falls to reach the goal sought by the customer and end user</div>
                          <p>for this reason i decidede to utillize a completely....<br/>Read more on my portfolio</p>
                      </div>
                  </div>

              </div>
            </h1>
            
        </div>
    )
}

}
export default Aboutme
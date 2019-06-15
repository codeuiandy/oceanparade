import React, {Component} from "react"
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";
import {  Link, NavLink } from "react-router-dom";
class Header extends  Component{
constructor(props){
super(props)
console.log(props)



}
handle=()=>{
    alert("welcome to andy frost website")
}
componentDidMount(){
    M.AutoInit();

    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.dropdown-trigger');
        var instances = M.Dropdown.init(elems, {constrainWidth:false,container:'div'});
      });
}
render(){
    return(
        <div >
           
           <nav className="nav-wrapper z-depth-5 #3949ab indigo darken-1">
           <div className="container">
           <a onMouseEnter={this.handle} className="brand-logo logx left"><span className="logshvv">O</span><span className="logsh">O</span><span className="logshv">O</span>cean parade</a>
           <a className="sidenav-trigger btn-floating right pulse z-depth-5" data-target="mobile-links"><i className="material-icons blue white-text">stay_current_portrait

</i></a>
           <ul className="right hide-on-med-and-down">

               
               <li><a><button className="btn waves-effect  z-depth-5 bv"><NavLink to="/">Home</NavLink></button></a></li>
               <li><a><button className="btn waves-effect  z-depth-5 bv"><Link to="Aboutme">My portfolio</Link></button></a></li>
               </ul>
           </div>
           </nav>
           <ul className="sidenav right hide-on-med-and-above" id="mobile-links">

               <div className="divider"></div>
              



<div className="hotelonsmall z-depth-5 headani ">
<p className="hotelonsmallll">Hotel Management</p>
            <p className="hotelonsmalll">Available Rooms</p>
            <p className="hotelonsmallll">Office Space</p>
            <p className="hotelonsmallll">Your Bookings</p>
            <p className="hotelonsmalllll">Book Us</p>
            <p className="hotelonsmallll">Hotline</p>
           <Link to="Aboutme"> <button style={{marginTop:"7px"}} className="btn headbtn waves-effect z-depth-5 center-align">My portfolio</button></Link>
           <Link to="/"> <button style={{marginTop:"7px"}} className="btn headbtn waves-effect z-depth-5 center-align">Home</button></Link>
</div>
  
               </ul>
             
        </div>
    )
}






}
export default Header
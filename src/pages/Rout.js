import React, {Component} from 'react';
//import 'bootstrap/dist/css/bootstrap.css';
import App from '../App'
import Aboutme from './Aboutme'

import 'materialize-css/dist/css/materialize.min.css';
//import EditTodo from "./editTodo";
//import CreateTodo from "./createTodo";
//import TodoList from "./Todo";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Main from "./Main";
import Footer from "./Footer";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Rout extends Component  {
  render(){
  return (
    <>
    <Router>
    <div className="Rout">
    
    
    <Route  path='/'exact component={App}/>
    <Route  path='/Aboutme' component={Aboutme}/>
    
    
   
    
   

   
    </div>
    </Router>
    </>
   )
}
}
export default Rout;

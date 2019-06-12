import React, {Component} from 'react';
//import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import './index.css';
import 'materialize-css/dist/css/materialize.min.css';
//import EditTodo from "./pages/editTodo";
//import CreateTodo from "./pages/createTodo";
//import TodoList from "./pages/Todo";
import Header from "./pages/Header";
import Sidebar from "./pages/Sidebar";
import Main from "./pages/Main";
import Footer from "./pages/Footer";
import Aboutme from './pages/Aboutme'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component  {
  render(){
  return (
    
    <div className="App">
      
    
    
    <div className="header">
    <Header/>
    
    </div>

    <div className="Sidebar ">
    <Sidebar/>
    </div>
   
    <div className="Main">

    
    
    <Main/>
    </div>
    

    <div className="Footer">
      
    <Footer/>
    
    
    </div>
    
    
    </div>
   
   )
}
}
export default App;

import React, {Component} from 'react'
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import Header from './Header'

class Form extends Component{
    constructor(){
        super()
        this.state={
            visitor:"",
            message:"",
            change1:"",
            change2:"",
            submit2:"for complain plz contact frostandy41@gmail.com"
        }
    }
    componentDidMount(){
        M.AutoInit();


    }
    
    handchange=(e)=>{
        this.setState({
          visitor:e.target.value
        })
    }

    change1=(e)=>{

      this.setState({
        change1:e.target.value
      })

    }
    change2=(e)=>{
      
      this.setState({
        change2:e.target.value
      })

    }
    twoform=(e)=>{
      e.preventDefault();
      this.setState({
        submit2:"for complain plz contact frostandy41@gmail.com"
      })
    }
//error=()=>{
 //  alert()
//}
    handleSubmit=(e)=>{
        e.preventDefault();
        //if (this.event.target.value=="") {
        //this.error();
            
       // }
       this.setState({message:"Now i now your name " +this.state.visitor+ " kindly go to the next tab to book for a room"})
    }

    
    render(){

    
        return(
            <div className="testmode">
          
  <div className="row">
    <div className="col s12">
      <ul className="tabs #1a237e indigo white-text darken-4">
        <li className="tab col s3"><a className="active white-text flow-text" href="#test1">Welcome {}{ this.state.visitor}</a></li>
        <li className={"tab col s3 "+(this.state.visitor.length<5?"disabled":"")}><a  href="#test2">book Us</a></li>
        <li className={"tab col s3 "+(this.state.change2.length==""?"disabled":"")}><a href="#test3">{this.state.visitor} Summarry{}</a></li>
       
      </ul>
    </div>
    <div className="container center-align">
    <div id="test1" className="col s12">
    <div className="row">
    <form onSubmit={this.handleSubmit} className="col s12">
      <div className="row">
        <div className="input-field col s12">
          <i className="material-icons prefix">account_circle</i>
          <input  onChange={this.handchange} id="icon_prefix" type="text" className="validate"/>
          <label htmlFor="icon_prefix">input Name</label>
          {this.state.message}
        </div>
      </div>
      <button className={"btn center-align waves-red waves-effect waves-darken b "+(this.state.visitor.length<5?"disabled":""  )  }>Submit</button>
    </form>
  </div>
   
    
    </div>
    
    <div id="test2" className="col s12">
    
    <div className="row">
    <form onSubmit={this.twoform} className="col s12">
      <div className="row">
        <div className="input-field col s6">
          <i className="material-icons prefix">house</i>
          <input onChange={this.change1} id="icon_prefix" type="text" className="validate"/>
          <label htmlFor="icon_prefix">Num of rooms</label>
        </div>
        <div className="input-field col s6">
          <i className="material-icons prefix">phone</i>
          <input onChange={this.change2} id="icon_telephone" type="tel" className="validate "/>
          <label htmlFor="icon_telephone">Date</label>
        </div>
      </div>
      <button className="btn center-align waves-red waves-effect waves-darken">Submit</button>
    </form>
  </div>
    
    </div>
    <div id="test3" className="col s12">
    <div  className="center-align">
    <p className="white-text z-depth-5" style={{fontSize:"30px"}}>{this.state.visitor}</p>
    <div className="divider"></div>
    <p className="white-text z-depth-4" style={{fontSize:"30px"}}>{this.state.change1}</p>
    <div className="divider"></div>
    <p className="white-text z-depth-3" style={{fontSize:"30px"}}>{this.state.change2}</p>
    
      
      
      </div >
      </div>
  </div>
  </div>
        
            </div>
        )
    }
}

export default Form
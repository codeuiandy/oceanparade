import React ,{Component} from 'react'


  
class Afterourteam extends Component{
    
    constructor(){
        super()
   this.state={display:"ur Hotel Gallery"}
    }
    
        handleenter=()=>{
            this.setState({display:" you can mail us at frostandy41@gmail.com"})
        }
     
      
        componentDidUpdate(){
            this.handleleave=()=>{
                this.setState({display:"ur Hotel Gallery"})
            }
        }
        
    render(){
        
        return(
           
          <div style={{marginBottom:"20px"}} className="container flow-text white-text z-depth-5 after center-align">

       <h3 className="flow-text"  onMouseLeave={this.handleleave} onMouseEnter={this.handleenter} style={{magin:"0",fontSize:"28px"}} className=""><span style={{fontSize:"50px"}}>O</span>{this.state.display}</h3>
          
            </div>
        )
    }
   
}

export default Afterourteam
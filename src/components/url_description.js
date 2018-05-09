import React, { Component } from 'react';

class UrlText extends Component{
   constructor(props){
       super(props);
       
       this.state= { url: "", text: "" };
   }
   render(){
       return(
           <div>
           
             <div className="form-group">
               <input className="form-control rounded-8"  value={this.state.url} onChange ={event=>this.setState({url: event.target.value})} placeholder="Enter the correct URL of the image..." /><br />
               <textarea value={this.state.text} onChange={event=>this.setState({text: event.target.value})} className="form-control rounded-0" placeholder="Add description..."></textarea><br />
               <button className="btn" onClick={()=>this.onBtnClick(this.state.url,this.state.text)}>Add</button>
             </div>
             
           </div>
       );
   }
    onBtnClick(url, text){
        const img = {
            id: Date.now(),
            src: url,
            desc: text
        };
        this.props.onClickAdd(img);
        this.setState({url: "", text: ""})
    }

}

export default UrlText;
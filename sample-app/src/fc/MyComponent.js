import React, { Component } from 'react'

export default class MyComponent extends Component {
   constructor(props) {
       super(props);
       this.state={data:''};
       this.handleChange=this.handleChange.bind(this);
    }
   handleChange(ev){
    const {name,value}=ev.target;
    this.setState(prevState=>({ ...prevState, name:value}));
    console.log(this.state);
    }

    render() {
        return (
            <form>
            <div>
               <input type="text" onChange={this.handleChange} /> 
                <label>{this.state}</label>
            </div>
             <div>
             <input type="text" onChange={this.handleChange} /> 
              <label>{this.state}</label>
          </div>
           <div>
           <input type="text" onChange={this.handleChange} /> 
            <label>{this.state}</label>
           </div>
        </form>
        )
    }
}

import React, { Component } from 'react';
import MyComponent from './fc/MyComponent';
export default class App2 extends Component {
    render() {
        return (
            <div>
               <h1>New Application</h1> 
               <MyComponent />
            </div>
        )
    }
}

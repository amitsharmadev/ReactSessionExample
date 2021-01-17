import React, { Component } from 'react'

export default class DisplayCustomer extends Component {
    render() {
        return (
            <div>
                <h1>Display Customer</h1>
                <label>Name: {this.props.name}</label><br/>
                <label>Address: {this.props.address}</label>
                
            </div>
        )
    }
}

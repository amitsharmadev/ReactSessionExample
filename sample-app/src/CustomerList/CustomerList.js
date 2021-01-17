import React, { Component } from 'react'

export default class CustomerList extends Component {
    render() {
        this.data= this.props.customers.map((c,index)=>{
            return (
                <tr key={index}>
                    <td>{c.name}</td>
                    <td>{c.address}</td>
                </tr>
            )
        });
        console.log(this.data);
    
        return (
            <div>
                <table border="1"><tbody>{this.data}</tbody></table>
            </div>
        )
    }


}

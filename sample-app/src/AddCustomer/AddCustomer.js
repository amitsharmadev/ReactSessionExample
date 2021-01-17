import React, { Component } from 'react'

export default class AddCustomer extends Component {
    constructor(props) {
        super(props);
        this.ChangeAddress=this.ChangeAddress.bind(this);
        this.ChangeName=this.ChangeName.bind(this);
        this.CustomerAdd=this.CustomerAdd.bind(this);
    }

    ChangeAddress(e){this.setState({address:e.target.value});}
    ChangeName(e){this.setState({name:e.target.value});}
    CustomerAdd(e){//console.log(this.state); 
        this.props.onCustomerAdd(this.state);
            }

    render() {
        return (
            <div style={{border: '1px solid'}}>
                <table>
                    <tbody>
                        <tr>
                            <td>Name: </td>
                            <td><input type="text"
                             onChange={this.ChangeName}/></td>
                        </tr>
                        <tr>
                            <td>Address: </td>
                            <td><input type="text" 
                                onChange={this.ChangeAddress}/></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><button type="button"
                                onClick={this.CustomerAdd}
                            >Add</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

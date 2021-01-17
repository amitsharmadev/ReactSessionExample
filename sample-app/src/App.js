import './App.css';
import React,{Component} from 'react';
// import AddCustomer from './AddCustomer/AddCustomer';
// import DisplayCustomer from './DisplayCustomer/DisplayCustomer';
// import CustomerList from './CustomerList/CustomerList';
//import ButtonOne from './components/ButtonOne';
//import NewButton from './components/NewButton';
class  App extends Component {

  customers=[];
  constructor(props){
    super(props);
    this.state={data:{name:'',address:''}};
    
    this.abc=this.abc.bind(this);
  }
  abc(sampledata){
    console.log("DoSomethig Called...."+sampledata.name);
    this.setState({data:sampledata});
    this.customers.push(sampledata);
    //console.log(this.customers.length);
    //console.log(this.customers);
  }
  render() {
  return (
    <div className="App" >
     {/* <h1>Hello Everyone</h1>
     <AddCustomer onCustomerAdd={this.abc} />
     <DisplayCustomer name={this.state.data.name} address={this.state.data.address} />
     <CustomerList customers={this.customers} /> */}
    {/* <ButtonOne disable /><br />
    <NewButton beautiful /> */}

    
    </div>
  );
  }
}

export default App;


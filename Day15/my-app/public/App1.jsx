import React from 'react';


// import Home from './components/Home';
// import Welcome from './components/Welcome';
import Button from 'react-bootstrap/Button';
// import CheckPrime from './components/prime';
// import Sttable from './components/studentTable';


class App extends React.Component{

  // num =50
  render(){
    return(
      <div>
        {/* Welcome to react <Home ></Home>
        <Welcome name= "abhay" sname = "p"></Welcome>
        <CheckPrime num ="5"></CheckPrime>
        <Sttable></Sttable>

    <h2>{this.num}</h2>
    <h1>{2*this.num}</h1> */}
    {/* <Welcome></Welcome> */}
    <Button variant="primary">Primary</Button>{' '}
        
      </div>
    )
  }
}



export default App;

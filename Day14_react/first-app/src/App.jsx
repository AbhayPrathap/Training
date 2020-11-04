import React from 'react';


import Home from './components/Home';
import Welcome from './components/Welcome';


class App extends React.Component{

  num =50
  render(){
    return(
      <div>
        Welcome to react <Home></Home>
        <Welcome></Welcome>
    <h2>{this.num}</h2>
    <h1>{2*this.num}</h1>
        
      </div>
    )
  }
}



export default App;

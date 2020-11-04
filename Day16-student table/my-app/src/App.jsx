import React from 'react';
// import PropValidation from './validation/validate';


// class App extends React.Component{
// calculate(num){
//   return num+5

// }
//   render(){
//     return(
//       <div>
//         <PropValidation propString={"hi all"} propbool = {true}  ></PropValidation>
//       </div>
//     )
//   }
// }

import './App.css';

// class App extends React.Component{
//   constructor(){
//     super()
//     this.state={
//       x:15,
//       y:20
//     }
//   }
//   render(){
//     setTimeout(()=>{
//       this.setState({x:100,y:200})
//     },5000)
//     return(
//       <div>
//         x={this.state.x}<br></br>
//         y={this.state.y}
//       </div>
//     )
//   }
// }
import Student from './Component/Student'

class App extends React.Component{
  render(){
    return(
      <Student></Student>
    )
  }
}


export default App;

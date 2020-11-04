import React from 'react';
import './Components/Style.css'
import Display from './Components/Display'
import Sales from './Components/Sales'
class App extends React.Component {
  render() {
    return (
      <div className="class1">
        <h1 className="class2">Baker's House</h1>
        <h4 className="class2">Item List || Order List</h4>

        <div className="class3">
          <div className="class4">
            <Display></Display>
          </div>
          <div className="class5">
            <Sales></Sales>

          </div>


        </div>

      </div>

    )
  }
}

export default App;

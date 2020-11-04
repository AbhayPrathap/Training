import React from 'react';


class studentDetails extends React.Component {
  id = 0
  constructor() {
    super()
    this.state = {
      emp: [{ id: 1, name: "Abhay", age: 20 }, { id: 2, name: "aja", age: 25 }]

    }
  }
  render() {
    this.id = this.props.match.params.id

    return (
      <div>
        <h1>Details of {this.id}</h1>
        <div>Name:{this.state.emp[this.id].name}</div>
        <div>Age:{this.state.emp[this.id].age}</div>
      </div>

    )
  }
}
export default studentDetails;

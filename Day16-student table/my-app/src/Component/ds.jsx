class Stable extends React.Component {
 
    constructor() {
        super()
        this.state = {
            name: "",
            age: "",
            students:[]
        }
    }
    students = [
 
    ]
 
    setData = (event) => {
        let id = event.target.name;
        let value = event.target.value;
 
        this.setState({ [id]: value })
    }
    saveData = () => {
        this.students.push({ name: this.state.name, age: this.state.age })
        this.setState({students:this.students}) 
    }
    render() {
        return (
            <div>
                <h1>Student Form</h1>
                <form>
                    <div>
                        <div>Name:</div>
                        <input type="text" onChange={this.setData} name="name" />
                        {this.state.name}
                    </div>
                    <div>
                        <div>Age:</div>
                        <input type="text" name="age" onChange={this.setData} />
                        {this.state.age}
                    </div>
                    <div>
                        <input value="save" onClick={this.saveData} type="button" />
                    </div>
                </form>
 
                <h1>student table</h1>
                <table>
                <thead>
                    <tr>
                        <th>slno</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.students.map((res, key) => (
                        <tr key={key}>
                            <td>{key + 1}</td>
                            <td>{res.name}</td>
                            <td>{res.age}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        )
    }
}
 
export default Stable
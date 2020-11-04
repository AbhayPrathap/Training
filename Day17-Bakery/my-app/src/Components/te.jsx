import React from 'react';

class Student extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "",
            age: "",
            students: [],
            error: "",
            editId: ""
        }
    }
    students = [
    ]
    setData = (event) => {

        let id = event.target.name;
        let value = event.target.value;

        this.setState({ error: "" })
        if (id === "age" && !Number(value)) {
            this.setState({ error: "Age should be a number" })
        }
        else if (id === "name" && !(/^[A-Za-z]+$/.test(value))) {
            this.setState({ error: "error" }
            )
        }
        else {
            this.setState({ [id]: value });
        }
    }
    saveData = () => {
        if (this.state.error === "") {
            this.students.push({ name: this.state.name, age: this.state.age })
            this.setState({ students: this.students })
        }
    }
    deleteData = (id) => {
        this.students.splice(id, 1)
        this.setState({ students: this.students })
    }
    editData = (id) => {
        let name = this.students[id].name
        let age = this.students[id].age
        this.setState({ name: name, age: age, editId: id })
    }

    updatedata = () => {
        
        this.students[this.state.editId].name=this.state.name
        this.students[this.state.editId].age=this.state.age
        this.setState({ students: this.students })


    }


    render() {
        return (
            <div>
                <h1>Student Form </h1>
                <form>
                    <div>
                        Name : <input type="text" onChange={this.setData} name="name" />
                        {this.state.name}
                    </div>
                    <div>
                        Age: <input type="text" onChange={this.setData} name="age" />
                        {this.state.age}
                    </div>
                    <div>{this.state.error}</div>
                    <div>
                        <input value="Save" onClick={this.saveData} type="button" />
                        <input value="Update" onClick={this.updatedata} type="button" />
                    </div>
                </form>
                <h1>Student Table</h1>
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
                                <td><input type="button" value="Delete" onClick={() => { this.deleteData(key) }} /></td>
                                <td><input type="button" value="Edit" onClick={() => { this.editData(key) }} /></td>
                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Student
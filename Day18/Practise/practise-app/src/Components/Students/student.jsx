import React from 'react';
import { Route, Switch } from 'react-router-dom';
import studentDetails from '../../Details/studentDetails';

class Student extends React.Component {
    constructor() {
        super()
        this.state = {
            stu: [{ id: 1, name: "Abhay" }, { id: 2, name: "aja" }]
        }
    }
    navigate(id) {
        let path = "student/" + id
        this.props.history.push(path)
    }

    render() {

        return (
            <div>
                {this.state.stu.map((res, key) => (
                    <div>
                        <div>{res.id}</div>
                        <div>{res.name}</div>
                        <div>
                            <input type="button" value="Details" onClick={() => { this.navigate(key) }} />
                        </div>
                    </div>
                ))}
                <Switch>
                    <Route path="/student/:id" component={studentDetails} />
                </Switch>
            </div>
        )
    }
}
export default Student;


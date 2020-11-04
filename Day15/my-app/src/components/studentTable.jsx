import { render } from '@testing-library/react';
import React from 'react';
import './table.css'
class Sttable extends React.Component {
    students = [
        {
            name: "Abhay", mark: 100
        },
        {
            name: "Adith", mark: 100
        },
        {
            name: "Aja", mark: 200
        }
    ]

    render() {
        return (
            <div>
                <h1>Student Table</h1>
                <table>
                    <tr>
                        <th>slno</th>
                        <th>Name</th>
                        <th>TotalMark</th>

                    </tr>
                    {this.students.map((res, key) => (
                        <tr>
                            <td>{key + 1}</td>
                            <td>{res.name}</td>
                            <td>{res.mark}</td>
                        </tr>
                    ))}
                </table>
                {
                    this.students.map((res, key) => (
                        <div >
                            <div className = "random">{res.name}</div>
                        </div>
                    ))
                }
            </div>
        )
    }
}
export default Sttable
import React from 'react';

import './Style.css';


class Sales extends React.Component {
    constructor() {
        super()
        this.state = {
            sales: [],
            sitem: "",
            srate: "",
            squantity: ""

        }
    }
    sales = []
    setData = (event) => {
        let id = event.target.name;
        let value = event.target.value;
        this.setState({ [id]: value });
    }
    saveData = () => {
        this.sales.push({ sitem: this.state.sitem, squantity: this.state.squantity, srate: this.state.srate })
        this.setState({ sales: this.sales })
    }
    deleteData = (id) => {
        this.sales.splice(id, 1)
        this.setState({ sales: this.sales })
    }

    render() {
        return (
            <div>
                <div>Sales</div>
                <form >

                    <div className="class6">
                        Item:<input type="text" name="sitem" onChange={this.setData} className="class7"></input>
                    </div>
                    <div className="class6">
                        Quantity:<input type="text" name="squantity" onChange={this.setData} className="class7"></input>
                    </div>
                    <div className="class6">
                        Rate:<input type="text" name="srate" onChange={this.setData} className="class7"></input>
                    </div>
                    <div>
                        <input value="Save" onClick={this.saveData} type="button"></input>

                    </div>
                </form>
                <table border={2} className="class9">
                    <thead >
                        <tr>
                            <th>Sl.No</th>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>Rate</th>
                        </tr>

                    </thead>
                    <tbody>
                        {this.state.sales.map((res, key) => (
                            <tr key={key}>
                                <td>{key + 1}</td>
                                <td>{res.sitem}</td>
                                <td>{res.squantity}</td>
                                <td>{res.srate}</td>
                                <td><input type="button" value="Delete" onClick={() => { this.deleteData(key) }} /></td>
                            </tr>
                        ))
                        }

                    </tbody>

                </table>
                <input type="Button" value="Print" />

            </div>

        )
    }
}
export default Sales
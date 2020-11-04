import React from 'react'

class Sales extends React.Component {

    constructor() {
        super()
        this.state = {sid: "",slabel: "",stype: "",sqty: "",srate: ""}
    }
    setData = (e) => {
        let id = e.target.name;
        let val = e.target.value;
        this.setState({ [id]: val })
    }
    sales = [];
    render() {
        return (
            <div>
                <div>Sales</div>
                Id:<input type="text" name="sid" onChange={this.setData} value={this.state.id} ></input>
                Label:<input type="text" name="slabel" onChange={this.setData} value={this.state.label} ></input>
                Type:<input type="text" name="stype" onChange={this.setData} value={this.state.type} ></input>
                Quantity:<input type="text" name="sqty" onChange={this.setData} value={this.state.qty} ></input>
                Rate:<input type="text" name="srate" onChange={this.setData} value={this.state.rate} ></input>
                <div>
                    <input value="Save" type="button"></input>
                </div>
            </div>
        )
    }
}
export default Sales
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { addTODO } from '../Actions/pget'

class Purchase extends React.Component {
    constructor(props) {
        super(props)
        this.state = { id: "", label: "", type: "", qty: "", rate: "", date: "" }

    }
    pur = []
    addToTODO = () => {
        this.props.addtodo(this.state.obj)
        this.setState({ id: "", label: "", type: "", qty: "", rate: "", date: "" })
    }
    setData = (e) => {
        let id = e.target.name;
        let val = e.target.value;
        this.setState({ [id]: val })
    }

    render() {
        return (
            <div>
                <div>Purchase</div>
                Id:<input type="text" name="id" onChange={this.setData} value={this.state.id} ></input>
                Label:<input type="text" name="label" onChange={this.setData} value={this.state.label} ></input>
                Type:<input type="text" name="type" onChange={this.setData} value={this.state.type} ></input>
                Quantity:<input type="text" name="qty" onChange={this.setData} value={this.state.qty} ></input>
                Rate:<input type="text" name="rate" onChange={this.setData} value={this.state.rate} ></input>
                Date:<input type="text" name="date" onChange={this.setData} value={this.state.date} ></input>
                <div>
                    <button onClick={this.addToTODO}>AddToPurchase</button>

                </div>




            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addtodo: bindActionCreators(addTODO, dispatch)
    }
}
export default connect(null, mapDispatchToProps)(Purchase);
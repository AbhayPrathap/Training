import React from 'react'
import { connect } from 'react-redux';

class Purchasetable extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        let { items } = this.props;
        console.log("Items ",items)
        return (
            <div>
                <div><h1 id="four">PURCHASE TABLE</h1></div>
                <table id="five" border={1}>
                    <tr>
                        <th>slno</th>
                        <th>Label</th>
                        <th>Type </th>
                        <th>Quantity</th>
                        <th>Rate</th>
                        <th>Date</th>
                    </tr>
                    {items&&items.length&&items.map((res, key) => (<tr>
                        <td>{key + 1}</td>
                        <td>{res.label}</td>
                        <td>{res.type}</td>
                        <td>{res.qty}</td>
                        <td>{res.rate}</td>
                        <td>{res.date}</td>
                    </tr>))}
                </table>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        items: state.items,
    }
}

export default connect(mapStateToProps)(Purchasetable);
import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPurchase } from '../../redux/actions/action';

class Purchasetable extends React.Component {
    constructor(props) {
        super(props)
        this.props.getJsonData()

    }
    

render(){
    let { buy} = this.props;
    console.log(this.props)
    // var bought=buy
    return(
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
                    {buy&&buy.length&&buy.map((res) => {
                        return <tr key={res.id}>
                            <td>{res.slno}</td>
                        <td>{res.label}</td>
                        <td>{res.type}</td>
                        <td>{res.qty}</td>
                        <td>{res.rate}</td>
                        <td>{res.date}</td>
                    </tr>})}
                        </table>
                        </div>
                          )
                        }
                    }
                    const mapStateToProps = (state) => {
                        console.log(state)
                        return {
                            buy: state.tutorial
                        }
                    }
                    const mapDispatchToProps = (dispatch, ownProps) => {
                        return {
                            getJsonData: bindActionCreators(getPurchase, dispatch)
                        }
                    }
                    export default connect(mapStateToProps, mapDispatchToProps)(Purchasetable);
                                         

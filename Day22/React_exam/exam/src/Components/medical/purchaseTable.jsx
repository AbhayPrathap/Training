import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addFromServer} from '../Actions/pget';

class Purchasetable extends React.Component{

    addFromserver=()=>{
        this.props.addFromserver()
        console.log(this.props.id)
    }
    render(){
        return(
            <div>
                <table border={2} >
                    <thead >
                        <tr>
                            <th>Id</th>
                            <th>Label</th>
                            <th>Type</th>
                            <th>Quantity</th>
                            <th>Rate</th>
                            <th>Date</th>

                        </tr>
                    </thead>
                    {/* <tbody>
                        {this.state.disp.map((res, key) => (
                            <tr key={key}>
                                <td>{key + 1}</td>
                                <td>{res.item}</td>
                                <td>{res.quantity}</td>
                                <td>{res.rate}</td>
                        
                            </tr>
                        ))
                        }

                    </tbody> */}

                </table>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addFromserver:bindActionCreators(addFromServer, dispatch)
    }
}
export default connect(null, mapDispatchToProps)(Purchasetable);
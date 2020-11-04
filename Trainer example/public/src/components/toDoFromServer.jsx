import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addFromServer } from '../redux/action/todoActions'

class TodoAppFromServer extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <button onClick={this.props.getDataFromSetver}>Add Todo From server</button>
                </div>

            </div>
        )
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getDataFromSetver: bindActionCreators(addFromServer, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(TodoAppFromServer)

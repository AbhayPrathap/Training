import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUser } from '../../Redux/Actions/registeractions';

class Userlog extends React.Component {
    constructor(props) {
        super(props)
        this.props.getJsonData()

    }


    render() {
        let { logged } = this.props;
        // console.log(this.props)
        return (
            <div>
                <div><h1 id="four">LOGGED USERS</h1></div>
                <table id="five" border={1}>
                    <tr>
                        <th>Sl.no</th>
                        <th>Email</th>
                        <th>Username</th>
                    </tr>
                    {logged && logged.length && logged.map((res) => {
                        return <tr key={res.id}>
                            <td>{res.id}</td>
                            <td>{res.email}</td>
                            <td>{res.username}</td>
                        </tr>
                    })}
                </table>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        logged: state.registerrecord
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getJsonData: bindActionCreators(getUser, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Userlog);


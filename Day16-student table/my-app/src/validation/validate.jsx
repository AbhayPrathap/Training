import React from 'react';
import PropTypes from 'prop-types';

class PropValidation extends React.Component {
    render() {
        return (
            <div>
                <h1>Prop Validation</h1>
                <table border={3}>
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Value</th>
                            <th>Valid</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Array</td>
                            <td>{this.props.propArray}</td>
                            <td>{this.props.propArray ? 'true' : 'false'}</td>
                        </tr>
                        <tr>
                            <td>Boolean</td>
                            <td>{this.props.propBool ? 'true' : 'false'}</td>
                            <td>{this.props.propBool ? 'true' : 'false'}</td>
                        </tr>
                        <tr>
                            <td>function</td>
                            <td>{this.props.propFun(8)}</td>
                            <td>{this.props.propFun(8) ? 'true' : 'false'}</td>
                        </tr>
                        <tr>
                            <td>string</td>
                            <td>{this.props.propString}</td>
                            <td>{this.props.propString ? 'true' : 'false'}</td>
                        </tr>
                        <tr>
                            <td>number</td>
                            <td>{this.props.propNumber}</td>
                            <td>{this.props.propNumber ? 'true' : 'false'}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

PropValidation.propTypes = {
    propArray: PropTypes.array.isRequired,
    propBool: PropTypes.bool,
    propFun: PropTypes.func,
    propString: PropTypes.string,
    propNumber: PropTypes.number

}
PropValidation.defaultProps = {
    propArray: [5],
    propBool: false,
    propFun: function (params) {
        return params * 10
    },
    propString: "Welcome",
    propNumber: 0
}



export default PropValidation;
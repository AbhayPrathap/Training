import React, { Fragment } from 'react'
import { connect } from 'react-redux';
import loading from './loading.gif';
class Loader extends React.Component {
    render() {
        return (
            <Fragment>
                { this.props.loading ?
                    <div style={{ width: '500px', height: '500px', position: 'absolute', top: '0px', background: 'rgba(0,0,0,0.5)', margin: 'auto' }}>
                        <img alt="Loading.." src={loading} style={{ height: '100px', width: '100px', margin: '40% 0px 0px 40%' }} />
                    </div> : ''
                }
            </Fragment>
        )
    }

};
const mapStateToProps = (state) => {
    return {
        loading: state.loading
    }
}
export default connect(mapStateToProps, null)(Loader)

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateFilter } from '../../redux/action/todoActions';

class FilterButtons extends Component {
    render() {
        let { updateFilter, active } = this.props;
        return (
            <div>
                <button onClick={() => updateFilter('SHOW_ALL')} disabled={active === 'SHOW_ALL'}>All</button>
                <button onClick={() => updateFilter('SHOW_ACTIVE')} disabled={active === 'SHOW_ACTIVE'}>Active</button>
                <button onClick={() => updateFilter('SHOW_PUBLISHED')} disabled={active === 'SHOW_PUBLISHED'}>Published</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        active: state.filter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateFilter: (filter) => { dispatch(updateFilter(filter)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterButtons);

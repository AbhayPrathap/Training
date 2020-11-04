import React from 'react'
import { connect } from 'react-redux'
import { FILTERS, updateFilter } from '../Actions/todoActions'

class FilterButton extends React.Component {

    render() {
        let {updateFilter,active}=this.props
        return (
            <div>
                <button onClick={() => updateFilter(FILTERS.SHOWALL)} disabled={active===FILTERS.SHOWALL}>All</button>
                <button onClick={() => updateFilter(FILTERS.SHOWACTIVE)} disabled={active===FILTERS.SHOWACTIVE}>Active</button>
                <button onClick={() => updateFilter(FILTERS.SHOWCOMPLETED)} disabled={active===FILTERS.SHOWCOMPLETED}>Completed</button>

            </div>
        )
    }
}

const mapdispactToProps = (dispatch) => {
    return {
        updateFilter: (filter) => { dispatch(updateFilter(filter)) }
    }
}

const mstp=(state)=>{
    console.log("state",state)
    return{
        active:state.filterReducer
    }
}
export default connect(mstp, mapdispactToProps)(FilterButton)
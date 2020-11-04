import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getJsonData } from '../redux/action/jsonplaceholder';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import FilterButtons from './FilterButtons';

class GetAllData extends Component {
constructor(props){
    super(props)
    this.props.getJsonData()
}

    render() {
        let { placeholderReducer } = this.props;
      const  options = {
            title: {
              text: 'My chart'
            },
            series: [{
              data: [1,2,3,4]
            }]
          }
      
        var filteredTodos = placeholderReducer
        return (
            <div>
            <ul>
                <button >Data</button>
                {filteredTodos.map((todo) => {
                    return <li key={todo.id}>{todo.title}</li>
                })}
            </ul>
            <HighchartsReact
    highcharts={Highcharts}
    options={options}
  />
            </div>)
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        placeholderReducer: state.placeholderReducer
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getJsonData: bindActionCreators(getJsonData, dispatch),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(GetAllData);

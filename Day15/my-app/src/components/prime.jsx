import React from 'react';


class CheckPrime extends React.Component {



    render() {
        return (
            <div>
                Even
                {this.props.num % 2 === 0 ? <div>{this.props.num} is an even number</div> :
                    <div >{this.props.num} is not an even number</div>}
            </div>

        )
    }
}
export default CheckPrime
import React from 'react';

class Salestable extends React.Component{
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
export default Salestable
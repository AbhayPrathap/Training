import React from 'react';
import './Style.css'
 
class Display extends React.Component {
    constructor() {
        super()
        this.state = {
            disp:[],
            item: "",
            quantity: "",
            rate: "",
            editId:"",
 
        }
    }
    disp = []
    setData = (event)=>{
        let id = event.target.name;
        let value = event.target.value;
        this.setState({[id]:value});
    }
    saveData = ()=>{
        this.disp.push({ item:this.state.item , quantity:this.state.quantity , rate:this.state.rate })
        this.setState({disp:this.disp})
    }
    editData=(id)=>{
        let item = this.disp[id].item;
        let quantity = this.disp[id].quantity;
        let rate = this.disp[id].rate;
        this.setState({item:item,quantity:quantity,rate:rate,editId:id})
    }
    updateData = ()=>{
 
        this.disp[this.state.editId].item=this.state.item;
        this.disp[this.state.editId].quantity=this.state.quantity;
        this.disp[this.state.editId].rate=this.state.rate;
        this.setState({disp:this.disp})
        
    }
    render() {
        return (

            <div >
                <div>Display</div>

                <form >
                    <div className="class6">
                        Item:<input type="text" name="item" onChange={this.setData} value={this.state.item} className="class7"></input>
                    </div>
                    <div className="class6">
                        Quantity:<input type="text" name="quantity" onChange={this.setData} value={this.state.quantity} className="class7"></input>
                    </div>
                    <div className="class6">
                        Rate:<input type="text" name="rate" onChange={this.setData} value={this.state.rate} className="class7"></input>
                    </div>
                    <div>
                        <input value="Save" onClick={this.saveData} type="button"></input>
                        <input value="Update" onClick={this.updateData} type="button"></input>
                    </div>
                </form>
                <table border={2} className="class8">
                    <thead >
                        <tr>
                            <th>Sl.No</th>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>Rate</th>
                        </tr>

                    </thead>
                    <tbody>
                        {this.state.disp.map((res, key) => (
                            <tr key={key}>
                                <td>{key + 1}</td>
                                <td>{res.item}</td>
                                <td>{res.quantity}</td>
                                <td>{res.rate}</td>
                                <td><input type="button" value="Edit" onClick={() => { this.editData(key) }} /></td>
                            </tr>
                        ))
                        }

                    </tbody>

                </table>
            </div >


        )
    }
}
export default Display 
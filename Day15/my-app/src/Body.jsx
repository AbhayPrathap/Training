import React from 'react';
import Button from 'react-bootstrap/Button';
// import Image from 'react-bootstrap/Image'


class Body extends React.Component{
    render(){
        return(
            <div >
                <div className="class3">
                <div className="class4" >
                <Button className="class5" variant="secondary">About</Button>{' '}
                <Button className="class5" variant="secondary">Precautions</Button>{' '}
                <Button className="class5" variant="secondary">Symptoms</Button>{' '}
                <Button className="class5" variant="secondary">Treatment</Button>{' '}
                </div>
                </div>
                <div className="class6">
                {/* <Image src = 'https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/03/30/899772-coronavirus-6.jpg'></Image> */}
                

                </div>
            </div>
        )
    }
}

export default Body;
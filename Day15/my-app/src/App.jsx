import React from 'react';

import Header from '../src/Header';
import Body from '../src/Body';
import Footer from './Footer';

class App extends React.Component {
    render() {
        return (
            <div>
            <Header></Header>
            <Body></Body>
            <Footer></Footer> 
            </div>
        )
    }
}


export default App;
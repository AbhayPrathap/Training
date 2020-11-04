import React from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Header from './Components/Header/header';
import Purchase from './Components/medical/purchase';
import Purchasetable from './Components/medical/purchaseTable';
import Sales from './Components/medical/sales';
import Salestable from './Components/medical/salesTable';
import { store } from './Components/Store/store';



const AppRouter = (
    <Provider store={store}>
        <Router>
            <Header></Header>
            <Switch>
                <Route exact path="/purchase/entry" component={Purchase}></Route>
                <Route exact path="/sales/entry" component={Sales}></Route>
                <Route exact path="/purchase/table" component={Purchasetable}></Route>
                <Route exact path="/sales/table" component={Salestable}></Route>

            </Switch>
        </Router>
    </Provider>
)

export default AppRouter
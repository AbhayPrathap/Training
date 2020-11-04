import React from 'react'
import { Provider } from 'react-redux'
import {Route,BrowserRouter as Router,Switch} from 'react-router-dom'
import App from './App'
import Header from './components/header/header'
import Purchase from './components/purchase/purchase'
import Purchasetable from './components/purchase/purchasetable'
import Sales from './components/sales/sales'
import Salestable from './components/sales/salestable'
import { store } from './redux/store/store'


const AppRouter=(
     <Provider store={store}>
    <Router>
        <Header></Header>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/purchase" component={Purchase}/>
            <Route exact path="/purchasetable" component={Purchasetable}/>

            <Route  path="/sales" component={Sales}/>
            <Route  path="/salestable" component={Salestable}/>

        </Switch>
    </Router>
     </Provider>
)
export default AppRouter
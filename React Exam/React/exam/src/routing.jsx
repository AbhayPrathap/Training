import React from 'react'
import { Provider } from 'react-redux'
import {Route,BrowserRouter as Router,Switch} from 'react-router-dom'
import App from './App'
import { store } from './Redux/Store/store'
import RegisterUser from './Components/Registration/register'
import Userlog from './Components/Home/homeuser'
import Header from './Components/Header/header'
import LoginUser from './Components/LoginPage/login'



const AppRouter=(
     <Provider store={store}>
    <Router>
        <Header></Header>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/register" component={RegisterUser}/>
            <Route exact path="/login" component={LoginUser}/>
            <Route  path="/details" component={Userlog}/>

        </Switch>
    </Router>
     </Provider>
)
export default AppRouter
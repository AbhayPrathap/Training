import{Route, BrowserRouter as Router,Switch} from 'react-router-dom'
import React from 'react';
import App from './App'
import AddToDo from './Components/todo/AddToDo'
import ViewToDo from './Components/todo/ViewToDo'
import { store } from './Components/Store/store';
import { Provider } from 'react-redux';
import Header from './Components/header/header';

const AppRouter =(
    <Provider store={store}>
          
    <Router>
    <Header></Header>
        <Switch>
        <Route exact path="/" component={App}></Route>
        <Route exact path="/addtodo" component={AddToDo}></Route>
        <Route exact path="/viewtodo" component={ViewToDo}></Route>y
        </Switch>
    </Router>
    </Provider>
)

export default AppRouter
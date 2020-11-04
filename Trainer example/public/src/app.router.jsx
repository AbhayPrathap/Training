import React from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import App from './App';
import getAllData from './components/getAllData';
import Header from './components/header/header';
import Loader from './components/loader/Loader';
import TodoForm from './components/todoForm';
import TodoAppFromServer from './components/toDoFromServer';
import TodoLists from './components/todoList';
import { store } from './redux/store/store';

const AppRouter = (
    <Provider store={store}>
        <Router>
            <Header></Header>
            <Loader />
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/todo" component={TodoForm} />
                <Route exact path="/view" component={TodoLists} />
                <Route exact path="/getData" component={getAllData} />
                <Route path="/todoFromServer" component={TodoAppFromServer} />
            </Switch>
        </Router>
    </Provider>
)
export default AppRouter
import React from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import App from './App';
import getAllData from './components/todo/getAllData';
import Header from './components/header/header';
import Loader from './components/loader/Loader';
import TodoForm from './components/todo/todoForm';
import TodoAppFromServer from './components/todo/toDoFromServer';
import TodoLists from './components/todo/todoList';
import createTutorial from './components/tutorial/createTutorial';
import { store } from './redux/store/store';
import viewTutorial from './components/tutorial/viewTutorial';

const AppRouter = (
    <Provider store={store}>
        <Router>
            <Header></Header>
            <Loader />
            <Switch>
                <Route exact path="/" component={App} />
                {/* <Route path="/todo" component={TodoForm} />
                <Route exact path="/view" component={TodoLists} />
                <Route exact path="/getData" component={getAllData} />
                <Route path="/todoFromServer" component={TodoAppFromServer} /> */}
                <Route path="/createtutorial" component={createTutorial} />
                <Route path="/viewTutorial" component={viewTutorial}/>
            </Switch>
        </Router>
    </Provider>
)
export default AppRouter
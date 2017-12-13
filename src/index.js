import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import reducers from './reducers';

import WelcomePage from './components/welcome_page'
import MainPage from './components/main_page'
import AboutPage from './components/about_page';

import './style/style.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                {/* <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/main">Main</Link></li>
                </ul>
                <hr /> */}
                <Switch>
                    <Route path='/main' component={MainPage} />
                    <Route path='/about' component={AboutPage} />
                    <Route path='/' component={WelcomePage} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , document.querySelector('.container'));